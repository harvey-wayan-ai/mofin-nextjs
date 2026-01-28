'use client';

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Skip navigation for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4" aria-label="Main navigation">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Mofin
          </h1>
          <ul className="flex gap-6 flex-wrap justify-center">
            <li>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:underline min-h-[44px] px-2"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:underline min-h-[44px] px-2"
              >
                How It Works
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:underline min-h-[44px] px-2"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:underline min-h-[44px] px-2"
              >
                Testimonials
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
