
import React, { useState, useEffect } from 'react';
import { Page } from './data';
import { Button, Logo } from './components';

export const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string, page: Page }[] = [
    { label: 'Features', page: 'features' },
    { label: 'Products', page: 'products' },
    { label: 'Security', page: 'security' },
    { label: 'About', page: 'about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setPage('home')}>
          <Logo />
          <span className="font-heading font-bold text-2xl tracking-tight text-dark">
            RM Solutions
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => setPage(item.page)}
              className={`text-sm font-medium transition-colors ${activePage === item.page ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant="primary" 
            className="!py-2.5 !px-6 !text-sm !rounded-lg"
            onClick={() => setPage('auth')}
          >
            Sign In
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl text-dark" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 md:hidden animate-fade-in-up h-screen">
          <button onClick={() => { setPage('home'); setIsOpen(false); }} className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 text-left">Home</button>
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => { setPage(item.page); setIsOpen(false); }} 
              className={`text-lg font-medium py-2 border-b border-gray-50 text-left ${activePage === item.page ? 'text-primary' : 'text-gray-800'}`}
            >
              {item.label}
            </button>
          ))}
          <Button variant="primary" className="w-full mt-4" onClick={() => { setPage('auth'); setIsOpen(false); }}>Sign In</Button>
        </div>
      )}
    </nav>
  );
};

export const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-dark text-white pt-20 pb-10 mt-auto">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => setPage('home')}>
           <Logo className="w-8 h-8" />
           <span className="font-heading font-bold text-xl">RM Solutions</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Innovating automation and privacy tools for the modern web. Built in Sri Lanka, used globally.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Products</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><button onClick={() => setPage('products')} className="hover:text-white text-left">Video FaceBlur</button></li>
          <li><button onClick={() => setPage('security')} className="hover:text-white text-left">Secure Data Vault</button></li>
          <li><button onClick={() => setPage('products')} className="hover:text-white text-left">Student AI</button></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><button onClick={() => setPage('about')} className="hover:text-white text-left">About Us</button></li>
          <li><button onClick={() => setPage('auth')} className="hover:text-white text-left">Login / Sign Up</button></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Stay Updated</h4>
        <p className="text-gray-400 text-sm mb-4">Join our newsletter for new tool releases.</p>
        <div className="flex">
          <input type="email" placeholder="Enter your email" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary" />
          <button className="bg-primary px-4 rounded-r-lg hover:bg-blue-600 transition-colors">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
      <p>&copy; 2024 RM Solutions LK. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <span><i className="fa-solid fa-lock mr-2"></i>Secure & Encrypted</span>
        <span><i className="fa-solid fa-cookie mr-2"></i>Cookie Consent</span>
      </div>
    </div>
  </footer>
);
