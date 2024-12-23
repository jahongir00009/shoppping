import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company Information */}
        <div>
          <h1 className="text-xl font-bold mb-2">Funiro.</h1>
          <p className="text-gray-500">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-500 mb-3">Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="">Home</a></li>
            <li><a href="/shop" className="">Shop</a></li>
            <li><a href="/about" className="">About</a></li>
            <li><a href="/contact" className="">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-500 mb-3">Help</h2>
          <ul className="space-y-2">
            <li><a href="/payment-options" className="">Payment Options</a></li>
            <li><a href="/returns" className="">Returns</a></li>
            <li><a href="/privacy" className="">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-500 mb-3">Newsletter</h2>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm">
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
