import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="relative left-0 right-0  pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-orange-100">
        <div>
          <h1 className="font-bold pl-40 pt-36 text-4xl font-mono">
            <b>Our Story</b>
          </h1>
          <p className="font-bold pl-44 font-mono text-orange-600 pb-4">
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

      <div className="pb-14 mt-32">
        <img
          className="float-left w-[420px] h-36 pl-40 pr-24"
          src="https://images.meesho.com/images/products/262160549/n1znw_512.webp"
        />
        <div className="pr-14">
          <h1 className="font-bold pb-4">
            Ipsum nunc aliquet bibendum enim. Nam at lectus urna duis convallis.
            Quis varius quam quisque id diam vel
          </h1>
          <p className="text-gray-400 text-sm">
            Euismod lacinia at quis risus sed vulputate odio ut enim. Eget felis
            eget nunc lobortis mattis aliquam faucibus. Adipiscing vitae proin
            sagittis nisl rhon mattis rhoncus. Lacinia quis vel eros donec ac
            odio tempor orci. Mattis nunc sed blandit libero volutpat sed cras
            ornare arcu. Habitant morbi tristique senectus et. Mi quis hendrerit
            dolor magna eget est lorem. Et leo duis ut diam quam nulla porttitor
            massa. Tristique risus nec feugiat in. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet nulla.
          </p>
        </div>
      </div>
      <div className="pb-24 pt-12 ">
        <img
          className="float-right w-96 h-36 pr-24 pl-24"
          src="https://www.financialexpress.com/wp-content/uploads/2022/12/1670241339_image-1.png?w=620"
        />
        <div className="pl-40">
          <h1 className="font-bold pb-4">
            Ipsum nunc aliquet bibendum enim. Nam at lectus urna duis convallis.
            Quis varius quam quisque id diam vel
          </h1>
          <p className="text-gray-400 text-sm">
            Euismod lacinia at quis risus sed vulputate odio ut enim. Eget felis
            eget nunc lobortis mattis aliquam faucibus. Adipiscing vitae proin
            sagittis nisl rhoncus mattis rhoncus. Lacinia quis vel eros donec ac
            odio tempor orci. Mattis nunc sed blandit libero volutpat sed cras
            ornare arcu. Habitant morbi tristique senectus et. Mi quis hendrerit
            dolor magna eget est lorem. Et leo duis ut diam quam nulla porttitor
            massa. Tristique risus nec feugiat in. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet nulla.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
