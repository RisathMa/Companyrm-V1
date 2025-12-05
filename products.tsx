
import React, { useState } from 'react';
import { Section } from './components';
import { PRODUCTS } from './data';

export const ProductsPage = () => {
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
