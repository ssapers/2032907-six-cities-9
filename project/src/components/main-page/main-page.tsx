import PlaceCardList from '../card-list/card-list';
import MapCity from '../map/map';
import {Offer ,Offers, OffersSortingType } from '../../types/offer';
import { useState } from 'react';
import SortingMenu from '../sorting-menu/sorting-menu';

type MainPageProps = {
  amountOffers: number;
  offers: Offers;
}

function getCompareFunction(type: OffersSortingType): (a: Offer, b: Offer) => number {
  const mapping = {
    none: () => 0,
    byPriceUp: (a: Offer, b: Offer) => {
      if (a.price === b.price) {
        return 0;
      }
      return a.price > b.price ? 1 : -1;
    },
    byPriceDown: (a: Offer, b: Offer) => {
      if (a.price === b.price) {
        return 0;
      }
      return a.price < b.price ? 1 : -1;
    },
    byRatingDown: (a: Offer, b: Offer) => {
      if (a.rating === b.rating) {
        return 0;
      }
      return a.rating > b.rating ? -1 : 1;
    },
  };
  return mapping[type];
}


function MainPage({amountOffers, offers}: MainPageProps): JSX.Element {
  const[activeOffer, setActiveOffer] = useState(0);

  const handleHover = (id:number) => {
    const currentPoint = offers.find((offer) => offer.id === id,
    );
    if(currentPoint){
      setActiveOffer(currentPoint.id);
    }
  };
  const [sortingType, setSortingType] = useState<OffersSortingType>('none');
  const sortedOffers = [...offers].sort(getCompareFunction(sortingType));

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{amountOffers} places to stay in Amsterdam</b>
        <SortingMenu setSorting={setSortingType} sortingType={sortingType}/>
        <div className="cities__places-list places__list tabs__content">
          {<PlaceCardList offers={sortedOffers} onOfferHover={handleHover}/>}
        </div>
      </section>
      <div className="cities__right-section">
        {offers.length && (
          <section className="cities__map map">
            <MapCity offers={offers} activeOffer={activeOffer}/>
          </section>
        )}
      </div>
    </div>
  );
}

export default MainPage;
