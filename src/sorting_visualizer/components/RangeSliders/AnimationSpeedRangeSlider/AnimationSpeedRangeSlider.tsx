import React from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import "./AnimationSpeedRangeSlider.css";

// Define the props interface
interface AnimationSpeedRangeSliderProps {
  animationSpeed: number;
  onChangeAnimationSpeedRangeSlider: (
    event: Event | React.SyntheticEvent<Element, Event>, // Use Event or SyntheticEvent here
    value: number | number[]
  ) => void;
}

// Customize the slider using styled
const AnimationSpeedSlider = styled(Slider)({
  color: "rgba(100, 180, 255, 1)",
  inlineSize: "60%",
  padding: 10,
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginTop: -4,
    marginLeft: 0,
  },
  "& .MuiSlider-track": {
    height: 4,
    borderRadius: 4,
  },
  "& .MuiSlider-rail": {
    height: 4,
    borderRadius: 4,
  },
});

const AnimationSpeedRangeSlider: React.FC<AnimationSpeedRangeSliderProps> = ({
  animationSpeed,
  onChangeAnimationSpeedRangeSlider,
}) => {
  return (
    <div className="range-slider-container">
      <p id="text-animation-speed">Animation Speed (ms)</p>
      <AnimationSpeedSlider
        id="animationSpeedSlider"
        min={10}
        max={200}
        defaultValue={animationSpeed}
        valueLabelDisplay="auto"
        onChangeCommitted={onChangeAnimationSpeedRangeSlider}
      />
    </div>
  );
};

export default AnimationSpeedRangeSlider;
