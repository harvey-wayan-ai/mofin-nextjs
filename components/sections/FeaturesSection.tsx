'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FEATURES = [
  {
    id: 'budgeting',
    title: 'Smart Budgeting',
    description: 'AI-powered budget recommendations based on your spending patterns and financial goals.',
    icon: '💰',
    details: [
      'Automatic expense categorization',
      'Personalized budget suggestions',
      'Overspending alerts',
      'Goal-based savings plans'
    ]
  },
  {
    id: 'investing',
    title: 'Investment Tracking',
    description: 'Real-time portfolio monitoring with comprehensive performance analytics and insights.',
    icon: '📈',
    details: [
      'Multi-asset portfolio tracking',
      'Performance analytics',
      'Risk assessment',
      'Automated rebalancing suggestions'
    ]
  },
  {
    id: 'insights',
    title: 'Financial Insights',
    description: 'Personalized recommendations to optimize your spending and grow your wealth.',
    icon: '💡',
    details: [
      'AI-powered recommendations',
      'Spending pattern analysis',
      'Cash flow forecasting',
      'Tax optimization tips'
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to take control of your financial future
          </p>
        </motion.div>

        <Tabs defaultValue="budgeting" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 h-auto p-1 bg-white border shadow-sm">
            {FEATURES.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-fuchsia-600 data-[state=active]:text-white py-3"
              >
                <span className="mr-2">{feature.icon}</span>
                <span className="hidden sm:inline">{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {FEATURES.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-purple-200 bg-gradient-to-br from-white to-purple-50/50">
                  <CardHeader className="text-center pb-8">
                    <div className="text-6xl mb-4">{feature.icon}</div>
                    <CardTitle className="text-3xl mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-lg">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                      {feature.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-lg bg-white border border-purple-100 hover:border-purple-300 transition-colors"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold">
                            ✓
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Feature cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: '🔒',
              title: 'Bank-Level Security',
              description: '256-bit encryption and two-factor authentication keep your data safe.'
            },
            {
              icon: '⚡',
              title: 'Real-Time Sync',
              description: 'Automatic updates across all your connected accounts, 24/7.'
            },
            {
              icon: '🤖',
              title: 'AI-Powered',
              description: 'Machine learning provides personalized financial recommendations.'
            }
          ].map((feature, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow border-purple-100 hover:border-purple-300">
                <CardHeader>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
