import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-full w-full justify-center items-center scrollbar-hide overflow-y-scroll ">
        <Outlet />
      </div>
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen w-screen animate-backgroundAnimation">
          <Outlet />
        </div>
      </div> */}
    </>
  );
}
