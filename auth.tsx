
import React, { useState } from 'react';
import { Button } from './components';
import { Page } from './data';

export const AuthPage = ({ setPage }: { setPage: (p: Page) => void }) => {
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
