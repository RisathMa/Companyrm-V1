
import React from 'react';
import { Section } from './components';

export const SecurityPage = () => (
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
