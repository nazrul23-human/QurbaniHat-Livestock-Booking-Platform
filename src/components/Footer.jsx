import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold">
              QurbaniHat
            </h2>

            <p className="mt-4 text-sm">
              A trusted livestock booking platform where users
              can explore and book healthy cows and goats
              for Qurbani across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>All Animals</li>
              <li>My Profile</li>
              <li>Login</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-2">
              <li>📍 Chattogram, Bangladesh</li>
              <li>📞 +880 1301003045</li>
              <li>✉️ md.nazrulislam4550@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 mt-2">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-green-700 p-3 rounded-full hover:scale-110 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-green-700 p-3 rounded-full hover:scale-110 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-green-700 p-3 rounded-full hover:scale-110 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://messenger.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-green-700 p-3 rounded-full hover:scale-110 transition duration-300"
              >
                <FaFacebookMessenger size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>
            © 2026 QurbaniHat. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;