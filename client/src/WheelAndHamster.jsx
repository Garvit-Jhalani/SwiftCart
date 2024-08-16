import React from "react";

const WheelAndHamster = () => {
  const wheelAndHamsterStyles = {
    container: {
      position: "relative",
      width: "12rem",
      height: "12rem",
      fontSize: "0.75rem",
    },
    wheel: {
      position: "absolute",
      borderRadius: "50%",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "radial-gradient(100% 100% at center, hsla(0,0%,60%,0) 47.8%, hsl(0,0%,60%) 48%)",
    },
    hamster: {
      position: "absolute",
      top: "50%",
      left: "calc(50% - 3.5rem)",
      width: "7rem",
      height: "3.75rem",
      transform: "rotate(4deg) translate(-0.8rem, 1.85rem)",
      transformOrigin: "top",
      zIndex: 10,
      animation: "hamster 1s ease-in-out infinite",
    },
    hamsterHead: {
      position: "absolute",
      top: 0,
      left: "-2rem",
      width: "2.75rem",
      height: "2.5rem",
      backgroundColor: "#fbbf24", // yellow-400
      borderRadius: "70% 30% 0 100%",
      boxShadow: "0 0 0.5rem rgba(0,0,0,0.25)",
      animation: "hamsterHead 1s ease-in-out infinite",
    },
    hamsterEar: {
      position: "absolute",
      top: "-0.25rem",
      right: "-0.25rem",
      width: "0.75rem",
      height: "0.75rem",
      backgroundColor: "#fbcfe8", // pink-200
      borderRadius: "50%",
      boxShadow: "0 0 0.25rem rgba(0,0,0,0.25)",
      animation: "hamsterEar 1s ease-in-out infinite",
    },
    hamsterEye: {
      position: "absolute",
      top: "0.375rem",
      left: "1.25rem",
      width: "0.5rem",
      height: "0.5rem",
      backgroundColor: "#000", // black
      borderRadius: "50%",
      animation: "hamsterEye 1s linear infinite",
    },
    hamsterNose: {
      position: "absolute",
      top: "0.75rem",
      left: 0,
      width: "0.25rem",
      height: "0.25rem",
      backgroundColor: "#fda4af", // pink-300
      borderRadius: "35% 65% 85% 15%",
    },
    hamsterBody: {
      position: "absolute",
      top: "0.25rem",
      left: "2rem",
      width: "4.5rem",
      height: "3rem",
      backgroundColor: "#fef08a", // yellow-200
      borderRadius: "50% 30% 50% 30%",
      boxShadow: "0 0 0.5rem rgba(0,0,0,0.25)",
      animation: "hamsterBody 1s ease-in-out infinite",
    },
    hamsterLimbFR: {
      position: "absolute",
      top: "2rem",
      left: "0.5rem",
      width: "1rem",
      height: "1.5rem",
      background: "linear-gradient(hsl(30,90%,80%) 80%, hsl(0,90%,75%) 80%)",
      borderRadius: "50%",
      animation: "hamsterFRLimb 1s linear infinite",
    },
    hamsterLimbFL: {
      position: "absolute",
      top: "2rem",
      left: "0.5rem",
      width: "1rem",
      height: "1.5rem",
      background: "linear-gradient(hsl(30,90%,90%) 80%, hsl(0,90%,85%) 80%)",
      borderRadius: "50%",
      animation: "hamsterFLLimb 1s linear infinite",
    },
    hamsterLimbBR: {
      position: "absolute",
      top: "1rem",
      left: "2.75rem",
      width: "1.5rem",
      height: "2.5rem",
      background: "linear-gradient(hsl(30,90%,80%) 90%, hsl(0,90%,75%) 90%)",
      borderRadius: "50%",
      animation: "hamsterBRLimb 1s linear infinite",
    },
    hamsterLimbBL: {
      position: "absolute",
      top: "1rem",
      left: "2.75rem",
      width: "1.5rem",
      height: "2.5rem",
      background: "linear-gradient(hsl(30,90%,90%) 90%, hsl(0,90%,85%) 90%)",
      borderRadius: "50%",
      animation: "hamsterBLLimb 1s linear infinite",
    },
    hamsterTail: {
      position: "absolute",
      top: "1.5rem",
      right: "-0.5rem",
      width: "1rem",
      height: "0.5rem",
      backgroundColor: "#fbcfe8", // pink-200
      borderRadius: "0.25rem 50% 50% 0.25rem",
      boxShadow: "0 0 0.25rem rgba(0,0,0,0.25)",
      animation: "hamsterTail 1s linear infinite",
    },
    spoke: {
      position: "absolute",
      borderRadius: "50%",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "radial-gradient(100% 100% at center, hsl(0,0%,60%) 4.8%, hsla(0,0%,60%,0) 5%), linear-gradient(hsla(0,0%,55%,0) 46.9%, hsl(0,0%,65%) 47% 52.9%, hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat",
      animation: "spoke 1s linear infinite",
    },
  };

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes hamster {
      from, to {
        transform: rotate(4deg) translate(-0.8em, 1.85em);
      }
      50% {
        transform: rotate(0) translate(-0.8em, 1.85em);
      }
    }

    @keyframes hamsterHead {
      from, 25%, 50%, 75%, to {
        transform: rotate(0);
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(8deg);
      }
    }

    @keyframes hamsterEye {
      from, 90%, to {
        transform: scaleY(1);
      }
      95% {
        transform: scaleY(0);
      }
    }

    @keyframes hamsterEar {
      from, 25%, 50%, 75%, to {
        transform: rotate(0);
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(12deg);
      }
    }

    @keyframes hamsterBody {
      from, 25%, 50%, 75%, to {
        transform: rotate(0);
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(-2deg);
      }
    }

    @keyframes hamsterFRLimb {
      from, 25%, 50%, 75%, to {
        transform: rotate(50deg) translateZ(-1px);
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(-30deg) translateZ(-1px);
      }
    }

    @keyframes hamsterFLLimb {
      from, 25%, 50%, 75%, to {
        transform: rotate(-30deg);
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(50deg);
      }
    }

    @keyframes hamsterBRLimb {
      from, 25%, 50%, 75%, to {
        transform: rotate(-60deg) translateZ(-1px);
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(30deg) translateZ(-1px);
      }
    }

    @keyframes hamsterBLLimb {
      from, 25%, 50%, 75%, to {
        transform: rotate(30deg);
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(-60deg);
      }
    }

    @keyframes hamsterTail {
      from, 25%, 50%, 75%, to {
        transform: rotate(0deg);
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(10deg);
      }
    }

    @keyframes spoke {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(1turn);
      }
    }
  `;
  document.head.appendChild(styleSheet);

  return (
    <div style={wheelAndHamsterStyles.container}>
      <div style={wheelAndHamsterStyles.wheel}></div>
      <div style={wheelAndHamsterStyles.spoke}></div>
      <div style={wheelAndHamsterStyles.hamster}>
        <div style={wheelAndHamsterStyles.hamsterHead}>
          <div style={wheelAndHamsterStyles.hamsterEar}></div>
          <div style={wheelAndHamsterStyles.hamsterEye}></div>
          <div style={wheelAndHamsterStyles.hamsterNose}></div>
        </div>
        <div style={wheelAndHamsterStyles.hamsterBody}>
          <div style={wheelAndHamsterStyles.hamsterLimbFR}></div>
          <div style={wheelAndHamsterStyles.hamsterLimbFL}></div>
          <div style={wheelAndHamsterStyles.hamsterLimbBR}></div>
          <div style={wheelAndHamsterStyles.hamsterLimbBL}></div>
        </div>
        <div style={wheelAndHamsterStyles.hamsterTail}></div>
      </div>
    </div>
  );
};

export default WheelAndHamster;
