import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import Footer from './components/footer';
import Gallery from './components/Gallery';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}