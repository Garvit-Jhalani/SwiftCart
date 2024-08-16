import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";

const CustomerService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 5000);
  };
  return (
    <>
      <Navbar />
      <div className="absolute left-0 right-0 top-16 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-orange-100">
        <div>
          <h1 className="font-bold pl-40 pt-36 text-4xl font-mono">
            <b>Customer Service</b>
          </h1>
          <p className="font-bold pl-48 font-mono text-orange-600 pb-4">
            SmartShopping Made Easy
          </p>
        </div>
        <div className="">
          <img
            className="relative right-0 my-12 mr-32 h-64 float-right rounded-full"
            src="https://t4.ftcdn.net/jpg/03/50/16/95/360_F_350169504_t13447u3rwR5iBEWD3QrzwJbElxu4Gho.webp"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100 pb-8 pt-96">
        <div className="max-w-md p-6 pt-24 bg-white px-32 rounded shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
          {submitted ? (
            <div className="bg-green-100 border border-green-300 p-4 rounded-md mb-4">
              Thanks for your message! We'll get back to you soon.
            </div>
          ) : null}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 px-4 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerService;
