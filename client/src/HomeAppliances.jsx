import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatchCart } from "./CartContext";

const HomeAppliances = () => {
  const dispatch = useDispatchCart();
  const [products, setProducts] = useState([]);
  const [homeProd, setHomeProd] = useState([]);
  const [kitchenProd, setKitchenProd] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    // Show loader for 7 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const allProducts = response.data;

        // Filter products by category
        const homeProd = allProducts.filter(
          (product) => product.category === "home appliances"
        );
        const kitchenProd = allProducts.filter(
          (product) => product.category === "kitchen appliances"
        );

        setProducts(allProducts); // optional: keep all products
        setHomeProd(homeProd);
        setKitchenProd(kitchenProd);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    dispatch({
      type: "ADD",
      id: product.id,
      Image: product.image,
      Name: product.name,
      Price: product.price,
      Quantity: 1,
      Description: product.description,
    });
  };

  return (
    <div>
      {loading ? (
        <div class="h-screen w-screen flex justify-center items-center bg-black">
          <div class="h-32 w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
            <span class="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          {/* Home Appliances */}
          <div className="pt-8 pb-16 px-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-300 via-purple-200 to-purple-400 inline-block text-transparent bg-clip-text">
              <u className="mt-2 font-bold">Home Appliances</u>
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {homeProd.map((product) => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product._id}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                  </Link>
                  <div className="mt-4 flex justify-between">
                    <div className="ml-2">
                      <Link to={`/product/${product._id}`}>
                        <h3 className="text-md font-bold text-gray-700">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                      <Link to="#">
                        <p className="text-xs text-gray-900 mt-2 mb-4">
                          See Related Products...
                        </p>
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        className="inset-x-20 bottom-0 inline-flex ml-16 items-center justify-center p-0.5 justify-center me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                      >
                        <span className="relative inline-block px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Add to cart
                        </span>
                      </button>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mr-4">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Kitchen Appliances */}
          <div className="pt-8 pb-16 px-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-300 via-purple-200 to-purple-400 inline-block text-transparent bg-clip-text">
              Kitchen Appliances
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {kitchenProd.map((product) => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product._id}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                  </Link>
                  <div className="mt-4 flex justify-between">
                    <div className="ml-2">
                      <Link to={`/product/${product._id}`}>
                        <h3 className="text-md font-bold text-gray-700">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                      <Link to="#">
                        <p className="text-xs text-gray-900 mt-2 mb-4">
                          See Related Products...
                        </p>
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        className="inset-x-20 bottom-0 inline-flex ml-16 items-center justify-center p-0.5 justify-center me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                      >
                        <span className="relative inline-block px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Add to cart
                        </span>
                      </button>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mr-4">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default HomeAppliances;
