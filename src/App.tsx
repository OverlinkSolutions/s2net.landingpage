import React from 'react';
import app from './app.module.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ChooseBattery from './components/ChooseBattery';
import StoreMap from './components/StoreMap';

function App() {
  const ourServicesRef = React.useRef<HTMLDivElement>(null);
  const aboutUsRef = React.useRef<HTMLDivElement>(null);

  const refs = [aboutUsRef, ourServicesRef ];

  const handleHeaderClick = (refName: number) => {
    refs[refName].current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <main id={app.container} className="container column">
      <Header handleHeaderClick={handleHeaderClick}/>
      <Banner />
      <ChooseBattery />
      <StoreMap />
      <Footer />
    </main>
  );
}

export default App;
