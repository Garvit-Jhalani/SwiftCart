import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatchCart } from "./CartContext";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const dispatch = useDispatchCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const allProducts = response.data;

        const selectedProduct = allProducts.find((p) => p._id === id);
        if (selectedProduct) {
          setProduct(selectedProduct);

          // Filter related products by the selected product's category
          const filteredProducts = allProducts.filter(
            (product) =>
              product.category === selectedProduct.category &&
              product._id !== id
          );

          setRelatedProducts(filteredProducts); // No sorting applied here
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
  const handleReviewSubmit = async () => {
    if (!user) {
      toast.error("You need to be logged in to submit a review");
      return;
    }

    const reviewData = {
      userId: user.sub,
      userName: user.name,
      productId: id,
      rating,
      comment,
    };

    try {
      await axios.post("http://localhost:5000/api/reviews/add", reviewData);
      toast.success("Review added successfully!");
      setReviews([...reviews, reviewData]);
      setRating(0);
      setComment("");
    } catch (error) {
      toast.error("Error submitting review. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row lg:gap-48 mb-8">
          <div className="ml-48 w-[320px] h-56 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">
              Price: ₹{product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="inset-x-20 bottom-0 inline-flex ml-16 items-center justify-center p-0.5 justify-center me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative inline-block px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add to cart
              </span>
            </button>
          </div>
        </div>
        <div className="mt-40">
          <h1 className="text-2xl ml-12 mb-8 font-bold bg-gradient-to-r from-rose-300 via-purple-200 to-purple-400 inline-block text-transparent bg-clip-text">
            <u className="mt-2 font-bold">Related Products</u>
          </h1>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((product) => (
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
      </div>
    </>
  );
};

export default ProductDetail;
