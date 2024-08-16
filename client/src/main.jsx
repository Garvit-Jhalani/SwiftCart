import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./auth.context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AboutUs from "./AboutUs.jsx";
import CustomerService from "./CustomerService.jsx";
import Faqs from "./Faqs.jsx";
import Blog from "./Blog.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Electronics from "./Electronics.jsx";
import HomeAppliances from "./HomeAppliances.jsx";
import Cart from "./Cart.jsx";
import { CartProvider } from "./CartContext";
import Laptop from "./Laptop.jsx";
import Clothing from "./Clothing.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Orders from "./Orders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/customerService",
    element: <CustomerService />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/howItWorks",
    element: <HowItWorks />,
  },
  {
    path: "/electronics",
    element: <Electronics />,
  },
  {
    path: "/homeappliance",
    element: <HomeAppliances />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/laptop",
    element: <Laptop />,
  },
  {
    path: "/clothing",
    element: <Clothing />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Auth0Provider
        domain="dev-3fjgvbot14tdw8gc.us.auth0.com"
        clientId="C0QJ7XFADK5PzJjg0wJR8nIKS5mjrxJk"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </Auth0Provider>
    </AuthProvider>
  </React.StrictMode>
);
