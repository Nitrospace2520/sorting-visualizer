import React from "react";
import "./ButtonsBar.css";

// Define the props interface
interface ButtonsBarProps {
  generateNewArray: () => void;
  bubbleSort: () => void;
  selectionSort: () => void;
  insertionSort: () => void;
}

const ButtonsBar: React.FC<ButtonsBarProps> = ({
  generateNewArray,
  bubbleSort,
  selectionSort,
  insertionSort,
}) => {
  return (
    <div className="buttons-bar flex justify-center gap-2">
      <button onClick={generateNewArray} id="reset" className=" p-3 ">
        Generate New Array
      </button>
      <button
        id="bubbleSortButton"
        onClick={bubbleSort}
        className="p-3 text-white bg-blue-500 hover:bg-blue-700 "
      >
        Bubble Sort
      </button>
      <button
        id="selectionSortButton"
        onClick={selectionSort}
        className="p-3 text-white bg-blue-500 hover:bg-blue-700 md:text-base"
      >
        Selection Sort
      </button>
      <button
        id="insertionSortButton"
        onClick={insertionSort}
        className="p-3 text-white bg-blue-500 hover:bg-blue-700"
      >
        Insertion Sort
      </button>
      {/*  <button
        id="mergeSortButton"
        onClick={insertionSort}
        className="p-3 text-white bg-blue-500 hover:bg-blue-700"
      >
        Merge Sort
      </button> */}
    </div>
  );
};

export default ButtonsBar;
