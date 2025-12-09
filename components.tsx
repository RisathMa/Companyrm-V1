
import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
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

export const Section = ({ children, className = '', id = '' }: any) => (
  <section id={id} className={`py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export const Logo = ({ className = "w-10 h-10" }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-primary/40 transition-colors"></div>
    <img
      src="https://i.ibb.co/HDkvPN3d/Logo-modified-1.png"
      alt="RM Solutions Logo"
      className={`relative ${className} rounded-full object-cover shadow-md border-2 border-white`}
    />
  </div>
);
