import app from './app.module.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ChoosePlan from './components/ChoosePlan';
import StoreMap from './components/StoreMap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <main id={app.container} className="container column">
      <Header offset={150}/>
      <Banner />
      <ChoosePlan />
      <StoreMap />
      <Footer />
    </main>
  );
}

export default App;
