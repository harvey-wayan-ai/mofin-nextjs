'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How secure is my financial data?",
    answer: "We use bank-level 256-bit encryption to protect your data. All information is encrypted both in transit and at rest. We never store your banking credentials - we use read-only access through secure third-party connections. Your data is protected with two-factor authentication and we're SOC 2 Type II certified."
  },
  {
    question: "How does the AI budgeting work?",
    answer: "Our AI analyzes your spending patterns, income, and financial goals to create personalized budget recommendations. It learns from your habits over time and can predict upcoming expenses, identify areas where you can save, and send alerts when you're approaching budget limits. The system becomes more accurate as it learns your unique financial behavior."
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "Yes! You can connect unlimited bank accounts, credit cards, investment accounts, and even cryptocurrency wallets. Mofin automatically syncs transactions across all your accounts and provides a unified view of your complete financial picture in one dashboard."
  },
  {
    question: "What if I need to cancel my subscription?",
    answer: "You can cancel your subscription anytime with just one click from your account settings. There are no cancellation fees or penalties. If you cancel, you'll retain access until the end of your current billing period. We also offer a 14-day free trial so you can try all features before committing."
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely! All plans include email support with responses within 24 hours. Pro and Enterprise plans get priority support with faster response times. Enterprise customers also get a dedicated account manager and phone support. We also have an extensive help center with guides and tutorials."
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, you can export all your data anytime in multiple formats including CSV, Excel, and PDF. This includes all transactions, budgets, reports, and analytics. Enterprise plans also get API access for custom integrations and automated data exports."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Mofin
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-purple-100">
                <AccordionTrigger className="text-left hover:text-violet-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-2xl border border-purple-100"
        >
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get started.
          </p>
          <a
            href="mailto:support@mofin.app"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};
