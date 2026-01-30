import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Restaurant from './pages/Restaurant';
import Tours from './pages/Tours';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/tours" element={<Tours />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
