import React from "react";

const Loader = () => {
  const glitchStyle = {
    position: "relative",
    letterSpacing: "5px",
    zIndex: 1,
    animation: "shift 1s ease-in-out infinite alternate",
  };

  const glitchBeforeAfterStyle = {
    display: "block",
    content: "attr(data-glitch)",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.8,
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <style>
        {`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-3px, 3px); }
            40% { transform: translate(-3px, -3px); }
            60% { transform: translate(3px, 3px); }
            80% { transform: translate(3px, -3px); }
            to { transform: translate(0); }
          }
          @keyframes shift {
            0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% { transform: skewX(0deg); }
            41% { transform: skewX(10deg); }
            42% { transform: skewX(-10deg); }
            59% { transform: skewX(40deg) skewY(10deg); }
            60% { transform: skewX(-40deg) skewY(-10deg); }
            63% { transform: skewX(10deg) skewY(-5deg); }
            70% { transform: skewX(-50deg) skewY(-20deg); }
            71% { transform: skewX(10deg) skewY(-10deg); }
          }
          .glitch:before {
            animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
            color: #8b00ff;
            z-index: -1;
          }
          .glitch:after {
            animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
            color: #00e571;
            z-index: -2;
          }
        `}
      </style>
      <div className="loader">
        <div
          data-glitch="Loading..."
          className="glitch text-white text-2xl font-bold"
          style={glitchStyle}
        >
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;