export interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "milk", price: 3.5 },
  { name: "eggs", price: 2.5 },
  { name: "bread", price: 2.0 },
];

export function calcAverageProductPrice(array: Product[]): number {
  let average: number = 0;
  let counter: number = 0;
  for (let item of array) {
    average += item.price;
    counter++;
  }
  if (array.length === 0) {
    return 0;
  } else {
    return average / counter;
  }
}

let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);

console.log(calcAverageProductPrice([]));
