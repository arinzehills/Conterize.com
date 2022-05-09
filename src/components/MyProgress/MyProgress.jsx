import React, { useEffect, useState } from "react";
import "./MyProgress.css";
function MyProgress({ progress, progressClass, stopColor1, stopColor2 }) {
  let number = document.getElementById("number");
  let [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCounter((prevCount) => prevCount + 1);
  //     // counter += 1;
  //     // number.innerHTML = counter + "%";
  //     if (counter === progress) {
  //       clearInterval();
  //     } else {
  //       // counter += 1;
  //       setCounter((prevCount) => prevCount + 1);

  //       number.innerHTML = prevCount + "%";
  //     }
  //   }, 20);
  // }, []);

  return (
    <>
      <div className="myprogress_circle">
        <div className="outer">
          <div className="inner">
            <div id="number">
              <div>
                {/* <img src="/images/conterize.png" height={"110px"} alt="" /> */}
                {progress} %
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor={stopColor1 ?? "#e91e63"} />
              <stop
                offset="100%"
                stopColor={stopColor2 ?? "var(--light-purple)"}
              />
            </linearGradient>
          </defs>
          <circle
            className={`circle ${progressClass}` ?? "circle anim0"}
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}

export default MyProgress;
