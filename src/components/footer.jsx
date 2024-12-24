export default function Footer() {
  return (
    <footer className="bg-[#010717] text-white py-12">
      {/* <div className="max-w-7xl mx-auto px-4 md:px-8"> */}
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 md:px-20">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-5xl font-bold">ACT.Inc</h2>
            <p className="text-md mt-4 leading-relaxed text-gray-500">
              ACT Inc. is a business consulting and technology firm with a focus
              on realizing value from emerging computer and telecommunications
              based technologies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold">Useful Links</h3>
            <ul className="mt-6 space-y-3 text-gray-500">
              <li>
                <a href="#" className="text-md hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:underline">
                  About Company
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:underline">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="mt-6 space-y-3 text-gray-500">
              <li>
                <a href="#" className="text-md hover:underline">
                  Process Improvement & Strategic Alignment (PI & SA)
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:underline">
                  Information Technology Services
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:underline">
                  Program & Project Management (PM)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <ul className="mt-6 space-y-3 text-gray-500">
              <li className="text-md">📞 973-761-7000</li>
              <li className="text-md">✉️ act.inc@gmail.com</li>
              <li className="text-md">📍 South Orange, NJ 07079-1932</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-sm">
            Copyright © 2024 ACT.Inc All Rights Reserved
          </p>
        </div>
      {/* </div> */}
    </footer>
  );
}
