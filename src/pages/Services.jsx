import { motion } from "framer-motion";
import {
  FaRobot,
  FaTools,
  FaServer,
  FaGlobe,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTools className="text-purple-600 w-8 h-8" />,
    title: "Custom Application Tools",
    description:
      "Tailored tools for automation, productivity, and integration built to suit any business or personal workflow.",
  },
  {
    icon: <FaDiscord className="text-purple-600 w-8 h-8" />,
    title: "Discord App Development",
    description:
      "We create custom Discord apps to power communities and gaming servers with seamless interactivity.",
  },
  {
    icon: <FaRobot className="text-purple-600 w-8 h-8" />,
    title: "Discord Bot Development",
    description:
      "Fully automated bots for moderation, music, utilities, or custom commands to engage your server like never before.",
  },
  {
    icon: <FaWhatsapp className="text-purple-600 w-8 h-8" />,
    title: "WhatsApp Bot Development",
    description:
      "Smart bots for WhatsApp to automate chats, customer support, appointment booking, and more.",
  },
  {
    icon: <FaGlobe className="text-purple-600 w-8 h-8" />,
    title: "Web Development",
    description:
      "Modern websites and web apps with responsive design, built using the latest technologies and frameworks.",
  },
  {
    icon: <FaServer className="text-purple-600 w-8 h-8" />,
    title: "Hosting & Deployment",
    description:
      "Fast and secure hosting solutions for websites, bots, and APIs with continuous deployment setup.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-24 px-6 lg:px-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our <span className="text-purple-600">Services</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          CodrCrest-Tech builds intelligent and scalable solutions for the web,
          chat, and communities.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 bg-purple-600 rounded-xl p-10 text-center text-white max-w-3xl mx-auto shadow-md"
      >
        <h4 className="text-2xl font-semibold mb-3">Need something custom?</h4>
        <p className="text-lg mb-6">
          We can build it for you. Let’s discuss your idea and make it real.
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
