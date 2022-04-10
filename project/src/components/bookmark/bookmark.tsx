import {Link} from 'react-router-dom';
import IconBookmark from '../icon-bookmark/icon-bookmark';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import {changeOfferStatusAction} from '../../store/api-actions';
import {getAuthStatus} from '../../store/user-process/selectors';
import {PlaceCardType} from '../../types/other-types';
import {AppRoute, AuthorizationStatus} from '../../const';

const getWidth = (isRoom: boolean) => isRoom ? '31' : '18';
const getHeight = (isRoom: boolean) => isRoom ? '33' : '19';
const getSvgClassName = (isRoom: boolean) => isRoom ? 'property__bookmark-icon' : 'place-card__bookmark-icon';

export const getViewProps = (isTypeRoom: boolean) => ({
  svgClassName: getSvgClassName(isTypeRoom),
  width: getWidth(isTypeRoom),
  height: getHeight(isTypeRoom),
});

const getElementClassName = (isRoom: boolean) => `${isRoom ? 'property__bookmark-button' : 'place-card__bookmark-button'}`;
const getModifier = (className: string, isFavorite: boolean) => `${className} ${isFavorite ? `${className}--active` : ''}`;
const getButtonClassName = (isRoom: boolean, isFavorite: boolean) => `${getModifier(getElementClassName(isRoom), isFavorite)} button`;

export type BookmarkProps = {hotelId: number, isFavorite: boolean, type: PlaceCardType};

function Bookmark(props: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const {hotelId, isFavorite, type} = props;
  const isTypeRoom = type === 'room';

  function handleButtonClick() {
    dispatch(changeOfferStatusAction({ hotelId, isFavorite, actionType: type }));
  }

  const buttonClassName = getButtonClassName(isTypeRoom, isFavorite);
  const viewProps = getViewProps(isTypeRoom);

  const content = <IconBookmark {...viewProps} />;
  return authStatus === AuthorizationStatus.Auth
    ? <button className={buttonClassName} type="button" onClick={handleButtonClick} data-type={type} >{content}</button>
    : <Link className={buttonClassName} to={AppRoute.Login} data-type={type} >{content}</Link>;
}

export default Bookmark;
