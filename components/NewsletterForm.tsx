'use client';

import { useState, FormEvent } from 'react';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      // TODO: Integrate with email service (Mailchimp/SendGrid)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Email address for newsletter signup
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg text-gray-800 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          required
          disabled={status === 'loading'}
          aria-required="true"
          aria-invalid={status === 'error'}
          aria-describedby={errorMessage ? 'email-error' : undefined}
        />
        {errorMessage && (
          <p id="email-error" className="text-red-300 text-sm mt-2" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition min-h-[44px] min-w-[120px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Sign Up'}
      </button>
      {status === 'success' && (
        <p className="text-white text-sm mt-2 text-center w-full" role="status">
          ✓ Thanks for signing up! Check your email.
        </p>
      )}
    </form>
  );
};
