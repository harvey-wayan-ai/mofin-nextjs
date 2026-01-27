import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mofin</h1>
        <p className="text-xl mb-8">Your financial future starts here.</p>
        <div className="flex justify-center gap-4">
          <Input placeholder="Enter your email" className="max-w-md" />
          <Button>Sign Up</Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-6 backdrop-blur-sm bg-white/30 rounded-lg">
              <Badge className="mb-4">Feature {item}</Badge>
              <h3 className="text-xl font-semibold mb-2">Feature Title {item}</h3>
              <p className="text-gray-600">Description of the feature goes here.</p>
            </Card>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((review) => (
            <Card key={review} className="p-6 backdrop-blur-sm bg-white/30 rounded-lg">
              <p className="text-gray-700 italic mb-4">"Testimonial text goes here."</p>
              <p className="font-semibold">— Reviewer {review}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 px-4 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Feature Showcase</h2>
        <div className="grid grid-cols-1 gap-8">
          {[1, 2, 3, 4].map((feature) => (
            <Card key={feature} className="p-8 backdrop-blur-sm bg-white/30 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature {feature}</h3>
              <p className="text-gray-600">Detailed description of the feature.</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Basic", "Pro", "Enterprise"].map((tier, index) => (
            <Card key={tier} className="p-8 backdrop-blur-sm bg-gray-800/30 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{tier}</h3>
              <p className="text-4xl font-bold mb-4">
                ${index === 0 ? 50 : 180}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mb-6">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="mb-2">Feature {item}</li>
                ))}
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-16 px-4 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((article) => (
            <Card key={article} className="p-6 backdrop-blur-sm bg-white/30 rounded-lg">
              <Badge className="mb-4">Article {article}</Badge>
              <h3 className="text-xl font-semibold mb-2">Article Title {article}</h3>
              <p className="text-gray-600">Summary of the article goes here.</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;