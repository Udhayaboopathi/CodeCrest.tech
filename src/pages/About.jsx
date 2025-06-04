import { motion } from "framer-motion";
import {
  FaRocket,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-purple-600 w-8 h-8" />,
    title: "Fast & Reliable",
    description:
      "We deliver high-performance solutions on time with precision.",
  },

  {
    icon: <FaUsers className="text-purple-600 w-8 h-8" />,
    title: "Expert Team",
    description: "Our team blends talent, passion, and years of experience.",
  },
  {
    icon: <FaLightbulb className="text-purple-600 w-8 h-8" />,
    title: "Innovation Driven",
    description: "We love solving real problems with creative solutions.",
  },
  {
    icon: <FaHandshake className="text-purple-600 w-8 h-8" />,
    title: "Client Focused",
    description: "We build with and for the people who matter — you.",
  },
];

export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen py-15 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-lg p-10 shadow-lg"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          About <span className="text-purple-600">CodeCrest-Tech</span>
        </h2>
        <p className="text-gray-700 mb-8 text-lg text-center">
          We are a creative tech team passionate about building clean, scalable,
          and smart solutions for the web and beyond. Our work reflects our
          commitment to quality and client success.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {features.map(({ icon, title, description }, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div>{icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-8">
          To empower developers and businesses through cutting-edge technology,
          intuitive design, and reliable support that drives growth and
          innovation.
        </p>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700">
          To be a trusted tech partner globally, known for creativity,
          consistency, and client success.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-purple-600 rounded-xl p-10 text-center text-white max-w-3xl mx-auto shadow-md"
      >
        <h4 className="text-2xl font-semibold mb-3">Want to work with us?</h4>
        <p className="text-lg mb-6">
          Join hands with CodeCrest-Tech and let's build something amazing
          together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
