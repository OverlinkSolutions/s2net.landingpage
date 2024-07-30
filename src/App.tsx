import app from './app.module.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ChoosePlan from './components/ChoosePlan';
import StoreMap from './components/StoreMap';

function App() {
  return (
    <main id={app.container} className="container column">
      <Header/>
      <Banner />
      <ChoosePlan />
      <StoreMap />
      <Footer />
    </main>
  );
}

export default App;
