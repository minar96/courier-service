<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderStatusLog;
use App\Models\Receiver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
       // List Orders with optional filters
   // List Orders with optional filters (READ ONLY)
    public function index(Request $request)
    {
        $query = Order::with(['receiver', 'user']);

        if ($request->status) {
            $query->where('status', $request->status);
        }

        if ($request->date_from && $request->date_to) {
            $query->whereBetween('order_date', [$request->date_from, $request->date_to]);
        }

        return response()->json($query->paginate(10));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',

            // Receiver Fields
            'receiver.name' => 'required|string',
            'receiver.mobile_no' => 'required|string|max:20',
            'receiver.email' => 'nullable|email',
            'receiver.address' => 'required|string',
            'receiver.country_id' => 'required|exists:countries,id',
            'receiver.state_id' => 'nullable|exists:states,id',
            'receiver.city_id' => 'nullable|exists:cities,id',

            // Order Fields
            'tracking_no' => 'required|unique:orders',
            'shipping_fee' => 'nullable|numeric',
            'cod_amount' => 'nullable|numeric',
            'notes' => 'nullable|string',
            'product_category' => 'required|string',
            'product_details' => 'required|string',
            'order_date' => 'required|date',
        ]);

        DB::beginTransaction();
        try {
            $receiver = Receiver::create([
                'user_id'   => $data['user_id'],
                'name'      => $data['receiver']['name'],
                'mobile_no' => $data['receiver']['mobile_no'],
                'email'     => $data['receiver']['email'] ?? null,
                'address'   => $data['receiver']['address'],
                'country_id'=> $data['receiver']['country_id'],
                'state_id'  => $data['receiver']['state_id'] ?? null,
                'city_id'   => $data['receiver']['city_id'] ?? null,
            ]);

            $order = Order::create([
                'user_id'        => $data['user_id'],
                'receiver_id'    => $receiver->id,
                'tracking_no'    => $data['tracking_no'],
                'shipping_fee'   => $data['shipping_fee'] ?? 0,
                'cod_amount'     => $data['cod_amount'] ?? 0,
                'notes'          => $data['notes'] ?? null,
                'product_category' => $data['product_category'],
                'product_details'  => $data['product_details'],
                'order_date'     => $data['order_date'],
            ]);

            OrderStatusLog::create([
                'order_id' => $order->id,
                'old_status' => 'pending',
                'new_status' => 'pending',
            ]);

            DB::commit();
            return response()->json(['message' => 'Order created successfully', 'order' => $order], 201);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to create order', 'details' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        $order = Order::with(['receiver', 'user', 'statusLogs'])->findOrFail($id);
        return response()->json($order);
    }

    // Update Order (WRITE - Transaction Added)
    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);

        $data = $request->validate([
            'receiver_id' => 'nullable|exists:receivers,id',
            'shipping_fee' => 'nullable|numeric',
            'cod_amount' => 'nullable|numeric',
            'notes' => 'nullable|string',
            'product_category' => 'nullable|string',
            'product_details' => 'nullable|string',
            'order_date' => 'nullable|date',
        ]);

        DB::beginTransaction();
        try {
            $order->update($data);

            OrderStatusLog::create([
                'order_id' => $order->id,
                'old_status' => $order->status,
                'new_status' => $order->status,
            ]);

            DB::commit();
            return response()->json(['message' => 'Order updated successfully', 'order' => $order]);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to update order', 'details' => $e->getMessage()], 500);
        }
    }

    public function updateStatus(Request $request, $id)
    {
        $order = Order::findOrFail($id);

        $data = $request->validate([
            'new_status' => 'required|string',
            'updated_by' => 'nullable|string',
            'updated_reason' => 'nullable|string',
            'remarks' => 'nullable|string',
        ]);

        $oldStatus = $order->status;

        DB::beginTransaction();
        try {
            $order->update(['status' => $data['new_status']]);

            OrderStatusLog::create([
                'order_id' => $order->id,
                'old_status' => $oldStatus,
                'new_status' => $data['new_status'],
                'updated_by' => $data['updated_by'] ?? null,
                'updated_reason' => $data['updated_reason'] ?? null,
                'remarks' => $data['remarks'] ?? null,
            ]);

            DB::commit();
            return response()->json(['message' => 'Order status updated successfully']);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to update order status', 'details' => $e->getMessage()], 500);
        }
    }


    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            $order = Order::findOrFail($id);
            $order->delete();

            DB::commit();
            return response()->json(['message' => 'Order deleted successfully']);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to delete order', 'details' => $e->getMessage()], 500);
        }
    }

    // Restore Soft Deleted Order (WRITE - Transaction Added)
    public function restore($id)
    {
        DB::beginTransaction();
        try {
            $order = Order::onlyTrashed()->findOrFail($id);
            $order->restore();

            DB::commit();
            return response()->json(['message' => 'Order restored successfully']);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to restore order', 'details' => $e->getMessage()], 500);
        }
    }
}
