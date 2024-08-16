import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Navbar from "./Navbar";
import { format } from "date-fns";

const Orders = () => {
  const { user } = useAuth0();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders", {
          params: { userId: user.sub },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="pt-8 text-center pb-16 px-16">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-indigo-600 inline-block text-transparent bg-clip-text">
          My Orders
        </h1>
        {orders.length === 0 ? (
          <p className="mt-6 text-2xl text-center text-gray-700 px-48">
            You have no orders yet.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-8">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 w-[720px] mx-auto"
              >
                <h2 className="text-2xl font-bold mb-4">Order {index + 1}</h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Date:</span>{" "}
                  {format(new Date(order.date), "PPPpp")}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-bold">Total Amount:</span> ₹
                  {order.totalAmount}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {order.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center bg-slate-100 p-4 rounded-lg"
                    >
                      <img
                        src={item.Image}
                        alt={item.Name}
                        className="w-16 h-16 object-cover"
                      />
                      <div className="ml-4 flex-grow">
                        <h3 className="text-md font-bold text-gray-700">
                          {item.Name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.Description}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mr-4">
                        ₹{item.Price} x {item.Quantity}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        ₹{item.Price * item.Quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
