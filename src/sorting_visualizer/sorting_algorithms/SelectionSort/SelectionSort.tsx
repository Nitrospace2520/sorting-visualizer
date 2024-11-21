import getSelectionSortAnimations from "./getSelectionSortAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
} from "../../HelperFunctions";

// Define the SelectionSort function with appropriate types
const SelectionSort = (array: number[], animationSpeed: number): void => {
  // Disabling the buttons so that the animation cannot be interrupted.
  disableButtons();

  // Getting the animations which have been generated in the "getSelectionSortAnimations" function.
  const animations = getSelectionSortAnimations(array);

  for (let i = 0; i < animations.length; i += 6) {
    const comparingElement1: number =
      typeof animations[i] === "number" ? (animations[i] as number) : 0;
    const comparingElement2: number =
      typeof animations[i + 1] === "number" ? (animations[i + 1] as number) : 0;
    const minIndexElement: number =
      typeof animations[i + 2] === "number" ? (animations[i + 2] as number) : 0;
    const doSwap: boolean =
      typeof animations[i + 3] === "boolean"
        ? (animations[i + 3] as boolean)
        : false;
    const isFinalElement: boolean =
      typeof animations[i + 4] === "boolean"
        ? (animations[i + 4] as boolean)
        : false;
    const finalElement: number =
      typeof animations[i + 5] === "number" ? (animations[i + 5] as number) : 0;

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise1 = new Promise<void>((resolve) => {
      setTimeout(() => {
        // Changing the color-bar of current elements.
        changeBackgroundColor(minIndexElement, "rgba(0,0,255, 0.9)");
        changeBackgroundColor(comparingElement1, "rgba(0,0,0, 0.9)");
        changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");

        if (doSwap) {
          // Changing the color-bar of elements which have to be swapped.
          changeBackgroundColor(minIndexElement, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
          // Actually swapping the elements (heights).
          swapBars(comparingElement1, minIndexElement);
        }
      }, i * animationSpeed);

      // Resolving the promise after the setTimeout ends.
      resolve();
    });

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise2 = new Promise<void>((resolve) => {
      setTimeout(() => {
        if (isFinalElement) {
          // Changing the color-bar of finalElement index which has taken its final sorted position.
          changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(
            finalElement,
            "5px 5px 50px 5px rgba(0, 164, 86, 0.2)"
          );
        } else {
          // Changing the color-bar of elements which have not taken their final sorted position yet.
          changeBackgroundColor(comparingElement2, "rgba(225, 0, 120, 0.6)");
          changeBackgroundColor(minIndexElement, "rgba(225, 0, 120, 0.6)");
        }

        // From "getSelectionSortAnimations" function, we know that the array is sorted when finalElement is (array.length - 1).
        // Resolving the promise when the finalElement index is (array.length - 1).
        if (finalElement === array.length - 1) resolve();
      }, (i + 6) * animationSpeed);
    });

    Promise.all([promise1, promise2]).then(() => {
      // Enabling the buttons when both the promises have been resolved.
      enableButtons();
    });
  }

  // Resetting the color-bar style to default after the animations end.
  resetBarStyleDefault(array, (animations.length + 6) * animationSpeed);
};

export default SelectionSort;
