import { Review } from '../../types/review';

type ReviewProps = {
  review: Review;
}

function ReviewCard(props: ReviewProps): JSX.Element {
  const { review } = props;
  const { user, rating, comment, date } = review;
  return (
    <li key={review.id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Review avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime='2019-04-24'>{date}</time>
      </div>
    </li>
  );
}

export default ReviewCard;
