import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Companies from '../components/home/Companies';
import CoreSkills from '../components/home/CoreSkills';
import AboutUs from '../components/home/AboutUs';
import SEOHead from '../components/shared/SEOHead';

const Home = () => {
  // SEO structured data for home page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevSecure Technology Solutions",
    "url": "https://devsecure.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://devsecure.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEOHead
        title="DevSecure - Empowering Innovation Through Technology Solutions"
        description="DevSecure offers cutting-edge technology solutions including AI integration, cybersecurity, machine learning, and quantum-inspired development services. Transform your business with our secure, innovative digital solutions."
        keywords="DevSecure innovation, DevSecure development, advanced technology solutions, quantum-inspired development, AI integration, secure digital transformation, custom software development, technology innovation partners"
        currentPage="/"
        structuredData={structuredData}
      />
      <Hero />
      <CoreSkills />
      <Services />
      <Companies />
      <AboutUs />
    </>
  );
};

export default Home;