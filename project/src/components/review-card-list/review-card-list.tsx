import ReviewCard from '../review-card/review-card';
import { Review } from '../../types/review';
import { reviews } from '../../mocks/reviews';

function ReviewCardList(): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot;<span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((reviewItem: Review) => (
          <ReviewCard review={reviewItem} key={reviewItem.id} />
        ))}
      </ul>
    </>
  );
}
export default ReviewCardList;
