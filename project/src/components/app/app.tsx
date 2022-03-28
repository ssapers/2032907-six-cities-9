import MainPage from '../main-page/main-page';

type AppScreenProps = {
  amountOffers: number;
}

function App({amountOffers}: AppScreenProps): JSX.Element {
  return (
    <MainPage amountOffers={amountOffers} />
  );
}

export default App;
