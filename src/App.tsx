import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PublicLayout from './layouts/PublicLayout';

// Public pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Developers = lazy(() => import('./components/pages/Developers'));
const Services = lazy(() => import('./components/home/Services'));
const Projects = lazy(() => import('./components/pages/Projects'));
const Plans = lazy(() => import('./components/pages/Plans'));
const RequestPlan = lazy(() => import('./components/pages/RequestPlan'));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/pages/TermsOfService'));

// Lightweight loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
    <div className="text-center">
      <div className="h-16 w-16 border-t-2 border-b-2 border-cyan-500 rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-cyan-400 text-lg animate-pulse">Initializing Quantum Interface...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </Router>
  );
}

export default App;