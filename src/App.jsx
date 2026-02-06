import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OfficeBearers from './pages/OfficeBearers';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Initiatives from './pages/Initiatives';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/office-bearers" element={<OfficeBearers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/initiatives" element={<Initiatives />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
