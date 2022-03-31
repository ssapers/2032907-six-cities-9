import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import PageNotFound from '../page-not-found/page-not-found';
import LoginPage from '../login/login-page';
import FavoritesPage from '../favorites/favorites-page';
import PrivateRoute from '../private-route/private-route';
import OfferPage from '../property/property-page';
import { Offers } from '../../types/offer';

type AppScreenProps = {
  amountOffers: number;
  offers: Offers;
}

function App({amountOffers, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage amountOffers={amountOffers} offers={offers}/>} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesPage offers={offers} /></PrivateRoute>}/>
        <Route path={AppRoute.Offer} element={<OfferPage offers={offers} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
