
import React from 'react';
import { Section } from './components';
import { TEAM } from './data';

export const AboutPage = () => (
  <div className="pt-24 min-h-screen bg-light">
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24 animate-fade-in-up">
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Democratizing AI <br /> from Colombo to the World</h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded in 2023, RM Solutions started with a simple mission: to make powerful AI tools accessible, private, and easy to use for everyone, not just tech giants.
          </p>
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">50k</div>
              <div className="text-sm text-gray-500">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5</div>
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
            <p className="text-sm text-gray-500">- Risath Manvidu, CEO</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-dark">Our Mission & Vision</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower every individual and organization in Sri Lanka and beyond with cutting-edge AI technology that is private, secure, and intuitive. We strive to break down the barriers of language and technical complexity, ensuring that the benefits of the AI revolution are inclusive and accessible to all.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the global leader in localized, privacy-first AI solutions. We envision a future where technology works seamlessly in the background to protect human rights, enhance educational outcomes, and drive enterprise productivity without sacrificing data integrity.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-dark leading-tight">A Heritage of Excellence <br /> and <span className="text-primary">Innovation</span></h2>
          <p className="text-gray-600 leading-relaxed">
            Since our inception in 2023, RM Solutions has been at the forefront of the technological landscape in Sri Lanka. Our journey began not in a boardroom, but in a research lab where we recognized that existing AI tools were often too generic for specialized needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By focusing on niche requirements—such as military-grade data encryption for sensitive documents and automated face blurring for video privacy—we have carved out a unique space in the market. Our commitment to excellence is reflected in our 99.9% uptime and the trust placed in us by over 50,000 active users globally.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We don't just build products; we build ecosystems. Our integration of Sinhala NLP marks a significant milestone in our journey, ensuring that our AI assistant can serve the needs of millions of native speakers with unprecedented accuracy and cultural relevance.
          </p>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-16">Meet the Founder</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <img src={TEAM[0].img} alt={TEAM[0].name} className="relative rounded-3xl shadow-lg border-4 border-white w-full aspect-square object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold text-dark">{TEAM[0].name}</h3>
            <p className="text-primary font-semibold">Founder & CEO, AI Infrastructure Architect</p>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Risath Manvidu is a visionary technologist and the driving force behind RM Solutions. With a deep background in artificial intelligence and cybersecurity, Risath has dedicated his career to building systems that protect user privacy while maximizing automation.
              </p>
              <p>
                Under his leadership, RM Solutions has grown from a small startup into a globally recognized provider of AI utilities. Risath's focus on "Ethical AI" has led to the development of our flagship zero-knowledge encryption protocols and the industry-leading Face Blur technology.
              </p>
              <p>
                He is a frequent speaker at tech conferences in the South Asian region, advocating for better data protection laws and the responsible use of AI in education. When he's not architecting the next generation of AI tools, Risath is actively involved in mentoring aspiring developers in the Sri Lankan tech community.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://x.com/RisathManvidu" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all text-xl">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all text-xl">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all text-xl">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);
