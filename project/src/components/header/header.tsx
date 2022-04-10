import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import HeaderNavLogged from '../header-nav-logged/header-nav-logged';
import HeaderNavNotLogged from '../header-nav-not-logged/header-nav-not-logged';
import {getUserDataForHeader} from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../const';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const {authStatus, email} = useAppSelector(getUserDataForHeader);
  const isAuthorisedUser = authStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {isAuthorisedUser ? <HeaderNavLogged dispatch={dispatch} email={email} /> : <HeaderNavNotLogged />}
        </div>
      </div>
    </header>
  );
}

export default Header;
