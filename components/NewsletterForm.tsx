'use client';

import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-2xl mx-auto">
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Email address for newsletter signup
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-white/95 backdrop-blur-sm border-white/20 h-12 text-base"
          required
          disabled={status === 'loading'}
          aria-required="true"
          aria-invalid={status === 'error'}
          aria-describedby={errorMessage ? 'email-error' : undefined}
        />
        {errorMessage && (
          <p id="email-error" className="text-red-200 text-sm mt-2" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={status === 'loading'}
        size="lg"
        className="bg-white text-purple-600 hover:bg-gray-50 font-semibold h-12 min-w-[140px]"
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Get Started'}
      </Button>
      {status === 'success' && (
        <p className="text-white text-sm mt-2 text-center w-full" role="status">
          ✓ Thanks for signing up! Check your email.
        </p>
      )}
    </form>
  );
};
