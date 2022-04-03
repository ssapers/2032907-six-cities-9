import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { Offers } from '../../types/offer';

type MapProps = {
  offers: Offers,
  activeOffer: number
};

const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]});

const currentCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]});

function MapCity(props: MapProps): JSX.Element {
  const { offers, activeOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].location);

  useEffect(() => {
    if (map) {
      offers.forEach(({ id, location: { latitude, longitude } }) => {
        const marker = new Marker({ lat: latitude, lng: longitude });

        marker
          .setIcon(
            id === activeOffer ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}
export default MapCity;
