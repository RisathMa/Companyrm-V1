
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './data';
import { Navbar, Footer } from './layout';

// Pages
import { HomePage } from './home';
import { FeaturesPage } from './features';
import { ProductsPage } from './products';
import { SecurityPage } from './security';
import { AboutPage } from './about';
import { AuthPage } from './auth';

const App = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  // Simple router based on state
  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage setPage={setActivePage} />;
      case 'features': return <FeaturesPage />;
      case 'products': return <ProductsPage />;
      case 'security': return <SecurityPage />;
      case 'about': return <AboutPage />;
      case 'auth': return <AuthPage setPage={setActivePage} />;
      default: return <HomePage setPage={setActivePage} />;
    }
  };

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="font-sans text-dark antialiased min-h-screen flex flex-col">
      {activePage !== 'auth' && <Navbar activePage={activePage} setPage={setActivePage} />}
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {activePage !== 'auth' && <Footer setPage={setActivePage} />}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
