const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-4 gap-10">

        {/* Brand */}
        <div>

          <h2 className="text-2xl font-bold">
            <span className="gradient-text">
              Dev
            </span>{" "}
            Stack
          </h2>

          <p className="text-gray-400 mt-4">
            Build your perfect developer stack
            with modern technologies.
          </p>

          <div className="flex gap-4 mt-5 text-gray-400">
            <span>GitHub</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>

        </div>

        {/* Product */}
        <div>

          <h3 className="font-bold mb-4">
            Product
          </h3>

          <p className="text-gray-400 mb-2">
            Technologies
          </p>

          <p className="text-gray-400 mb-2">
            Projects
          </p>

          <p className="text-gray-400">
            Features
          </p>

        </div>

        {/* Company */}
        <div>

          <h3 className="font-bold mb-4">
            Company
          </h3>

          <p className="text-gray-400 mb-2">
            About
          </p>

          <p className="text-gray-400 mb-2">
            Contact
          </p>

          <p className="text-gray-400">
            Careers
          </p>

        </div>

        {/* Legal */}
        <div>

          <h3 className="font-bold mb-4">
            Legal
          </h3>

          <p className="text-gray-400 mb-2">
            Privacy
          </p>

          <p className="text-gray-400">
            Terms
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-500">
        © 2026 Dev Stack. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;