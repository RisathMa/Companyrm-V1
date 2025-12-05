
import React from 'react';
import { Section } from './components';
import { TEAM } from './data';

export const AboutPage = () => (
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
