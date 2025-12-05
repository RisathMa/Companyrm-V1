import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- Types & Data ---

type Page = 'home' | 'features' | 'products' | 'security' | 'about' | 'auth';

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  icon: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "RM Video FaceBlur",
    category: "AI Tools",
    description: "Automatically detects and blurs faces in videos using advanced machine learning.",
    badge: "Most Popular",
    badgeColor: "bg-gradient-primary",
    icon: "fa-video"
  },
  {
    id: 2,
    title: "Secure Data Vault",
    category: "Security",
    description: "Military-grade encryption for your most sensitive enterprise documents.",
    badge: "New v2.0",
    badgeColor: "bg-success",
    icon: "fa-shield-halved"
  },
  {
    id: 3,
    title: "Student AI Assistant",
    category: "Students",
    description: "Research faster and organize citations with our academic AI companion.",
    badge: "Free Tier",
    badgeColor: "bg-blue-400",
    icon: "fa-graduation-cap"
  },
  {
    id: 4,
    title: "Auto-Translator Pro",
    category: "AI Tools",
    description: "Real-time voice and text translation for over 50+ languages.",
    icon: "fa-language"
  },
  {
    id: 5,
    title: "Privacy Shield API",
    category: "Security",
    description: "Integrate GDPR-compliant data masking directly into your applications.",
    badge: "Enterprise",
    badgeColor: "bg-dark",
    icon: "fa-code"
  },
  {
    id: 6,
    title: "Exam Prep Gen",
    category: "Students",
    description: "Generate practice quizzes from your lecture notes instantly.",
    icon: "fa-book-open"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Journalist at DailyNews",
    text: "RM Video FaceBlur saved me hours of editing time. The accuracy is incredible.",
    rating: 5
  },
  {
    id: 2,
    name: "David Perera",
    role: "CTO, TechLanka",
    text: "Security is paramount for us. RM Solutions delivers enterprise-grade protection seamlessly.",
    rating: 5
  },
  {
    id: 3,
    name: "Kasun De Silva",
    role: "University Student",
    text: "The Student AI tools helped me organize my thesis research 10x faster. Highly recommended!",
    rating: 4
  }
];

const TEAM = [
  { name: "Arjun Perera", role: "Founder & CEO", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun" },
  { name: "Nimali Fernando", role: "Head of AI", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nimali" },
  { name: "Kevin Dias", role: "Lead Security Engineer", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" },
  { name: "Sarah Khan", role: "Product Manager", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
];

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-primary text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1",
    secondary: "bg-white text-primary border-2 border-primary/10 hover:border-primary/30 hover:bg-blue-50",
    outline: "border-2 border-white/20 text-white hover:bg-white/10",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100"
  };

  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = '', id = '' }: any) => (
  <section id={id} className={`py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Logo = ({ className = "w-10 h-10" }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-primary/40 transition-colors"></div>
    <img 
      src="https://placehold.co/100x100/224CFF/FFFFFF.png?text=RM" 
      alt="RM Solutions Logo" 
      className={`relative ${className} rounded-full object-cover shadow-md border-2 border-white`}
    />
  </div>
);

const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
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

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
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

// --- Pages ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <>
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F5F5F5]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <Section className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center md:text-left animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-blue-100/50 text-primary font-semibold text-xs rounded-full mb-6 border border-blue-100">
              <i className="fa-solid fa-sparkles mr-2"></i>
              v2.0 Now Available
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-dark mb-6">
              AI-Powered Tools <br />
              <span className="text-gradient">For Everyone</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Explore secure, intelligent, and fast utilities designed for your daily productivity. From privacy protection to student automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={() => setPage('auth')}>
                Get Started <i className="fa-solid fa-arrow-right text-sm"></i>
              </Button>
              <Button variant="secondary" onClick={() => setPage('products')}>
                Explore Products
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="user" />
                   </div>
                 ))}
               </div>
               <div>
                 <span className="font-bold text-dark">120+</span> Happy Users
               </div>
            </div>
          </div>

          <div className="relative hidden md:block animate-float">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
               <div className="absolute inset-0 bg-gradient-primary rounded-[40px] rotate-6 opacity-20"></div>
               <div className="absolute inset-0 bg-white rounded-[40px] shadow-level-4 flex items-center justify-center overflow-hidden border border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
                  <div className="relative z-10 w-3/4 h-3/4 flex flex-col gap-4">
                     <div className="h-24 w-full bg-white rounded-2xl shadow-level-2 flex items-center px-4 gap-4 animate-pulse">
                        <div className="w-12 h-12 rounded-full bg-blue-100"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-3 w-3/4 bg-gray-100 rounded-full"></div>
                          <div className="h-3 w-1/2 bg-gray-100 rounded-full"></div>
                        </div>
                     </div>
                     <div className="h-24 w-full bg-white rounded-2xl shadow-level-2 flex items-center px-4 gap-4 animate-pulse" style={{animationDelay: '0.2s'}}>
                        <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-3 w-2/3 bg-gray-100 rounded-full"></div>
                          <div className="h-3 w-1/3 bg-gray-100 rounded-full"></div>
                        </div>
                     </div>
                     <div className="flex-1 bg-gradient-primary rounded-2xl opacity-10"></div>
                  </div>
               </div>
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-level-3 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                 <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success">
                   <i className="fa-solid fa-shield-check"></i>
                 </div>
                 <div>
                   <div className="text-xs text-gray-500">Security Status</div>
                   <div className="font-bold text-dark">Protected</div>
                 </div>
               </div>
            </div>
          </div>
        </Section>
      </div>

      <Section className="bg-white rounded-[40px] my-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose RM Solutions?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Enterprise-grade technology made accessible. We focus on security, speed, and usability.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 cursor-pointer" onClick={() => setPage('features')}>
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-level-1 hover:shadow-level-3 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 className="text-xl font-bold font-heading text-dark mb-3">Military-Grade Security</h3>
            <p className="text-gray-500 leading-relaxed">End-to-end encryption ensures your data remains private.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-level-1 hover:shadow-level-3 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <i className="fa-solid fa-brain"></i>
            </div>
            <h3 className="text-xl font-bold font-heading text-dark mb-3">Intelligent Automation</h3>
            <p className="text-gray-500 leading-relaxed">AI models learn and adapt to your workflow instantly.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-level-1 hover:shadow-level-3 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3 className="text-xl font-bold font-heading text-dark mb-3">Lightning Fast</h3>
            <p className="text-gray-500 leading-relaxed">Optimized performance guarantees 99.9% uptime.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button variant="secondary" onClick={() => setPage('features')}>View All Features</Button>
        </div>
      </Section>

      <Section className="!py-0 !px-0 !max-w-none">
        <div className="bg-gradient-primary py-20 px-6 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-blue-100 text-lg mb-10">Join 50,000+ professionals using RM Solutions for secure, automated tasks.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => setPage('auth')} className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">Start Free Trial</button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

const FeaturesPage = () => (
  <div className="pt-24 min-h-screen bg-light">
    <Section>
       <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
         <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Powerful Features for <br/><span className="text-gradient">Modern Teams</span></h1>
         <p className="text-lg text-gray-600">Discover what makes RM Solutions the preferred choice for over 10,000 enterprises worldwide.</p>
       </div>

       <div className="grid md:grid-cols-2 gap-8 mb-24">
         <div className="bg-white p-8 rounded-3xl shadow-level-2 hover:shadow-level-3 transition-all">
           <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6">
             <i className="fa-solid fa-microchip"></i>
           </div>
           <h3 className="text-2xl font-bold mb-4">Advanced AI Core</h3>
           <p className="text-gray-600 leading-relaxed mb-6">
             Our proprietary AI engine handles complex reasoning tasks, from real-time video analysis to natural language processing, with low latency.
           </p>
           <ul className="space-y-3">
             <li className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-check text-success"></i> Neural Processing Units</li>
             <li className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-check text-success"></i> Adaptive Learning Models</li>
             <li className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-check text-success"></i> Real-time Context Awareness</li>
           </ul>
         </div>
         <div className="bg-white p-8 rounded-3xl shadow-level-2 hover:shadow-level-3 transition-all">
           <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-secondary text-3xl mb-6">
             <i className="fa-solid fa-cloud-arrow-up"></i>
           </div>
           <h3 className="text-2xl font-bold mb-4">Cloud Synchronization</h3>
           <p className="text-gray-600 leading-relaxed mb-6">
             Work from anywhere. Your data is instantly synced across all devices with conflict resolution and offline support.
           </p>
           <ul className="space-y-3">
             <li className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-check text-success"></i> Multi-region Replication</li>
             <li className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-check text-success"></i> Offline-first Architecture</li>
             <li className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-check text-success"></i> 99.99% Availability SLA</li>
           </ul>
         </div>
       </div>

       <div className="bg-dark rounded-[40px] p-8 md:p-16 text-white text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="relative z-10">
           <h2 className="text-3xl font-bold mb-8">Seamless Integration</h2>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-4xl opacity-50">
             <i className="fa-brands fa-slack hover:text-white hover:opacity-100 transition-all"></i>
             <i className="fa-brands fa-github hover:text-white hover:opacity-100 transition-all"></i>
             <i className="fa-brands fa-figma hover:text-white hover:opacity-100 transition-all"></i>
             <i className="fa-brands fa-jira hover:text-white hover:opacity-100 transition-all"></i>
             <i className="fa-brands fa-google hover:text-white hover:opacity-100 transition-all"></i>
           </div>
         </div>
       </div>
    </Section>
  </div>
);

const ProductsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI Tools", "Security", "Students"];

  const filteredProducts = filter === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-light">
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-fade-in-up">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Products</h1>
            <p className="text-gray-500 text-lg">Tools designed to accelerate your workflow.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-xl shadow-level-1 border border-gray-100">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat 
                  ? 'bg-dark text-white shadow-md' 
                  : 'text-gray-500 hover:text-dark hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-level-2 hover:shadow-level-3 transition-all duration-300 flex flex-col h-full group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-dark text-xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <i className={`fa-solid ${product.icon}`}></i>
                </div>
                {product.badge && (
                  <span className={`${product.badgeColor || 'bg-gray-800'} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="mb-auto">
                <h3 className="font-heading font-bold text-lg text-dark mb-2">{product.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-50">
                <button className="w-full py-3 rounded-lg bg-gray-50 text-dark font-semibold text-sm hover:bg-dark hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                  Launch App <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

const SecurityPage = () => (
  <div className="pt-24 min-h-screen bg-light">
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
        <div className="inline-block p-4 rounded-full bg-success/10 text-success text-4xl mb-6">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Security First</h1>
        <p className="text-lg text-gray-600">We don't just add security as a feature. It's the foundation of everything we build.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-level-1 border-l-4 border-success">
          <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
          <p className="text-gray-500">All data is encrypted in transit and at rest using AES-256 protocols.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-level-1 border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-2">GDPR Compliant</h3>
          <p className="text-gray-500">Fully compliant with EU General Data Protection Regulations and CCPA.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-level-1 border-l-4 border-warning">
          <h3 className="text-xl font-bold mb-2">Zero Logging</h3>
          <p className="text-gray-500">We do not track, store, or sell your personal usage data. Ever.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-level-1 border-l-4 border-secondary">
          <h3 className="text-xl font-bold mb-2">SOC2 Type II</h3>
          <p className="text-gray-500">Regular independent audits verify our security practices and controls.</p>
        </div>
      </div>
      
      <div className="text-center">
         <img src="https://placehold.co/800x200/FFFFFF/CCCCCC.png?text=Security+Certifications+Banner+(ISO,+SOC2,+GDPR)" className="mx-auto rounded-xl opacity-75" alt="Security Certifications" />
      </div>
    </Section>
  </div>
);

const AboutPage = () => (
  <div className="pt-24 min-h-screen bg-light">
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 animate-fade-in-up">
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Democratizing AI <br/> from Colombo to the World</h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded in 2023, RM Solutions started with a simple mission: to make powerful AI tools accessible, private, and easy to use for everyone, not just tech giants.
          </p>
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">50k+</div>
              <div className="text-sm text-gray-500">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-gray-500">AI Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team working" className="rounded-3xl shadow-level-3" />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-level-2 max-w-xs">
            <p className="font-heading font-bold text-dark mb-2">"Innovation is in our DNA."</p>
            <p className="text-sm text-gray-500">- Arjun Perera, CEO</p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Leadership</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-level-1 text-center hover:-translate-y-2 transition-transform duration-300">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50" />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-primary text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

const AuthPage = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-light flex items-center justify-center p-4 pt-20">
      <div className="bg-white rounded-3xl shadow-level-4 overflow-hidden max-w-5xl w-full grid md:grid-cols-2 min-h-[600px] animate-fade-in-up">
        {/* Left Side (Visual) */}
        <div className="bg-gradient-primary hidden md:flex flex-col justify-between p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => setPage('home')}>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                 <img src="https://placehold.co/100x100/224CFF/FFFFFF.png?text=RM" className="w-10 h-10 rounded-full" alt="Logo" />
               </div>
               <span className="font-heading font-bold text-2xl">RM Solutions</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              {authMode === 'signin' ? "Welcome Back!" : "Join the Revolution"}
            </h2>
            <p className="text-blue-100 text-lg">
              {authMode === 'signin' 
                ? "Access your dashboard, manage your tools, and monitor your security status in one place." 
                : "Create an account to unlock powerful AI tools and automate your daily workflow."}
            </p>
          </div>
          
          <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="flex text-warning mb-2">
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            </div>
            <p className="italic text-sm mb-4">"The best decision our company made was switching to RM Solutions for data privacy."</p>
            <div className="flex items-center gap-3">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full bg-white" alt="User" />
              <span className="text-xs font-bold">Felix K. - Enterprise Client</span>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="flex gap-4 mb-8 p-1 bg-gray-100 rounded-xl">
              <button 
                onClick={() => setAuthMode('signin')}
                className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${authMode === 'signin' ? 'bg-white shadow-sm text-dark' : 'text-gray-500 hover:text-dark'}`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setAuthMode('signup')}
                className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${authMode === 'signup' ? 'bg-white shadow-sm text-dark' : 'text-gray-500 hover:text-dark'}`}
              >
                Sign Up
              </button>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-dark">{authMode === 'signin' ? 'Sign in to Account' : 'Create an Account'}</h3>
            <p className="text-gray-500 mb-8 text-sm">
              {authMode === 'signin' ? 'Enter your email and password to continue.' : 'Get started with a free account today.'}
            </p>

            {/* Social Login */}
            <button className="w-full py-3 px-4 border border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-4 group">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-dark">
                {authMode === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}
              </span>
            </button>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
              <span className="relative bg-white px-4 text-xs text-gray-400 uppercase tracking-widest">Or continue with</span>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Auth integration coming soon! (Firebase)'); }}>
              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                </div>
              )}
              
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="name@company.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Password</label>
                <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="••••••••" />
              </div>

              {authMode === 'signin' && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                    Remember me
                  </label>
                  <a href="#" className="text-primary font-semibold hover:underline">Forgot password?</a>
                </div>
              )}

              <Button type="submit" className="w-full mt-6 shadow-xl">
                {authMode === 'signin' ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <p className="text-center mt-8 text-sm text-gray-500">
              By clicking continue, you agree to our <a href="#" className="text-dark font-semibold underline">Terms of Service</a> and <a href="#" className="text-dark font-semibold underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


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