import React from 'react';
import { Button } from 'shadcn-ui';
import { Coffee } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-brown-800">Welcome to Our Coffee Shop</h1>
        <p className="mt-4 text-lg text-gray-600">Your daily dose of caffeine and comfort.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-brown-700">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <Coffee className="w-8 h-8 text-brown-600" />
            <h3 className="text-xl font-bold mt-2">Espresso</h3>
            <p className="text-gray-500">$3.00</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <Coffee className="w-8 h-8 text-brown-600" />
            <h3 className="text-xl font-bold mt-2">Latte</h3>
            <p className="text-gray-500">$4.00</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <Coffee className="w-8 h-8 text-brown-600" />
            <h3 className="text-xl font-bold mt-2">Cappuccino</h3>
            <p className="text-gray-500">$4.50</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-brown-700">Contact Us</h2>
        <form className="mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
            rows={4}
          />
          <Button className="bg-brown-600 text-white">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;