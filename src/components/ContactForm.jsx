export default function ContactForm() {
  return (
    <form className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded"
      />
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full p-3 border rounded"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
}
