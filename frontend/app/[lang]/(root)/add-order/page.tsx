import Hero from "@/components/Order/OrderForm";

import { Footer, Header } from "@/components/Layouts";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const OrderFormPage = async (props: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = await props.params;
    const dictionary = await getDictionary(lang);
  return (
    <>
        {/* 🔥 Custom Header only for this page */}
      {/* <div className="sticky top-0 z-50 w-full bg-blue-600 text-white py-4 px-6 shadow-md">
        <h1 className="text-xl font-bold">
          This is my new header 🎉
        </h1>
      </div> */}
        <div id="OrderFormHero" className="w-full bg-[#fff4e33d]">
            <Hero lang={lang} dictionary={dictionary}/>
        </div>
       
    </>
    );
};

export default OrderFormPage;