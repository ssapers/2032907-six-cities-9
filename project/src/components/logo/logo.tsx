import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Logo(): JSX.Element {
  return (
    <Link className="game__back" to={AppRoute.Root}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
