import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Mofin - Your Financial Future Starts Here',
  description: 'Smart financial management platform with AI-powered budgeting, investment tracking, and personalized financial insights for modern investors.',
  keywords: ['finance', 'budgeting', 'investment', 'financial planning', 'AI finance'],
  openGraph: {
    title: 'Mofin - Smart Financial Management',
    description: 'AI-powered financial platform for modern investors',
    url: 'https://mofin-nextjs.vercel.app',
    siteName: 'Mofin',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mofin - Smart Financial Management',
    description: 'AI-powered financial platform for modern investors',
  },
};

// Content constants
const FEATURES = [
  {
    id: 1,
    title: 'Smart Budgeting',
    description: 'AI-powered budget recommendations based on your spending patterns and financial goals.',
  },
  {
    id: 2,
    title: 'Investment Tracking',
    description: 'Real-time portfolio monitoring with comprehensive performance analytics and insights.',
  },
  {
    id: 3,
    title: 'Financial Insights',
    description: 'Personalized recommendations to optimize your spending and grow your wealth.',
  },
];

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: 'Connect Your Accounts',
    description: 'Securely link your bank accounts and credit cards in minutes with bank-level encryption.',
  },
  {
    id: 2,
    title: 'AI Analyzes Your Spending',
    description: 'Our AI engine analyzes your transactions to understand your financial habits and patterns.',
  },
  {
    id: 3,
    title: 'Get Personalized Insights',
    description: 'Receive tailored recommendations to optimize your budget and achieve your financial goals.',
  },
  {
    id: 4,
    title: 'Track Your Progress',
    description: 'Monitor your financial health with real-time dashboards and progress tracking.',
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Mofin helped me save $500 a month without changing my lifestyle!',
    author: 'Sarah Johnson',
    role: 'Small Business Owner',
  },
  {
    id: 2,
    quote: 'The AI insights are incredibly accurate. Best financial app I\'ve used.',
    author: 'Michael Chen',
    role: 'Software Engineer',
  },
  {
    id: 3,
    quote: 'Finally a finance app that actually understands my spending habits.',
    author: 'Emily Rodriguez',
    role: 'Marketing Manager',
  },
  {
    id: 4,
    quote: 'Tracking my investments has never been easier. Highly recommended!',
    author: 'David Kim',
    role: 'Investor',
  },
];

const PRICING_TIERS = [
  {
    name: 'Basic',
    price: 50,
    features: [
      'Budget tracking',
      'Expense categorization',
      'Monthly reports',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: 180,
    features: [
      'Everything in Basic',
      'Investment tracking',
      'AI-powered insights',
      'Priority support',
      'Custom categories',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 500,
    features: [
      'Everything in Pro',
      'Multi-user access',
      'Advanced analytics',
      'Dedicated account manager',
      'Custom integrations',
      'API access',
    ],
  },
];

const ARTICLES = [
  {
    id: 1,
    title: '5 Ways AI is Transforming Personal Finance',
    summary: 'Discover how artificial intelligence is revolutionizing the way we manage our money and plan for the future.',
    category: 'AI & Finance',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Budget Optimization',
    summary: 'Learn proven strategies to maximize your savings without sacrificing your quality of life.',
    category: 'Budgeting',
  },
  {
    id: 3,
    title: 'Investment Tracking Made Simple',
    summary: 'A beginner-friendly guide to monitoring and growing your investment portfolio effectively.',
    category: 'Investing',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <Section title="Features" background="white" id="features">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {FEATURES.map((feature) => (
              <article
                key={feature.id}
                className="p-6 backdrop-blur-sm bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg hover:shadow-lg transition-shadow"
              >
                <span className="inline-block px-3 py-1 bg-purple-500 text-white text-sm rounded-full mb-4">
                  Feature {feature.id}
                </span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* How It Works Section */}
        <Section title="How It Works" background="gray" id="how-it-works">
          <div className="max-w-3xl mx-auto">
            {WORKFLOW_STEPS.map((step) => (
              <article key={step.id} className="flex mb-8 last:mb-0">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold"
                  aria-label={`Step ${step.id}`}
                >
                  {step.id}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section title="Testimonials" background="white" id="testimonials">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <blockquote
                key={testimonial.id}
                className="p-6 backdrop-blur-sm bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <footer className="font-semibold">
                  — {testimonial.author}
                  {testimonial.role && <span className="text-gray-600 font-normal"> · {testimonial.role}</span>}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* Feature Showcase */}
        <Section title="Why Choose Mofin?" background="gray">
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Bank-Level Security',
                description: '256-bit encryption and two-factor authentication keep your financial data safe and secure.',
              },
              {
                title: 'Real-Time Sync',
                description: 'Automatic transaction updates across all your connected accounts, available 24/7.',
              },
              {
                title: 'AI-Powered Insights',
                description: 'Machine learning algorithms analyze your spending to provide personalized recommendations.',
              },
              {
                title: 'Mobile & Desktop',
                description: 'Access your financial dashboard anywhere with our responsive web app and mobile apps.',
              },
            ].map((feature, index) => (
              <article
                key={index}
                className="p-8 backdrop-blur-sm bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Pricing Section */}
        <Section title="Pricing" background="dark" id="pricing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier) => (
              <article
                key={tier.name}
                className={`p-8 backdrop-blur-sm bg-gray-800 rounded-lg border ${
                  tier.popular ? 'border-purple-400 shadow-xl shadow-purple-500/20' : 'border-gray-700'
                } hover:shadow-2xl transition-shadow relative`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
                <p className="text-4xl font-bold mb-4">
                  ${tier.price}
                  <span className="text-sm font-normal text-gray-400">/month</span>
                </p>
                <ul className="mb-6 space-y-3" aria-label={`${tier.name} plan features`}>
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-green-400" aria-hidden="true">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    console.log(`Selected ${tier.name} plan`);
                    // TODO: Redirect to checkout
                  }}
                  className="w-full px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 min-h-[44px]"
                  aria-label={`Get started with ${tier.name} plan`}
                >
                  Get Started
                </button>
              </article>
            ))}
          </div>
        </Section>

        {/* Blog/News Section */}
        <Section title="Latest News" background="white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="p-6 backdrop-blur-sm bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg hover:shadow-lg transition-shadow"
              >
                <span className="inline-block px-3 py-1 bg-purple-500 text-white text-sm rounded-full mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <button
                  onClick={() => console.log(`Read article: ${article.title}`)}
                  className="text-purple-600 hover:text-purple-700 font-semibold focus:outline-none focus:underline"
                >
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center text-gray-300" role="contentinfo">
        <p>&copy; 2024 Mofin. All rights reserved.</p>
      </footer>
    </>
  );
}
