// Retrieve elements by class name
const right_color_bar = document.getElementsByClassName(
  "right-color-bar"
) as HTMLCollectionOf<HTMLElement>;
const left_color_bar = document.getElementsByClassName(
  "left-color-bar"
) as HTMLCollectionOf<HTMLElement>;
const front_color_bar = document.getElementsByClassName(
  "front-color-bar"
) as HTMLCollectionOf<HTMLElement>;
const back_color_bar = document.getElementsByClassName(
  "back-color-bar"
) as HTMLCollectionOf<HTMLElement>;
const bottom_color_bar = document.getElementsByClassName(
  "bottom"
) as HTMLCollectionOf<HTMLElement>;

// ## Helps to easily fetch all the sides of the element ## //
export function getBarStyle(index: number): CSSStyleDeclaration[] {
  const barStyle: CSSStyleDeclaration[] = [
    right_color_bar[index].style,
    left_color_bar[index].style,
    back_color_bar[index].style,
    front_color_bar[index].style,
    bottom_color_bar[index].style,
  ];
  return barStyle;
}

// ## Changes color of all the sides of color-bar ## //
export function changeBackgroundColor(index: number, color: string): void {
  const styleOfElement = getBarStyle(index);
  for (let j = 0; j < styleOfElement.length; j++) {
    styleOfElement[j].backgroundColor = color;
  }
}

// ## Changes box-shadow of all the sides of color-bar ## //
export function changeBoxShadow(index: number, shadow: string): void {
  const styleOfElement = getBarStyle(index);
  for (let j = 0; j < styleOfElement.length; j++) {
    styleOfElement[j].boxShadow = shadow;
  }
}

// ## Swaps 2 array-bars ( Swapping heights ) ## //
export function swapBars(index1: number, index2: number): void {
  const styleOfElement1 = getBarStyle(index1);
  const styleOfElement2 = getBarStyle(index2);
  for (let j = 0; j < 4; j++) {
    const tempHeight = styleOfElement1[j].height;
    styleOfElement1[j].height = styleOfElement2[j].height;
    styleOfElement2[j].height = tempHeight;

    const h1 = parseInt(styleOfElement1[j].height, 10);
    const h2 = parseInt(styleOfElement2[j].height, 10);

    styleOfElement1[j].transform = `translateY(${70 - h1}vh)`;
    styleOfElement2[j].transform = `translateY(${70 - h2}vh)`;
  }
}

// ## Reset the style of all the color-bars ## //
export function resetBarStyleDefault(
  array: number[],
  animationSpeed: number
): void {
  setTimeout(() => {
    for (let j = 0; j < array.length; j++) {
      changeBackgroundColor(j, "rgba(225, 0, 120, 0.5)");
      changeBoxShadow(j, "5px 5px 50px 5px rgba(225, 0, 120, 0.2)");
    }
  }, animationSpeed);
}

// ## Returns any random value from the interval [min, max] ## //
export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ## Enables all the buttons ## //
export function enableButtons(): void {
  (document.getElementById("reset") as HTMLButtonElement).disabled = false;
  (document.getElementById("bubbleSortButton") as HTMLButtonElement).disabled =
    false;
  (
    document.getElementById("selectionSortButton") as HTMLButtonElement
  ).disabled = false;
  (
    document.getElementById("insertionSortButton") as HTMLButtonElement
  ).disabled = false;
  const rangeSlider = document.getElementById("range-slider")!;
  rangeSlider.style.opacity = "1";
  rangeSlider.style.visibility = "visible";
}

// ## Disables all the buttons ## //
export function disableButtons(): void {
  (document.getElementById("reset") as HTMLButtonElement).disabled = true;
  (document.getElementById("bubbleSortButton") as HTMLButtonElement).disabled =
    true;
  (
    document.getElementById("selectionSortButton") as HTMLButtonElement
  ).disabled = true;
  (
    document.getElementById("insertionSortButton") as HTMLButtonElement
  ).disabled = true;
  const rangeSlider = document.getElementById("range-slider")!;
  rangeSlider.style.opacity = "0";
  rangeSlider.style.visibility = "hidden";
}
