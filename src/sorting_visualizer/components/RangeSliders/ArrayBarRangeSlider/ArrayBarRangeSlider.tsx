import React from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import "./ArrayBarRangeSlider.css";

// Define the props interface
interface ArrayBarRangeSliderProps {
  numberOfArrayBars: number;
  onChangeArrayBarRangeSlider: (
    event: Event | React.SyntheticEvent<Element>, // Accepting the correct event type
    value: number | number[]
  ) => void;
}

// Customize the slider using styled
const ArrayBarSlider = styled(Slider)({
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

const ArrayBarRangeSlider: React.FC<ArrayBarRangeSliderProps> = ({
  numberOfArrayBars,
  onChangeArrayBarRangeSlider,
}) => {
  return (
    <div className="range-slider-container">
      <p id="text-array-size">Array Size</p>
      <ArrayBarSlider
        id="arrayBarSlider"
        min={2}
        max={14}
        step={1}
        defaultValue={numberOfArrayBars}
        valueLabelDisplay="auto"
        marks
        onChangeCommitted={onChangeArrayBarRangeSlider} // Correct type
      />
    </div>
  );
};

export default ArrayBarRangeSlider;
