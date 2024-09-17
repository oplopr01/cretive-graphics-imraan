
import './App.css';
import CallToActionSection from './components/CallToActionSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/Herosection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;
