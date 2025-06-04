export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white shadow p-6 rounded-xl text-center">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
