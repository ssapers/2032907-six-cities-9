import ReviewCard from '../review-card/review-card';
import {Comment} from '../../types/offers';

function ReviewCardList(props: { comments: Comment[] }): JSX.Element {
  const { comments } = props;

  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewCard key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default ReviewCardList;
