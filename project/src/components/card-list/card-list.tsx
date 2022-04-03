import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';

type PlaceCardListProps = {
  offers: Offers;
  onOfferHover:(id:number) => void;
}

function PlaceCardList({offers, onOfferHover}: PlaceCardListProps): JSX.Element {

  return (
    <div className='cities__places-list places__list tabs__content'> {
      offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onOfferHover={onOfferHover}/>)
    }
    </div>
  );

}

export default PlaceCardList;
