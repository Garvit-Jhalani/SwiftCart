import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import React, { useState } from "react";
import Footer from "./Footer.jsx";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white w-full mb-12">
        <div className="absolute left-0 right-0 top-16 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-orange-100">
          <div>
            <h1 className="font-bold pl-44 pt-36 text-4xl font-mono">
              <b>About Us</b>
            </h1>
            <p className="font-bold pl-40 font-mono text-orange-600 pb-4">
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

        <div className="">
          <div className="bg-grey-500 container mx-auto mb-32 pt-24 mt-96">
            <div className="float-left pl-8 pr-24">
              <img
                src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2010/06/products-versus-goods.png?fit=1280%2C720&ssl=1"
                className="w-96 h-80 "
                alt=""
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Getting to Know Us</h2>
              <p className="text-gray-600 mb-4 pr-8">
                Welcome to SwiftCart, your go-to destination for a seamless and
                personalized online shopping experience. At SwiftCart, we
                believe in combining the best of technology and a
                customer-centric approach to offer you a curated selection of
                high-quality products across various categories. From the latest
                in wearables and smart gadgets to essential home and kitchen
                appliances, entertainment systems, health tools, and gaming
                gear, we have something for everyone. Our mission is to make
                shopping not just a necessity but a delightful experience, with
                recommendations tailored to your preferences, easy navigation,
                and a secure, hassle-free checkout process. Join us and discover
                a world where convenience meets choice, and every purchase is a
                step towards enhancing your lifestyle.
              </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-2 float-left"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span>
                  <p>Secure Payments</p>
                </span>
              </div>
              <div className="pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-2 float-left"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <p>top Restraunts at one place</p>
              </div>
              <div className="pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-2 float-left"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <p>Take away option</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto ps-px">
            <div className="max-w-xl text-center mx-auto mb-20">
              <h2 className="font-heading mb-5 text-5xl font-semibold">
                HOW SWIFTCART WORKS
              </h2>
            </div>
            <div className="flex flex-wrap -m-7 mb-14 ms-2 me-2 ps-0 pe-px">
              <div className="w-full md:w-1/4 p-7">
                <div className="max-w-xs ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 ml-28 rounded-full border-2 px-1 py-1 border-black object-center"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                    />
                  </svg>

                  <h3 className="mb-4 ml-20 text-xl font-semibold tracking-tight pt-6">
                    Select Restraunt
                  </h3>
                  <p className="text-gray-600 tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/4 p-7">
                <div className="max-w-xs ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="inline-block ml-28 w-12 h-12 rounded-full border-2 px-1 py-1 border-black text-center"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>

                  <h3 className="mb-4 ml-24 text-xl font-semibold tracking-tight pt-6">
                    Fill Details
                  </h3>
                  <p className="text-gray-600 tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/4 p-7">
                <div className="max-w-xs ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 ml-28 rounded-full border-2 px-1 py-1 border-black object-center"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>

                  <h3 className="mb-4 ml-20 text-xl font-semibold tracking-tight pt-6">
                    Make Payment
                  </h3>
                  <p className="text-gray-600 tracking-tight">
                    Fermentum et sollicitudin ac orci phasellus. Elementum
                    sagittis vitae et leo duis ut diam quam.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/4 p-7">
                <div className="max-w-xs ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 ml-28 rounded-full border-2 px-1 py-1 border-black object-none object-center"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>

                  <h3 className="mb-4 ml-16 text-xl font-semibold tracking-tight pt-6">
                    Booking Confirmed
                  </h3>
                  <p className="text-gray-600 tracking-tight">
                    Consequat semper viverra nam libero justo laoreet sit.
                    Pellentesque elit ullamcorper dignissim cras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
