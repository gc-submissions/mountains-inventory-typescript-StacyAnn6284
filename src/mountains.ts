export interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(array: Mountain[]): string {
  let tallestMountain: number = 0;
  let tallestName: string = "";
  for (const mountain of array) {
    if (mountain.height > tallestMountain) {
      tallestMountain = mountain.height;
      tallestName = mountain.name;
    }
  }
  return tallestName;
}

let tallestMount: string = findNameOfTallestMountain(mountains);
console.log(tallestMount);
