import { Product } from "./products";

interface InventoryItem {
  product: Product[];
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: [{ name: "motor", price: 10.0 }], quantity: 10 },
  { product: [{ name: "sensor", price: 12.5 }], quantity: 4 },
  { product: [{ name: "LED", price: 1.0 }], quantity: 20 },
];

export function calcInventoryValue(array: InventoryItem[]): number | any {
  let totalValue: number = 0;

  for (let item of array) {
    // totalValue += item.product[0].price * item.quantity;
    totalValue += item.quantity * item.product[0].price;
  }
  return totalValue;
}

console.log(calcInventoryValue(inventory));
