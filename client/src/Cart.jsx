import React, { useState, useEffect } from "react";
import { useCart, useDispatchCart } from "./CartContext";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { user } = useAuth0();
  const cart = useCart();
  const dispatch = useDispatchCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState([]);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const handleDrop = () => {
    dispatch({ type: "DROP" });
  };

  const handleIncrement = (index) => {
    dispatch({ type: "INCREMENT", index });
  };

  const handleDecrement = (index) => {
    if (cart[index].Quantity > 1) {
      dispatch({ type: "DECREMENT", index });
    } else {
      handleRemove(index); // Remove item if quantity is 1 and decrement is clicked
    }
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.Price * item.Quantity,
    0
  );
  const discount = parseInt((10 / 100) * totalAmount);
  const discountedTotal = totalAmount - discount;

  const [address, setAddress] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputAddress, setInputAddress] = useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    setInputAddress("");
  };
  const handleSaveAddress = () => {
    setAddress(inputAddress);
    handleCloseModal();
  };

  const handlePayNow = async () => {
    setLoading(true);
    const orderData = {
      userId: user.sub,
      userName: user.name,
      items: cart,
      totalAmount: discountedTotal,
    };

    try {
      await axios.post("http://localhost:5000/api/orders", orderData);
      dispatch({ type: "DROP" }); // Clear the cart after successful payment
      toast.success("Payment successful and order received!");
      setLoading(false);
      setTimeout(() => navigate("/"), 4000);
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("Error processing payment. Please try again.");
      setLoading(false);
    }
  };
  useEffect(() => {
    // Show loader for 7 seconds
    const timer = setTimeout(() => {
      setLoading1(false);
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading1 ? (
        <div class="h-screen w-screen flex justify-center items-center bg-black">
          <div class="h-32 w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
            <span class="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <ToastContainer />
          <div className="pt-8 text-center pb-16 px-16">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-indigo-600 inline-block text-transparent bg-clip-text">
              Your Cart
            </h1>
            {cart.length === 0 ? (
              <div>
                <p className="mt-6 text-2xl text-center text-gray-700 px-48">
                  The Cart is empty. Kindly add some products to see on the cart
                  or just click on the below button to start browsing some
                  products..
                </p>
                <Link to="/">
                  <button className="relative mt-8 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative text-lg px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Start Browsing
                    </span>
                  </button>
                </Link>
              </div>
            ) : (
              <div className="mt-6 flex">
                <div className="flex-initial w-[820px] grid grid-col">
                  <div className="flex justify-between items-center bg-slate-100 mb-8 p-8">
                    <h1 className="text-lg font-bold mb-4">
                      {address || "Delivery Address"}
                    </h1>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5"
                      onClick={handleOpenModal}
                    >
                      Add Location Pincode
                    </button>
                    {isModalOpen && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                          <h2 className="text-lg font-bold mb-4">
                            Enter Delivery Address
                          </h2>
                          <input
                            type="text"
                            className="border p-2 w-full mb-4"
                            placeholder="Enter your address"
                            value={inputAddress}
                            onChange={(e) => setInputAddress(e.target.value)}
                          />
                          <div className="flex justify-end">
                            <button
                              className="text-white bg-red-500 px-4 py-2 rounded mr-2"
                              onClick={handleCloseModal}
                            >
                              Cancel
                            </button>
                            <button
                              className="text-white bg-green-500 px-4 py-2 rounded"
                              onClick={handleSaveAddress}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid bg-slate-100 p-12">
                    {cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex mb-12 justify-between items-center"
                      >
                        <span className="text-sm font-bold text-gray-700">
                          {index + 1}.
                        </span>
                        <img
                          src={item.Image}
                          alt={item.Name}
                          className="w-16 h-16 object-cover"
                        />
                        <div className="flex-row">
                          <div>
                            <div className="ml-4 flex-grow">
                              <h3 className="text-md font-bold text-gray-700">
                                {item.Name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {item.Description}
                              </p>
                            </div>
                            <div className="flex items-center ml-48">
                              <p className="text-sm font-medium text-gray-900 mr-4">
                                ₹{item.Price * item.Quantity}
                              </p>
                              <button
                                onClick={() => handleRemove(index)}
                                className="text-md text-red-500 ml-28"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => handleDecrement(index)}
                            className="text-lg bg-gray-200 px-4 py-1.5 rounded-full"
                          >
                            -
                          </button>
                          <span className="mx-4">{item.Quantity}</span>
                          <button
                            onClick={() => handleIncrement(index)}
                            className="text-lg bg-gray-200 px-4 py-1.5 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={handleDrop}
                      className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
                <div className="flex-1 bg-slate-100 px-12 h-[380px] pb-12 pt-8 ml-12 overflow-y-auto">
                  <h1 className="font-bold text-2xl mb-4">Price Details</h1>
                  <hr className="border-2 mb-4" />
                  <div className="flex justify-between text-lg mb-2">
                    <span>Price ({cart.length} items)</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-lg mb-2">
                    <span>Discount (10%)</span>
                    <span className="text-green-600">- ₹{discount}</span>
                  </div>
                  <div className="flex justify-between text-lg mb-2">
                    <span>Delivery Charges</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <hr className="border-2 my-4" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total Amount</span>
                    <span>₹{discountedTotal}</span>
                  </div>
                  <button
                    onClick={handlePayNow}
                    className={`text-white mt-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : `Pay ₹${discountedTotal} Now`}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
