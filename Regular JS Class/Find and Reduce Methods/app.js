// find() reduce()

const arrItems = [1, 2, 3, 4, 5];

let findItem = arrItems.find((item) => item == 4);
let calculateItems = arrItems.reduce(
  (prevItem, currentItem) => prevItem + currentItem
);

console.log(calculateItems);
