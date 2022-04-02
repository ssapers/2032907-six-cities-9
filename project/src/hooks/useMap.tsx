import { useEffect, useState, MutableRefObject } from 'react';
import leaflet, { Map } from 'leaflet';
import { Location } from '../types/offer';
import { URL_MARKER, URL_MARKER_ATTRIBUTION } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: Location): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet.tileLayer(
        URL_MARKER,
        {
          attribution: URL_MARKER_ATTRIBUTION,
        },
      ).addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, location]);

  return map;
}

export default useMap;
