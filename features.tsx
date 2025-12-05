
import React from 'react';
import { Section } from './components';

export const FeaturesPage = () => (
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
