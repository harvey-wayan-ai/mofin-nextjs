const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mofin</h1>
        <p className="text-xl mb-8">Your financial future starts here.</p>
        <div className="flex justify-center gap-4">
          <input 
            placeholder="Enter your email" 
            className="max-w-md px-4 py-2 rounded-lg text-gray-800"
          />
          <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 backdrop-blur-sm bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
              <span className="inline-block px-3 py-1 bg-purple-500 text-white text-sm rounded-full mb-4">
                Feature {item}
              </span>
              <h3 className="text-xl font-semibold mb-2">Feature Title {item}</h3>
              <p className="text-gray-600">Description of the feature goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 px-4 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                {step}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Step {step}</h3>
                <p className="text-gray-600">Description of step {step}.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((review) => (
            <div key={review} className="p-6 backdrop-blur-sm bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
              <p className="text-gray-700 italic mb-4">"Testimonial text goes here."</p>
              <p className="font-semibold">— Reviewer {review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 px-4 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Feature Showcase</h2>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((feature) => (
            <div key={feature} className="p-8 backdrop-blur-sm bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Feature {feature}</h3>
              <p className="text-gray-600">Detailed description of the feature.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Basic", "Pro", "Enterprise"].map((tier, index) => (
            <div key={tier} className="p-8 backdrop-blur-sm bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">{tier}</h3>
              <p className="text-4xl font-bold mb-4">
                ${index === 0 ? 50 : index === 1 ? 180 : 500}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mb-6 space-y-2">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="mr-2">✓</span> Feature {item}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-16 px-4 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((article) => (
            <div key={article} className="p-6 backdrop-blur-sm bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
              <span className="inline-block px-3 py-1 bg-purple-500 text-white text-sm rounded-full mb-4">
                Article {article}
              </span>
              <h3 className="text-xl font-semibold mb-2">Article Title {article}</h3>
              <p className="text-gray-600">Summary of the article goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center text-gray-400">
        <p>&copy; 2024 Mofin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
