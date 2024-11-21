import React from "react";
import "./ArrayBar.css";

// Define the props interface
interface BarContainerProps {
  array: number[]; // Array of numbers
}

const ArrayBar: React.FC<BarContainerProps> = ({ array }) => {
  return (
    <div className="bar-container">
      {/* Create n bars, where n - size of the array */}
      {array.map((value: number, i: number) => (
        <div className="bar" key={i}>
          <div className="side top"></div>
          <div className="side bottom"></div>
          <div className="side right">
            <div
              className="color-bar right-color-bar"
              style={{
                height: `${value}vh`,
                transform: `translateY(${70 - value}vh)`,
              }}
            ></div>
          </div>
          <div className="side left">
            <div
              className="color-bar left-color-bar"
              style={{
                height: `${value}vh`,
                transform: `translateY(${70 - value}vh)`,
              }}
            ></div>
          </div>
          <div className="side front">
            <div
              className="color-bar front-color-bar"
              style={{
                height: `${value}vh`,
                transform: `translateY(${70 - value}vh)`,
              }}
            ></div>
          </div>
          <div className="side back">
            <div
              className="color-bar back-color-bar"
              style={{
                height: `${value}vh`,
                transform: `translateY(${70 - value}vh)`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrayBar;
