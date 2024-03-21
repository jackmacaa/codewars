export const fakeBin = (x: string): string => {
  let str = "";

  for (const letter of x) {
    if (Number(letter) < 5) {
      str += "0";
    } else {
      str += "1";
    }
  }

  return str;
};
console.log(fakeBin("45385593107843568")); // '01011110001100111'

export function findSmallestInt(args: number[]): number {
  let lowest = args[0];

  for (const arg of args) {
    if (Number(arg) < lowest) {
      lowest = Number(arg);
    }
  }

  return lowest;
}
console.log(findSmallestInt([78, 56, 232, 12, 8]));

export function countPositivesSumNegatives(input: number[]) {
  if (!input || input.length === 0) {
    return [];
  }

  let positive = 0;
  let negative = 0;

  for (const num of input) {
    if (num > 0) {
      positive++;
    } else {
      negative += num;
    }
  }

  return [positive, negative];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

export function hero(bullets: number, dragons: number): boolean {
  while (bullets > 0) {
    if (bullets <= 1) {
      return false;
    }

    bullets += -2;
    dragons--;

    if (dragons <= 0) {
      return true;
    }
  }
  return false;
}
console.log(hero(10, 5)); // true

export function abbrevName(name: string): string {
  const names = name.split(" ");

  return `${names[0][0].toUpperCase()}.${names[1][0].toUpperCase()}`;
}
console.log(abbrevName("Sam harris")); // S.H

export const centuryFromYear = (year: number): number => {
  return Math.ceil(year / 100);
};
console.log(centuryFromYear(1700)); // 18

export const digitize = (n: number): number[] => {
  return n
    .toString() // [...n.toString()]
    .split("") //
    .map((item) => Number(item)) //  .map(Number)
    .reverse();
};
console.log(digitize(35231)); // [1,3,2,5,3])

export function evenOrOdd(n: number): string {
  if (n % 2 === 1 || n % 2 === -1) {
    // n %2=== 0 ? 'Even' :'Odd';
    return "Odd";
  }
  return "Even";
}
console.log(evenOrOdd(-7)); // Odd

export function isIsogram(str: string): boolean {
  const lowerStr = str.toLocaleLowerCase();
  console.log(lowerStr);
  for (let i = 0; i < lowerStr.length; i++) {
    let regex = new RegExp(`${lowerStr[i]}`, "g");
    const found = lowerStr.match(regex);

    if (found && found?.length >= 2) {
      return false;
    }
  }
  return true; // return new Set(str.split('')).size === str.length;
}
console.log(isIsogram("dermatoglyphics")); //  false); // "same chars may not be same case"

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  const total = classPoints.reduce((prev, curr) => curr + prev, yourPoints);
  const avg = total / (classPoints.length + 1);

  return avg <= yourPoints ? true : false;
}
console.log(betterThanAverage([2, 3], 5)); // true

export function sumPairsOriginal(
  ints: number[],
  s: number
): [number, number] | void {
  let pairs: Array<[number, number, number]> = [];

  for (let i = 0; i < ints.length; i < i++) {
    for (let j = i + 1; j < ints.length; j++) {
      let lowestIndex = 100;
      if (ints[i] + ints[j] === s) {
        pairs.push([ints[i], ints[j], j]);
      }
    }
  }

  if (pairs.length === 0) {
    return undefined;
  }

  let small = 1000;
  let index = 0;

  pairs.forEach((pair, i) => {
    if (pair[2] < small) {
      small = pair[2];
      index = i;
    }
  });

  return [pairs[index][0], pairs[index][1]];
}
export function sumPairsRefactor(
  ints: number[],
  s: number
): [number, number] | void {
  let pairs: Array<[number, number]> = [];
  let lowestIndex = 100;

  for (let i = 0; i < ints.length; i < i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        if (j < lowestIndex) {
          pairs.push([ints[i], ints[j]]);
          lowestIndex = j;
        }
      }
    }
  }

  if (pairs.length === 0) {
    return undefined;
  }

  return pairs[pairs.length - 1];
}
console.log(sumPairsRefactor([1, 4, 8, 7, 3, 15], 8)); // [1, 7],)
console.log(sumPairsRefactor([10, 5, 2, 3, 7, 5], 10)); // [3, 7],)
console.log(sumPairsRefactor([1, 2, 3, 4, 1, 0], 2)); // [1, 1],)

export class Kata {
  static highAndLow(numbers: string): string {
    const splitNum = numbers.split(" ");

    const numArr = splitNum.map((num) => Number(num)); // splitNum.map(Number)

    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
  }
}
console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"

export function getMiddle(s: string) {
  const length = s.length;
  const middle = length / 2;

  if (length % 2 === 0) {
    return `${s[middle - 1]}${s[middle]}`;
  }

  return s[Math.ceil(middle) - 1];
}
console.log(getMiddle("test")); //  "es"
console.log(getMiddle("testing")); //  "t"

export function basicOp(
  operation: string,
  value1: number,
  value2: number
): number {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      throw new Error("Incorrect operator sent");
  }
}
// const ops = {
//   "+": (l: number, r: number) => l + r,
//   "-": (l: number, r: number) => l - r,
//   "*": (l: number, r: number) => l * r,
//   "/": (l: number, r: number) => l / r,
// };
// export const basicOp = (
//   operation: keyof typeof ops,
//   value1: number,
//   value2: number
// ): number => ops[operation](value1, value2);

// export function basicOp(
//   operation: string,
//   value1: number,
//   value2: number
// ): number {
//   return eval(value1.toString() + operation + value2.toString());
// }
console.log(basicOp("+", 4, 7)); // 11)
console.log(basicOp("-", 15, 18)); // -3)
console.log(basicOp("*", 5, 5)); // 25)
console.log(basicOp("/", 49, 7)); //, 7)

export function past(h: number, m: number, s: number): number {
  const minutes = 60;
  const seconds = 60;
  const milliSeconds = 1000;

  const hourInMs = h * minutes * minutes * milliSeconds;
  const minInMs = m * seconds * milliSeconds;
  const secInMs = s * milliSeconds;

  return hourInMs + minInMs + secInMs;
}
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 1, 1)); // 3661000
