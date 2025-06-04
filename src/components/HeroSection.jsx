import { motion } from "framer-motion";
import img from "../asserts/img.png";

export default function HeroSection() {
  return (
    <section className="bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Build Smarter with{" "}
            <span className="text-purple-600">CodeCrest-Tech</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Accelerate your projects with modern tools, clean design, and
            scalable code — built for developers, by developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition">
              Get Started
            </button>
            <button className="border border-gray-300 hover:border-purple-500 hover:text-purple-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={img}
            alt="Hero Illustration"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
