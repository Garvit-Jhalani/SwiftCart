// import React, { useState } from "react";
// import Logo from "./assets/Logo.png";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useLocation, Link } from "react-router-dom";
// import { useCart } from "./CartContext";

// const Navbar = () => {
//   const cart = useCart();
//   const location = useLocation();
//   const navItems = [
//     { name: "Dashboard", path: "/" },
//     { name: "Customer Service", path: "/customerService" },
//     { name: "Home Appliances", path: "/homeappliance" },
//     { name: "Electronics", path: "/electronics" },
//     { name: "Clothing", path: "/clothing" },
//     // { name: "Cart", path: "/cart" },
//   ];
//   const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

//   const [isOpen, setIsOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleProfileModal = () => {
//     setIsProfileOpen(!isProfileOpen);
//   };

//   return (
//     <nav
//       className="border-gray-200 scrollbar-hide"
//       style={{
//         backgroundImage:
//           "url('https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg')",
//       }}
//     >
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
//         <Link
//           to="/"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <img src={Logo} className="h-8" alt="Swift Cart Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Swift Cart
//           </span>
//         </Link>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
//           {isAuthenticated ? (
//             <div className="relative">
//               <button onClick={toggleDropdown} className="focus:outline-none">
//                 <img
//                   className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
//                   src={user.picture}
//                   alt="User Avatar"
//                 />
//               </button>
//               {isOpen && (
//                 <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
//                   <div
//                     className="py-1"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="options-menu"
//                   >
//                     <button
//                       onClick={toggleProfileModal}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                       role="menuitem"
//                     >
//                       My Profile
//                     </button>
//                     <Link
//                       to="/orders"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       role="menuitem"
//                     >
//                       Orders
//                     </Link>
//                     <Link
//                       to="/settings"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       role="menuitem"
//                     >
//                       Settings
//                     </Link>
//                     <button
//                       onClick={() =>
//                         logout({
//                           logoutParams: { returnTo: window.location.origin },
//                         })
//                       }
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       role="menuitem"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button
//               onClick={() => loginWithRedirect()}
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Login
//             </button>
//           )}
//           <button
//             data-collapse-toggle="navbar-cta"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-cta"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-cta"
//         >
//           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
//             {navItems.map((item) => (
//               <li key={item.path}>
//                 <Link
//                   to={item.path}
//                   className={`block py-2 px-3 md:p-0 rounded ${
//                     location.pathname === item.path
//                       ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
//                       : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                   }`}
//                   aria-current={
//                     location.pathname === item.path ? "page" : undefined
//                   }
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <Link to="/cart" className="relative text-white pl-8 font-semibold">
//             Cart
//             {cart.length > 0 && (
//               <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 {cart.length}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>
//       {isProfileOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75"
//           onClick={toggleProfileModal}
//         >
//           <div
//             className="bg-white rounded-lg p-6 w-80"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-xl font-semibold mb-4 text-center">Profile</h2>
//             <div className="flex flex-col items-center">
//               <img
//                 className="w-24 h-24 rounded-full mb-4"
//                 src={user.picture}
//                 alt={user.name}
//               />
//               <h3 className="text-lg font-medium mb-2">{user.name}</h3>
//               <p className="text-gray-700">{user.email}</p>
//             </div>
//             <div className="mt-6 flex justify-center">
//               <button
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 onClick={toggleProfileModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Logo from "./assets/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
  const cart = useCart();
  const location = useLocation();
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Customer Service", path: "/customerService" },
    { name: "Home Appliances", path: "/homeappliance" },
    { name: "Electronics", path: "/electronics" },
    { name: "Clothing", path: "/clothing" },
  ];
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileModal = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="border-gray-200 scrollbar-hide relative z-20"
      style={{
        backgroundImage:
          "url('https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg')",
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Swift Cart Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Swift Cart
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          {isAuthenticated ? (
            <div className="relative">
              <button onClick={toggleDropdown} className="focus:outline-none">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={user.picture}
                  alt="User Avatar"
                />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      onClick={toggleProfileModal}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                    >
                      My Profile
                    </button>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Orders
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          )}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 px-3 md:p-0 rounded ${
                    location.pathname === item.path
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                  aria-current={
                    location.pathname === item.path ? "page" : undefined
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/cart" className="relative text-white pl-8 font-semibold">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
      {isProfileOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75"
          onClick={toggleProfileModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4 text-center">Profile</h2>
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src={user.picture}
                alt={user.name}
              />
              <h3 className="text-lg font-medium mb-2">{user.name}</h3>
              <p className="text-gray-700">{user.email}</p>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={toggleProfileModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
