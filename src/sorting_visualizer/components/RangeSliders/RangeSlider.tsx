import React, { useState, useEffect } from "react";
import ArrayBarRangeSlider from "./ArrayBarRangeSlider/ArrayBarRangeSlider";
import AnimationSpeedRangeSlider from "./AnimationSpeedRangeSlider/AnimationSpeedRangeSlider";
import "./RangeSlider.css";

// Define the props interface
interface RangeSliderProps {
  numberOfArrayBars: number;
  animationSpeed: number;
  onChangeArrayBarRangeSlider: (
    event: Event | React.SyntheticEvent<Element>,
    value: number | number[]
  ) => void;
  onChangeAnimationSpeedRangeSlider: (
    event: Event | React.SyntheticEvent<Element>,
    value: number | number[]
  ) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  numberOfArrayBars,
  animationSpeed,
  onChangeArrayBarRangeSlider,
  onChangeAnimationSpeedRangeSlider,
}) => {
  const [bars, setBars] = useState<number>(numberOfArrayBars);
  const [speed, setSpeed] = useState<number>(animationSpeed);

  // If props change, update the state
  useEffect(() => {
    setBars(numberOfArrayBars);
    setSpeed(animationSpeed);
  }, [numberOfArrayBars, animationSpeed]);

  return (
    <div id="range-slider">
      <div className="column">
        <ArrayBarRangeSlider
          numberOfArrayBars={bars}
          onChangeArrayBarRangeSlider={(event, value) =>
            onChangeArrayBarRangeSlider(event, value)
          }
        />
      </div>
      <div className="column">
        <AnimationSpeedRangeSlider
          animationSpeed={speed}
          onChangeAnimationSpeedRangeSlider={(event, value) =>
            onChangeAnimationSpeedRangeSlider(event, value)
          }
        />
      </div>
    </div>
  );
};

export default RangeSlider;
