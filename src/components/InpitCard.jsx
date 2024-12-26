import React from 'react';

function InputCard() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between bg-gray-50 p-8">
      {/* Billing Details */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-xl font-semibold mb-6">Billing details</h2>
        <form className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="border border-gray-300 p-2 rounded-md"
          />
          <div>
            <label className="block mb-1 text-sm">Country / Region</label>
            <select className="border border-gray-300 p-2 rounded-md w-full">
              <option>Sri Lanka</option>
              {/* Add other countries here */}
            </select>
          </div>
          <input
            type="text"
            placeholder="Street address"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="border border-gray-300 p-2 rounded-md"
          />
          <div>
            <label className="block mb-1 text-sm">Province</label>
            <select className="border border-gray-300 p-2 rounded-md w-full">
              <option>Uzbekiston</option>
              {/* Add other provinces */}
            </select>
          </div>
          <input
            type="text"
            placeholder="ZIP code"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 p-2 rounded-md"
          />
          <textarea
            placeholder="Additional Information"
            className="border border-gray-300 p-2 rounded-md h-24"
          ></textarea>
        </form>
      </div>

      {/* Product Summary */}
      <div className="lg:w-1/3 w-full bg-white shadow-md p-6  lg:mt-0 rounded-xl ">
        <h2 className="text-xl font-semibold mb-6">Product</h2>
        <div className="flex justify-between mb-2">
          <span>Aligator Sofa x 1</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between font-semibold  text-lg mb-6">
          <span>Total</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div>
          <label className="block mb-2">
            <input type="radio" name="payment" className="mr-2" /> Direct Bank Transfer
          </label>
          <p className="text-sm text-gray-500 mb-4">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
          </p>
          <label className="block">
            <input type="radio" name="payment" className="mr-2" /> Cash on Delivery
          </label>
        </div>
        <button className="w-[200px]  bg-slate-500 text-white p-3 rounded-md mt-6">
          Place order
        </button>
      </div>
    </div>
  );
}

export default InputCard;
