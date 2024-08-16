import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatchCart } from "./CartContext";
import Loader from "./Loader";

const App = () => {
  const dispatch = useDispatchCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Location");
  const [location1, setLocation1] = useState("Location");

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    // Show loader for 7 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const allProducts = response.data;
        const randomProducts = getRandomProducts(allProducts, 20);
        setProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getRandomProducts = (products, count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/11/Best-smartphone-3.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://sc04.alicdn.com/kf/Hc6f1a36b77814dc2b5861298d52df7dbd.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/api/search", {
        params: { search: searchQuery },
      });

      const products = response.data;

      if (products.length > 0) {
        // Redirect to the first matching product's detail page
        navigate(`/product/${products[0]._id}`);
      } else {
        alert("No products found");
      }
    } catch (error) {
      console.error("Error searching for products:", error);
      alert("An error occurred while searching. Please try again.");
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch city name using Nominatim
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.county;
              const state = data.address.state;
              let locationName = `${city}, ${state}`;

              setLocation1(locationName);
              // Trim locationName to 10 characters and append "..."
              if (locationName.length > 10) {
                locationName = locationName.substring(0, 10) + "...";
              }

              setLocation(locationName);
            })
            .catch((error) => {
              console.error("Error fetching location name:", error);
              alert(
                "Unable to fetch your current location. Please ensure that you are allowing us to fetch your current location!"
              );
              setLocation("Location");
            });
        },
        (error) => {
          console.error("Error retrieving location:", error);
          setLocation("Unable to retrieve location");
        }
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="scrollbar-hide overflow-y-scroll">
          {/* -------------------Navbar--------------------- */}
          <Navbar />
          {/* ------------------Middle-Section---------------------- */}
          <button
            type="button"
            onClick={getLocation}
            title={location1}
            className="inline-block ml-20 cursor-pointer text-white bg-white hover:border-2 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 inline-block pr-2 text-black"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="inline-block font-bold text-black">
              {location}
            </span>
          </button>
          <form
            className="mt-2 inline-block px-24 w-[1080px]"
            onSubmit={handleSearch}
          >
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search for the products
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for the Products"
                required
              />
              <button
                type="submit"
                className="text-black absolute end-2.5 bottom-2.5 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <button
            type="submit"
            className="inline-block cursor-pointer py-2.5 px-7 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-8 inline-block pr-2"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              <span className="inline-block font-bold">My Cart</span>
            </Link>
          </button>

          <div className="relative left-0 right-0 top-4 pb-6 ml-0 bg-slate-200 grid grid-flow-col gap-4 justify-left">
            <div>
              <img
                className="relative left-0 ml-8 h-72 float-left rounded-lg pr-20 pt-24"
                src="https://uploads.nationaljeweler.com/uploads/2ce76797e1caf0c6e7d0dd84a8f88204.jpg"
              />
            </div>
            <div>
              <h1 className="font-bold pt-24 text-4xl font-mono">
                Your One-Stop Shop for All Your Needs!
              </h1>
              <h1 className="font-bold text-4xl font-mono text-orange-600 pb-4">
                Shop Smart, Shop Swift!
              </h1>
              <p className="text-sm pb-12 pr-20">
                Discover Our Wide Range of Products: Wearables, Home Appliances,
                Laptops, and More! Sign Up Now and Get 10% Off Your First
                Purchase!
              </p>
              <button
                type="button"
                class="mb-8 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
              >
                Get Started
              </button>
            </div>
            <div>
              <img
                className="relative right-0 mt-20 mr-20 h-64 float-right rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgpg3n2bQZA5Zsbrh9sktZmyi0iD85iYycHYLFdd8fUwMSj8PcjhQa3S4psPIQaDaCYA&usqp=CAU"
                alt=""
              />
            </div>
          </div>

          {/* Middle-Section-2 */}
          <div className="flex mt-20">
            {/* Part-1 */}
            <div className="flex-1 border-2 mb-24 mx-4 pb-4">
              <h1 className="font-bold text-lg text-center mt-4">
                Revamp your home in style
              </h1>
              <div className="flex flex-row mt-4 px-4">
                <img
                  src="https://media.designcafe.com/wp-content/uploads/2021/04/07190131/old-house-living-room-renovation.jpg"
                  className="flex-1 h-24 mr-4"
                />
                <img
                  src="https://anthonyinnovations.com/wp-content/uploads/2020/06/kitchen-apartment-850x560.jpg"
                  className="flex-1 h-24 "
                />
              </div>
              <div className="flex flex-row mt-4 px-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFbUnDOQirj2mZazUyRRVUS7EdPpBTGqmQQ&usqp=CAU"
                  className="flex-1 h-24 mr-4"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0_gzm18O_lAW-FUf-_FNkiaTV9yMEXWGOg&usqp=CAU"
                  className="flex-1 h-24 mb-4"
                />
              </div>
              <a className="text-black font-bold ml-60 pt-4" href="#">
                and more...
              </a>
            </div>

            {/* Part-2 */}
            <div className="flex-1 border-2 mb-24 mx-4 pb-4">
              <h1 className="font-bold text-lg text-center mt-4">
                Appliances for your home
              </h1>
              <div className="flex flex-row mt-4 px-4">
                <img
                  src="https://cityfurnish.com/blog/wp-content/uploads/2022/02/home-appliances-household-kitchen-items-realistic_80590-5914-1-1200x958.jpg"
                  className="flex-1 h-24 mr-4"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HaxQHQvlZ2UVOu4sqEx0TlVqFw5RvkmAGg&usqp=CAU"
                  className="flex-1 h-24 "
                />
              </div>
              <div className="flex flex-row mt-4 px-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tXfjCGKo_kblNjFRKaE2YhC85j_izHaYIA&usqp=CAU"
                  className="flex-1 h-24 mr-4"
                />
                <img
                  src="https://wiproappliances.com/cdn/shop/articles/home-appliances-min.jpg?v=1713851586"
                  className="flex-1 h-24 mb-4"
                />
              </div>
              <a
                className="text-black font-bold ml-60 pt-4"
                href="/homeappliance"
              >
                See more...
              </a>
            </div>
            {/* Part-3 */}
            <div className="flex-1 border-2 mb-24 mx-4 pb-4">
              <h1 className="font-bold text-lg text-center mt-4">
                Starting ₹149 | Headphones
              </h1>
              <div className="flex flex-row mt-4 px-4">
                <img
                  src="https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg"
                  className="flex-1 h-24 mr-4"
                />
                <img
                  src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXBhaS0xNTgta2FuYXRlLTAxLW1vY2t1cF8xLmpwZw.jpg"
                  className="flex-1 h-24 "
                />
              </div>
              <div className="flex flex-row mt-4 px-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0608/4988/1306/files/roar-301-headphone.png?v=1667291051"
                  className="flex-1 h-24 mr-4"
                />
                <img
                  src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-108706412/108706412.jpg"
                  className="flex-1 h-24 mb-4"
                />
              </div>
              <a
                className="text-black ml-52 font-bold pt-4"
                href="/electronics"
              >
                See all offer...
              </a>
            </div>
            {/* Part-4 */}
            <div className="flex-1 border-2 mb-24 mx-4 pb-4">
              <h1 className="font-bold text-lg text-center mt-4">
                Up to 60% off | Styles for women
              </h1>
              <div className="flex flex-row mt-4 px-4">
                <img
                  src="https://www.nykaa.com/beauty-blog/wp-content/uploads/images/revamp/10-beauty-essentials-every-woman_OI.jpg"
                  className="flex-1 h-24 mr-4 w-8"
                />
                <img
                  src="https://5.imimg.com/data5/UF/QA/JQ/IOS-19031842/product-jpeg.png"
                  className="flex-1 h-24 w-8"
                />
              </div>
              <div className="flex flex-row mt-4 px-4">
                <img
                  src="https://www.aviationkart.com/cdn/shop/products/S74bf14eea0bc40ce94324f93742626a1w.jpg?v=1691223409"
                  className="flex-1 h-24 mr-4"
                />
                <img
                  src="https://images.meesho.com/images/products/47541378/urhxm_512.webp"
                  className="flex-1 h-24 mb-4"
                />
              </div>
              <a className="text-black font-bold ml-44 pt-4" href="#">
                End of Season Sale..
              </a>
            </div>
          </div>

          {/* Middle-Section-3 */}
          <div className="flex ">
            <div className="flex-1 h-[480px] m-auto pb-16 px-4 relative group">
              <Link to="/laptop">
                <h1 className="font-bold text-2xl text-center mb-4">
                  Electronics Appliances...
                </h1>
                <div
                  style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                  }}
                  className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                ></div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className="flex top-4 justify-center py-2">
                  {slides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      className="text-2xl cursor-pointer"
                    >
                      <RxDotFilled />
                    </div>
                  ))}
                </div>
              </Link>
            </div>
            <div className="flex-1">
              <a href="/clothing">
                <img
                  src="https://5.imimg.com/data5/JC/KU/IL/SELLER-24587667/1-500x500.jpeg"
                  className="flex-1 h-[440px] mt-12 mr-6 mb-8 inline-block align-middle inline-block"
                />
              </a>
              <a href="#">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/4/299833954/FY/WE/YF/2918391/28-inch-luggage-trolley-bag-500x500.jpg"
                  className="flex-1 h-[440px] mt-12 mb-8 inline-block align-middle inline-block"
                />
              </a>
            </div>
          </div>

          {/* From Backend */}

          <div className="pt-8 pb-16 px-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-300 via-purple-200 to-purple-400 inline-block text-transparent bg-clip-text">
              Some Random Products
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
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
                        <span className="bottom-0 relative inline-block px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Add to cart
                          <svg
                            class="flex-shrink-0 size-5 inline-block ml-2.5 mb-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m5 11 4-7"></path>
                            <path d="m19 11-4-7"></path>
                            <path d="M2 11h20"></path>
                            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
                            <path d="m9 11 1 9"></path>
                            <path d="M4.5 15.5h15"></path>
                            <path d="m15 11-1 9"></path>
                          </svg>
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

export default App;
