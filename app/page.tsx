import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
    icon: '💰',
  },
  {
    id: 2,
    title: 'Investment Tracking',
    description: 'Real-time portfolio monitoring with comprehensive performance analytics and insights.',
    icon: '📈',
  },
  {
    id: 3,
    title: 'Financial Insights',
    description: 'Personalized recommendations to optimize your spending and grow your wealth.',
    icon: '💡',
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
        <Section title="Powerful Features" background="white" id="features">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((feature) => (
              <Card key={feature.id} className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* How It Works Section */}
        <Section title="How It Works" background="gray" id="how-it-works">
          <div className="max-w-3xl mx-auto space-y-6">
            {WORKFLOW_STEPS.map((step) => (
              <Card key={step.id} className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      aria-label={`Step ${step.id}`}
                    >
                      {step.id}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section title="What Our Users Say" background="white" id="testimonials">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
                <CardHeader>
                  <CardDescription className="text-base italic text-gray-700">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col items-start">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        {/* Feature Showcase */}
        <Section title="Why Choose Mofin?" background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Bank-Level Security',
                description: '256-bit encryption and two-factor authentication keep your financial data safe and secure.',
                icon: '🔒',
              },
              {
                title: 'Real-Time Sync',
                description: 'Automatic transaction updates across all your connected accounts, available 24/7.',
                icon: '⚡',
              },
              {
                title: 'AI-Powered Insights',
                description: 'Machine learning algorithms analyze your spending to provide personalized recommendations.',
                icon: '🤖',
              },
              {
                title: 'Mobile & Desktop',
                description: 'Access your financial dashboard anywhere with our responsive web app and mobile apps.',
                icon: '📱',
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Pricing Section */}
        <Section title="Simple, Transparent Pricing" background="dark" id="pricing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={`relative overflow-hidden ${
                  tier.popular 
                    ? 'border-purple-400 shadow-xl shadow-purple-500/20 bg-gradient-to-br from-gray-800 to-gray-900' 
                    : 'bg-gray-800 border-gray-700'
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute top-4 right-4 bg-purple-500 hover:bg-purple-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6 bg-gray-700" />
                  <ul className="space-y-3" aria-label={`${tier.name} plan features`}>
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="mr-2 text-green-400 flex-shrink-0" aria-hidden="true">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => {
                      console.log(`Selected ${tier.name} plan`);
                      // TODO: Redirect to checkout
                    }}
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-purple-500 hover:bg-purple-600' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    } text-white`}
                    size="lg"
                    aria-label={`Get started with ${tier.name} plan`}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        {/* Blog/News Section */}
        <Section title="Latest Insights" background="white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ARTICLES.map((article) => (
              <Card key={article.id} className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg group">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2 bg-purple-100 text-purple-700">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {article.summary}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-purple-600 hover:text-purple-700"
                    onClick={() => console.log(`Read article: ${article.title}`)}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of users already managing their money smarter with Mofin.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-50 text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Free Trial
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Mofin
              </h3>
              <p className="text-sm">
                Smart financial management for the modern world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-800 mb-8" />
          <div className="text-center text-sm">
            <p>&copy; 2024 Mofin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
