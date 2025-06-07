import Hero from './components/Hero';
import VechileScene from './components/VechileScene';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="font-sans">
      <Header/>
      <Hero />
      <VechileScene />
      <Contact />
      <Footer />
    </div>
  );
}
