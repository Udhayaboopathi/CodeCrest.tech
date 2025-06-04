import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="services" className=" px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Fast"
            description="Quick turnaround times with high quality."
          />
          <FeatureCard
            title="Reliable"
            description="Consistent and dependable services."
          />
          <FeatureCard
            title="Support"
            description="24/7 customer support to assist you."
          />
        </div>
      </section>
    </div>
  );
}
