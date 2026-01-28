import { NewsletterForm } from '../NewsletterForm';

/**
 * Hero section with email signup CTA
 * Rendered above the fold for maximum visibility
 */
export const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-br from-purple-500 to-pink-500 text-white min-h-[60vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Mofin
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
          Your financial future starts here.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
};
