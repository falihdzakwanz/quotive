import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-600 transform hover:scale-110 hover:-translate-y-1 transition duration-150"
        title="Instagram"
      >
        <FaInstagram size={28} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-sky-600 transform hover:scale-110 hover:-translate-y-1 transition duration-150"
        title="Twitter"
      >
        <FaTwitter size={28} />
      </a>
      <a
        href="https://wa.me"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600 transform hover:scale-110 hover:-translate-y-1 transition duration-150"
        title="WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
