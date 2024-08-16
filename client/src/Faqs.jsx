import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Faqs = () => {
  return (
    <>
      <Navbar />
      <div className="relative left-0 right-0 pb-12 pt-2 ml-0 bg-orange-100 grid grid-flow-col gap-2 justify-left bg-orange-100">
        <div>
          <h1 className="font-bold pl-24 pt-36 text-4xl font-mono">
            <b>Frequently Asked Questions</b>
          </h1>
          <p className="font-bold pl-48 font-mono text-orange-600 pb-4">
            Home Like Taste
          </p>
        </div>
        <div>
          <img
            className="relative right-0 pt-24 pb-8 pr-40 mr-30 h-64 float-right"
            src="https://t4.ftcdn.net/jpg/03/50/16/95/360_F_350169504_t13447u3rwR5iBEWD3QrzwJbElxu4Gho.webp"
            alt=""
          />
        </div>
      </div>

      <div className="relative pb-14 mt-8">
        <div className=" bg-white w-full px-8 py-14 mx-auto mt-20 space-y-2 shadow lg:max-w-md">
          <details className="p-4 rounded-lg">
            <summary className="font-semibold">
              Q-1 I Don't remember my password ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                <b>Answer:</b> You have already created an account but you can't
                remember your password? Click on 'Login/Sign Up' at the top of
                the page. Then click on 'Forgot Password?'. Fill out your phone
                number and a password recovery will be sent to you by phone.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold">
              Q-2 What are your delivery hours ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                <b>Answer:</b> Our delivery hour is from 10:00 AM to 08:00 PM.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold">
              Q-3 How do I know the status of my order ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                <b>Answer:</b> After you place your order, it is sent
                immediately to the bliss kitchen, which starts preparing it
                without any delay. The kitchen does everything to process your
                order as quickly as possible. However, sometimes Blissmeal
                receives large amount of orders, or drivers get stuck in heavy
                traffic this might cause little delays. If the amount of time
                you've waited has exceeded the estimated delivery time, you may
                please contact us. You will a receive an SMS as soon as your
                order is dispatched.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold">
              Q-4 How to order online at SwiftCart.com ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                <b>Answer:</b> It is really easy, as easy as 1, 2, 3... <br />
                i. Tell us where you are: enter your location so that we know
                your address to deliver your order. <br />
                ii. Choose what you would like: select items you'd like to
                order. You can search by cuisine type, dish name. <br />
                iii. Checkout: Enter your exact delivery address, payment method
                and your phone number. Always make sure that you enter the
                correct phone number to help us contact you regarding your order
                if needed. Now sit back, relax, and we'll get your food
                delivered to your doorstep.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold">
              Q-5 I want my invoice of my order ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                <b>Answer:</b> Invoice Copy is sent via email & Text Message.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold">
              Q-6 Didn't recieve order confirmation SMS ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                <b>Answer:</b> Please check once in your text message. If not,
                please share the details via customer Support team. Mail Id:
                customercare@jiak.com Phone No: +91 - 722 502 1674
              </p>
            </div>
          </details>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
