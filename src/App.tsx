import app from './app.module.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './pages/home/sections/Banner';
import Plans from './pages/home/sections/ChoosePlan';
import StoreMap from './components/StoreMap';
import Brazmovel from './pages/home/sections/Brazmovel';
import OurServices from './pages/home/sections/OurServices';
import PromoITTV from './pages/home/sections/PromoITTV';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <main id={app.container} className="container column">
      <Header offset={150}/>
      <Banner />
      <OurServices />
      <Plans />
      <PromoITTV/>
      <Brazmovel />
      <StoreMap />
      <Footer />
    </main>
  );
}

export default App;
