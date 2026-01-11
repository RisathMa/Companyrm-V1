
import React from 'react';
import { Page } from './data';
import { Button, Section } from './components';

export const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
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
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 13}`} alt="user" />
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
                  <div className="h-24 w-full bg-white rounded-2xl shadow-level-2 flex items-center px-4 gap-4 animate-pulse" style={{ animationDelay: '0.2s' }}>
                    <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-2/3 bg-gray-100 rounded-full"></div>
                      <div className="h-3 w-1/3 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-primary rounded-2xl opacity-10"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-level-3 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
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

      <Section className="bg-gray-50 rounded-[40px] my-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-dark leading-tight">The Story Behind <br /><span className="text-primary">RM Solutions</span></h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by Risath Manvidu, RM Solutions (CompanyRM) began with a simple yet powerful vision: to bridge the gap between complex artificial intelligence and practical, every-day usability. In an era where data privacy is often compromised and automation is reserved for large corporations, we set out to build tools that empower the individual.
              </p>
              <p>
                Our journey started in Colombo, Sri Lanka, where we identified a critical need for localized AI solutions. While global tech giants were building general models, there was a significant lack of tools specifically optimized for regional languages like Sinhala and focused on the unique privacy requirements of local professionals and students.
              </p>
              <p>
                Today, RM Solutions has evolved into a comprehensive suite of AI products. From our flagship Video FaceBlur tool—which helps journalists and content creators protect identities effortlessly—to our Secure Data Vault that provides peace of mind for sensitive enterprise information, every line of code we write is guided by our commitment to ethical AI and user-centric design.
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-dark">Our Core Values</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary flex-shrink-0">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <div>
                  <h4 className="font-bold text-dark">Privacy by Default</h4>
                  <p className="text-sm text-gray-500">We believe privacy isn't a feature; it's a fundamental right that must be baked into every product.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <i className="fa-solid fa-microchip"></i>
                </div>
                <div>
                  <h4 className="font-bold text-dark">Local Language Excellence</h4>
                  <p className="text-sm text-gray-500">Our commitment to Sinhala NLP ensures that AI technology speaks your language fluently.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success flex-shrink-0">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div>
                  <h4 className="font-bold text-dark">User-Driven Innovation</h4>
                  <p className="text-sm text-gray-500">We listen to our users. Your feedback directly shapes the next version of our AI models.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-white my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-dark">Our Commitment to <br /><span className="text-primary">Technological Innovation</span></h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              At the heart of RM Solutions lies a relentless pursuit of technological excellence. Our research and development team, led by Risath Manvidu, is constantly pushing the boundaries of what's possible with Natural Language Processing (NLP) and Computer Vision. We don't just use off-the-shelf models; we fine-tune and optimize them for specific use cases like Sinhala language research and military-grade encryption workflows.
            </p>
            <p>
              Our <strong>Secure Data Vault</strong> utilizes a zero-knowledge architecture, ensuring that even we cannot see your data. This level of security is achieved through advanced mathematics and a commitment to transparency. Similarly, our <strong>Student AI Assistant</strong> uses custom-built semantic search algorithms to provide students with more relevant citations and learning materials than traditional search engines.
            </p>
            <p>
              We are also proud to be pioneers in <strong>Sinhala AI research</strong>. By building datasets and training models specifically for the morphologically complex nature of the Sinhala language, we are ensuring that the digital divide is bridged for millions of speakers. Whether it's automated translation, sentiment analysis, or academic research, RM Solutions is at the forefront of bilingual AI innovation.
            </p>
          </div>
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
