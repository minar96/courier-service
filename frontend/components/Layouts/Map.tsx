// components/GoogleMap.tsx
import { useEffect } from 'react';

export default function GoogleMap() {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      (window as any).initMap = () => {
        const map = new (window as any).google.maps.Map(document.getElementById('map'), {
          center: { lat: 23.8103, lng: 90.4125 },
          zoom: 10,
        });

        new (window as any).google.maps.Marker({
          position: { lat: 23.8103, lng: 90.4125 },
          map: map,
        });
      };
    };

    if (!(window as any).google) loadScript();
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
}
