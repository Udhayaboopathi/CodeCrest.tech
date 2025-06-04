import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} CodeCrest-Tech. All rights reserved.
        </p>
        <div className="flex space-x-4 text-gray-500">
          <a href="#" className="hover:text-black">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-black">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-black">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
