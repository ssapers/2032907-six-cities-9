import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type PlaceCardProps = {
  offer: Offer;
  onOfferHover?: (id: number) => void;
  onOfferLeave?:(id: null) => void;
};

function PlaceCard({ offer, onOfferHover, onOfferLeave }: PlaceCardProps): JSX.Element {
  const { previewImage, title, price, type, isPremium } = offer;
  const getCardMark = () => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';

  return (
    <article className="cities__place-card place-card" onMouseOver={() => onOfferHover?.(offer.id)} onMouseLeave={() => onOfferLeave?.(null)}>
      {getCardMark()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}${offer.id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width:`${offer.rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
