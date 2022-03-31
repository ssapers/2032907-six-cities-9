import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <Link className="page-not-found" to={AppRoute.Root}>
      page-not-found
    </Link>
  );
}

export default PageNotFound;
