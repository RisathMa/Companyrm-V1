
import React, { useState, useEffect } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Page, getCookie, setCookie, eraseCookie } from './data';
import { Navbar, Footer } from './layout';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

// Pages
import { HomePage } from './home';
import { FeaturesPage } from './features';
import { ProductsPage } from './products';
import { SecurityPage } from './security';
import { AboutPage } from './about';
import { AuthPage } from './auth';
import { PrivacyPolicy, TermsOfService, CookiePolicy } from './LegalPages';
import { FAQPage } from './FAQPage';
import { BlogPage } from './BlogPage';

const App = () => {
  const [activePage, setActivePage] = useState<Page>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for auth cookie on mount
    const authCookie = getCookie('rm_auth_token');
    if (authCookie) {
      setIsAuthenticated(true);
    }

    // Optional: Sync with Firebase auth state if needed, but strict cookie requirement is handled above.
    // We rely on the cookie as the primary gatekeeper for the UI state per requirements.
  }, []);

  const handleLogin = () => {
    // Set a cookie that expires in 7 days
    setCookie('rm_auth_token', 'valid_session_token_' + Date.now(), 7);
    setIsAuthenticated(true);
    // Redirect to products page after login as requested
    setActivePage('products');
    window.scrollTo(0, 0);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out from Firebase", error);
    }
    eraseCookie('rm_auth_token');
    setIsAuthenticated(false);
    setActivePage('home');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [activePage]);

  // Simple router based on state
  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setPage={setActivePage} />;
      case 'features': return <FeaturesPage />;
      case 'products': return <ProductsPage isAuthenticated={isAuthenticated} setPage={setActivePage} />;
      case 'security': return <SecurityPage />;
      case 'about': return <AboutPage />;
      case 'auth': return <AuthPage setPage={setActivePage} onLogin={handleLogin} />;
      case 'privacy-policy': return <PrivacyPolicy />;
      case 'terms-of-service': return <TermsOfService />;
      case 'cookie-policy': return <CookiePolicy />;
      case 'blog': return <BlogPage />;
      case 'faq': return <FAQPage />;
      default: return <HomePage setPage={setActivePage} />;
    }
  };

  return (
    <div className="font-sans text-dark antialiased min-h-screen flex flex-col">
      {activePage !== 'auth' && (
        <Navbar
          activePage={activePage}
          setPage={setActivePage}
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
        />
      )}

      <main className="flex-grow">
        {renderPage()}
      </main>

      {activePage !== 'auth' && <Footer setPage={setActivePage} />}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
