'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Content constants
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
    rating: 5,
  },
  {
    id: 2,
    quote: 'The AI insights are incredibly accurate. Best financial app I\'ve used.',
    author: 'Michael Chen',
    role: 'Software Engineer',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Finally a finance app that actually understands my spending habits.',
    author: 'Emily Rodriguez',
    role: 'Marketing Manager',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Tracking my investments has never been easier. Highly recommended!',
    author: 'David Kim',
    role: 'Investor',
    rating: 5,
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
        {/* Hero Section - New Animated Version */}
        <HeroSection />

        {/* Stats Section - Animated Numbers */}
        <StatsSection />

        {/* Features Section - New Animated Tabs Version */}
        <FeaturesSection />

        {/* How It Works Section */}
        <Section title="How It Works" background="white" id="how-it-works">
          <div className="max-w-3xl mx-auto space-y-6">
            {WORKFLOW_STEPS.map((step) => (
              <Card key={step.id} className="border-l-4 border-l-violet-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
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
        <Section title="What Our Users Say" background="gray" id="testimonials">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-violet-50 to-fuchsia-50 border-purple-100 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <CardDescription className="text-base italic text-gray-700 leading-relaxed">
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

        {/* Pricing Section */}
        <Section title="Simple, Transparent Pricing" background="dark" id="pricing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={`relative overflow-hidden ${
                  tier.popular 
                    ? 'border-purple-400 shadow-xl shadow-purple-500/20 bg-gradient-to-br from-gray-800 to-gray-900 scale-105' 
                    : 'bg-gray-800 border-gray-700'
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:shadow-lg">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-white">${tier.price}</span>
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
                        ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:shadow-xl' 
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

        {/* FAQ Section - New Accordion Component */}
        <FAQSection />

        {/* Blog/News Section */}
        <Section title="Latest Insights" background="white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ARTICLES.map((article) => (
              <Card key={article.id} className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl group">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border-violet-200">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-violet-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {article.summary}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-violet-600 hover:text-violet-700"
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
        <section className="py-20 px-4 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of users already managing their money smarter with Mofin.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-violet-600 hover:bg-gray-50 text-lg px-8 py-6 h-auto shadow-2xl hover:shadow-3xl transition-all"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Free Trial →
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
                Mofin
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Smart financial management for the modern world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-violet-400 transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-violet-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-violet-400 transition">About</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-violet-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-800 mb-8" />
          <div className="text-center text-sm">
            <p>&copy; 2024 Mofin. All rights reserved. Made with ❤️ using AI.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
