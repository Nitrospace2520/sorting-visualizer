import React, { useEffect, useState } from "react";
// .. COMPONENTS .. //
import Header from "./components/Header/Header";
import ButtonsBar from "./components/ButtonsBar/ButtonsBar";
import ArrayBar from "./components/ArrayBar/ArrayBar";
import RangeSlider from "./components/RangeSliders/RangeSlider";
// .. HELPER FUNCTIONS .. //
import { randomIntFromInterval } from "./HelperFunctions";
// .. ALGORITHMS .. //
import BubbleSort from "./sorting_algorithms/BubbleSort/BubbleSort";
import SelectionSort from "./sorting_algorithms/SelectionSort/SelectionSort";
import InsertionSort from "./sorting_algorithms/InsertionSort/InsertionSort";
// .. STYLE .. //
// import "./SortingVisualizer.css";
// .. SOUNDS .. //

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [animationSpeed, setAnimationSpeed] = useState<number>(50);
  const [numberOfArrayBars, setNumberOfArrayBars] = useState<number>(10);

  // ## This function generates the array before the component is rendered. ## //
  useEffect(() => {
    generateNewArray();
  }, []);

  // ## This function generates new random array of size "numberOfArrayBars". ## //
  const generateNewArray = () => {
    const newArray = Array.from({ length: numberOfArrayBars }, () =>
      randomIntFromInterval(5, 70)
    );

    setArray(newArray);
  };

  // ******************************************************************************* //

  // ## Handles if the "Array Size" slider is changed. ## //
  const onChangeArrayBarRangeSlider = (
    _: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    if (typeof value === "number") {
      setNumberOfArrayBars(value);
      generateNewArray();
    }
  };

  // ## Handles if the "Animation Speed" slider is changed. ## //
  const onChangeAnimationSpeedRangeSlider = (
    _: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    if (typeof value === "number") {
      setAnimationSpeed(value);
    }
  };

  // ******************************************************************************* //

  // ## Calls the BubbleSort component/function. ## //
  const bubbleSort = () => {
    BubbleSort(array, animationSpeed);
  };

  // ## Calls the SelectionSort component/function. ## //
  const selectionSort = () => {
    SelectionSort(array, animationSpeed);
  };

  // ## Calls the InsertionSort component/function. ## //
  const insertionSort = () => {
    InsertionSort(array, animationSpeed);
  };

  // ******************************************************************************* //

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* --------------------- HEADER : 8% Height --------------------- */}
      <Header />

      {/* --------------------- BUTTONS : 10% Height --------------------- */}
      <ButtonsBar
        generateNewArray={generateNewArray}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
      />

      {/* --------------------- BARS : 74% Height --------------------- */}
      <ArrayBar array={array} />

      {/* --------------------- SLIDERS : 8% Height --------------------- */}
      <RangeSlider
        numberOfArrayBars={numberOfArrayBars}
        animationSpeed={animationSpeed}
        onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
      />
    </div>
  );
};

export default SortingVisualizer;
