import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import MissionVision from './pages/MissionVision';
import ThematicAreas from './pages/ThematicAreas';
import CoreTeam from './pages/CoreTeam';
import AdvocacyBlogs from './pages/AdvocacyBlogs';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/thematic-areas" element={<ThematicAreas />} />
        <Route path="/core-team" element={<CoreTeam />} />
        <Route path="/advocacy-blogs" element={<AdvocacyBlogs />} />
        <Route path="/partners-csr" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
