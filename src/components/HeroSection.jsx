export default function HeroSection() {
  return (
    <section className="text-center py-16 px-4 bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Welcome to Our Startup
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        We build modern solutions for your business
      </p>
      <a
        href="/services"
        className="bg-blue-600 text-white px-6 py-2 rounded-full"
      >
        Get Started
      </a>
    </section>
  );
}
