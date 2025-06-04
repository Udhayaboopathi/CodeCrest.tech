import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const team = [
  {
    name: "Udhaya Boopathi",
    role: "Full Stack Developer",
    img: "https://avatars.githubusercontent.com/u/placeholder?size=200",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Aarav Kumar",
    role: "DevOps Engineer",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Sneha Patel",
    role: "Backend Developer",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <section className="bg-gray-50 py-24 px-6 lg:px-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Meet Our <span className="text-purple-600">Team</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We’re a group of passionate developers, designers, and tech lovers
          committed to building excellent digital experiences.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-purple-600 mb-4">{member.role}</p>
            <div className="flex justify-center gap-4 text-gray-500">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-purple-600 transition" />
              </a>
              <a href={member.github} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-purple-600 transition" />
              </a>
              <a href={member.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="hover:text-purple-600 transition" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Join */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-purple-600 rounded-xl p-10 text-center text-white max-w-3xl mx-auto shadow-md"
      >
        <h4 className="text-2xl font-semibold mb-3">Want to join our team?</h4>
        <p className="text-lg mb-6">
          We’re always looking for passionate techies and creative minds.
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
