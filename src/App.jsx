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
import PaymentsPage from './components/Legal/PaymentsPage';
import GalleryPage from './components/AboutUs/Gallery';
import WeatherPolicy from './components/Legal/WeatherPolicy';

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
      return { title: 'Haze Events | Home', description: 'Hire fun bouncy castles for parties and events in your area.' };
    case '/terms-and-conditions':
      return { title: 'Haze Events | Terms & Conditions', description: 'Our rental terms and safety guidelines.' };
    case '/risk-assessments':
      return { title: 'Haze Events | Risk Assessments', description: 'Learn about safety and risk management for our inflatables.' };
    case '/frequently-asked-questions':
      return { title: 'Haze Events | FAQ', description: 'Frequently asked questions about hiring our bouncy castles.' };
    case '/bouncy-castles':
      return { title: 'Haze Events | Our Inflatables', description: 'Browse our selection of bouncy castles available for hire.' };
    case '/contact':
      return { title: 'Haze Events | Contact Us', description: 'Get in touch to book your bouncy castle.' };
    case '/gallery':
      return { title: 'Haze Events | Gallery', description: 'See our bouncy castles in action at real events.' };
    case '/payments':
      return { title: 'Haze Events | Payment Information', description: 'Learn about our payment options and policies.' };
    case '/not-found':
      return { title: 'Haze Events | Page Not Found', description: 'The page you are looking for does not exist.' };
    case '/bad-weather-policy':
      return { title: 'Haze Events | Bad Weather Policy', description: 'Our policy for cancellations and rescheduling due to bad weather.' };
    default:
      return { title: 'Haze Events | Moments That Matter', description: 'Hire fun inflatables for parties and events.' };
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
          <Route path='/bouncy-castle/:slug' element={<DynamicProductPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/payments' element={<PaymentsPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/bad-weather-policy' element={<WeatherPolicy />} />
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