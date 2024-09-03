import app from './app.module.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './sections/Banner';
import Plans from './sections/ChoosePlan';
import StoreMap from './components/StoreMap';
import AboutUs from './sections/AboutUs';
import Brazmovel from './sections/Brazmovel';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <main id={app.container} className="container column">
      <Header offset={150}/>
      <Banner />
      <AboutUs/>
      <Plans />
      <Brazmovel />
      <StoreMap />
      <Footer />
    </main>
  );
}

export default App;
