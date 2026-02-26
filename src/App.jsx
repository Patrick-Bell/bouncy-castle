import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

import Home from './components/Pages/Home';
import TermsPage from './components/Legal/Terms';
import RiskPage from './components/Legal/Risk';
import FAQPage from './components/FAQ/FAQ';
import Products from './components/Catalogue/Products';
import DynamicProductPage from './components/Catalogue/DynamicProductPage';
import Contact from './components/Contact/Contact';
import NotFound from './components/404/NotFound';
import SpeedDial from './components/SpeedDial/SpeedDial';
import Footer from './components/Footer/Footer';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

// Metadata per page
const getMetaData = (path) => {
  switch (path) {
    case '/':
      return { title: 'Bouncy Castle Hire | Home', description: 'Hire fun bouncy castles for parties and events in your area.' };
    case '/terms-and-conditions':
      return { title: 'Terms & Conditions', description: 'Our rental terms and safety guidelines.' };
    case '/risk-assessments':
      return { title: 'Risk Assessments', description: 'Learn about safety and risk management for our inflatables.' };
    case '/faq':
      return { title: 'FAQ', description: 'Frequently asked questions about hiring our bouncy castles.' };
    case '/bouncy-castles':
      return { title: 'Our Inflatables', description: 'Browse our selection of bouncy castles available for hire.' };
    case '/contact':
      return { title: 'Contact Us', description: 'Get in touch to book your bouncy castle.' };
    default:
      return { title: 'Bouncy Castle Hire', description: 'Hire fun inflatables for parties and events.' };
  }
};

// JSON-LD structured data for Local Business
const generateJSONLD = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bouncy Castle Hire",
  "image": "https://bouncy-castle.netlify.app/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Fun Street",
    "addressLocality": "YourCity",
    "addressRegion": "YourRegion",
    "postalCode": "12345",
    "addressCountry": "UK"
  },
  "telephone": "+44 1234 567890",
  "url": "https://bouncy-castle.netlify.app"
});

function App() {
  const location = useLocation();
  const meta = getMetaData(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`https://bouncy-castle.netlify.app${location.pathname}`} />
        <meta property="og:image" content="https://bouncy-castle.netlify.app/social-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://bouncy-castle.netlify.app/social-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(generateJSONLD())}
        </script>
      </Helmet>

      <ScrollToTop />

      {/* Main content grows to fill remaining space */}
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terms-and-conditions' element={< RiskPage />} />
          <Route path='/risk-assessments' element={<TermsPage />} />
          <Route path='/frequently-asked-questions' element={<FAQPage />} />
          <Route path='/bouncy-castles' element={<Products />} />
          <Route path='/bouncy-castle/:id' element={<DynamicProductPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer always at the bottom */}
      <Footer />

      {/* SpeedDial fixed on screen, does not affect body height */}
      <div className="fixed bottom-5 right-5 z-50">
        <SpeedDial />
      </div>
    </div>
  );
}

export default App;