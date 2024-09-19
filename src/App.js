
import './App.css';
import CallToActionSection from './components/OurClients';
import FeaturesSection from './components/Services';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/Herosection';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;
