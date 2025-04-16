import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';

// Public pages
import Home from './pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Developers from './components/pages/Developers';
import Services from './components/home/Services';
import Projects from './components/pages/Projects';
import Plans from './components/pages/Plans';
import RequestPlan from './components/pages/RequestPlan';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={
          <PublicLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/request-plan" element={<RequestPlan />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-cyan-400 mb-4">404</h1>
                    <p className="text-xl text-gray-400">Page not found</p>
                  </div>
                </div>
              } />
            </Routes>
          </PublicLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;