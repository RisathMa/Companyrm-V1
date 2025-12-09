
import React, { useState, useEffect } from 'react';
import { Button } from './components';
import { Page } from './data';
import { auth, googleProvider } from './firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  applyActionCode
} from 'firebase/auth';

interface AuthPageProps {
  setPage: (p: Page) => void;
  onLogin: () => void;
}

export const AuthPage = ({ setPage, onLogin }: AuthPageProps) => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot-password'>('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle email verification link on page load
  useEffect(() => {
    const handleEmailVerification = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const mode = urlParams.get('mode');
      const oobCode = urlParams.get('oobCode');

      if (mode === 'verifyEmail' && oobCode) {
        setIsLoading(true);
        try {
          // Apply the email verification code
          await applyActionCode(auth, oobCode);
          setSuccess('Email verified successfully! You can now sign in.');
          setAuthMode('signin');
          // Clean up URL parameters
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (err: any) {
          console.error('Email verification error:', err);
          let msg = 'Failed to verify email. The link may be expired or invalid.';
          if (err.code === 'auth/invalid-action-code') {
            msg = 'Verification link is invalid or has already been used.';
          } else if (err.code === 'auth/expired-action-code') {
            msg = 'Verification link has expired. Please request a new one.';
          }
          setError(msg);
        } finally {
          setIsLoading(false);
        }
      }
    };

    handleEmailVerification();
  }, []);

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleResendVerification = async () => {
    if (auth.currentUser) {
      setIsLoading(true);
      try {
        await sendEmailVerification(auth.currentUser);
        setSuccess("Verification email resent. Please check your inbox.");
        setError('');
      } catch (err) {
        console.error(err);
        setError("Failed to resend verification email. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      if (authMode === 'signup') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (name) {
          await updateProfile(userCredential.user, { displayName: name });
        }
        await sendEmailVerification(userCredential.user);
        await signOut(auth); // Ensure they don't get auto-logged in without verifying
        setAuthMode('signin');
        setSuccess("Account created! A verification email has been sent. Please verify your email before logging in.");
        setEmail('');
        setPassword('');
        setName('');
      } else if (authMode === 'signin') {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Reload user to get the latest verification status from Firebase
        await userCredential.user.reload();

        if (!userCredential.user.emailVerified) {
          // Keep them logged in Firebase-wise to allow resending email, but don't grant app access (cookie)
          // We don't call onLogin() here.
          setError("Email not verified.");
          return;
        }

        onLogin(); // Trigger login success in parent
      } else if (authMode === 'forgot-password') {
        await sendPasswordResetEmail(auth, email);
        setSuccess("Password reset link sent to your email.");
        setError('');
        setTimeout(() => setAuthMode('signin'), 3000); // Auto redirect after 3s
      }
    } catch (err: any) {
      console.error(err);
      let msg = "An error occurred during authentication.";
      if (err.code === 'auth/invalid-credential') msg = "Invalid email or password.";
      if (err.code === 'auth/email-already-in-use') msg = "This email is already registered.";
      if (err.code === 'auth/weak-password') msg = "Password should be at least 6 characters.";
      if (err.code === 'auth/user-not-found') msg = "No user found with this email.";
      if (err.code === 'auth/too-many-requests') msg = "Too many requests. Please try again later.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Google accounts are usually verified by default, but good to check if needed.
      // Usually we trust Google provider.
      onLogin();
    } catch (err: any) {
      console.error(err);
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const getHeaderTitle = () => {
    switch (authMode) {
      case 'signin': return "Welcome Back!";
      case 'signup': return "Join the Revolution";
      case 'forgot-password': return "Reset Password";
    }
  };

  const getHeaderDesc = () => {
    switch (authMode) {
      case 'signin': return "Access your dashboard, manage your tools, and monitor your security status in one place.";
      case 'signup': return "Create an account to unlock powerful AI tools and automate your daily workflow.";
      case 'forgot-password': return "Enter your email to receive a password reset link.";
    }
  };

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
              {getHeaderTitle()}
            </h2>
            <p className="text-blue-100 text-lg">
              {getHeaderDesc()}
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
            {authMode !== 'forgot-password' && (
              <div className="flex gap-4 mb-8 p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => { setAuthMode('signin'); setError(''); setSuccess(''); }}
                  className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${authMode === 'signin' ? 'bg-white shadow-sm text-dark' : 'text-gray-500 hover:text-dark'}`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setAuthMode('signup'); setError(''); setSuccess(''); }}
                  className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${authMode === 'signup' ? 'bg-white shadow-sm text-dark' : 'text-gray-500 hover:text-dark'}`}
                >
                  Sign Up
                </button>
              </div>
            )}

            {authMode === 'forgot-password' && (
              <button
                onClick={() => { setAuthMode('signin'); setError(''); setSuccess(''); }}
                className="mb-6 text-sm text-gray-500 hover:text-dark flex items-center gap-2"
              >
                <i className="fa-solid fa-arrow-left"></i> Back to Sign In
              </button>
            )}

            <h3 className="text-2xl font-bold mb-2 text-dark">
              {authMode === 'signin' ? 'Sign in to Account' : authMode === 'signup' ? 'Create an Account' : 'Reset Password'}
            </h3>
            <p className="text-gray-500 mb-6 text-sm">
              {authMode === 'signin' ? 'Enter your email and password to continue.'
                : authMode === 'signup' ? 'Get started with a free account today.'
                  : 'We will send you a link to reset your password.'}
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 text-error text-sm rounded-xl flex flex-col gap-2 animate-fade-in-up">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {error}
                </div>
                {error.includes("Email not verified") && (
                  <button
                    onClick={handleResendVerification}
                    className="text-xs font-bold underline text-left hover:text-red-700 w-fit"
                    disabled={isLoading}
                  >
                    Resend Verification Email
                  </button>
                )}
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-700 text-sm rounded-xl flex items-center gap-2 animate-fade-in-up">
                <i className="fa-solid fa-circle-check"></i>
                {success}
              </div>
            )}

            {/* Social Login - Only for Sign In/Up */}
            {authMode !== 'forgot-password' && (
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full py-3 px-4 border border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-4 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-dark">
                  {authMode === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}
                </span>
              </button>
            )}

            {authMode !== 'forgot-password' && (
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <span className="relative bg-white px-4 text-xs text-gray-400 uppercase tracking-widest">Or continue with</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="name@company.com"
                />
              </div>

              {authMode !== 'forgot-password' && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>
              )}

              {authMode === 'signin' && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                    Remember me
                  </label>
                  <button
                    type="button"
                    onClick={() => { setAuthMode('forgot-password'); setError(''); setSuccess(''); }}
                    className="text-primary font-semibold hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button type="submit" className="w-full mt-6 shadow-xl" disabled={isLoading}>
                {isLoading ? (
                  <><i className="fa-solid fa-circle-notch fa-spin"></i> Processing...</>
                ) : (
                  authMode === 'signin' ? 'Sign In'
                    : authMode === 'signup' ? 'Create Account'
                      : 'Send Reset Link'
                )}
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
