export const fakeBin = (x:string): string => {
  let str = ''

  for(const letter of x){
      if(Number(letter) < 5){
          str += '0'
      } else {
          str += '1'
      }
  }

  return str
};
console.log(fakeBin('45385593107843568'),) // '01011110001100111'

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

  return `${names[0][0].toUpperCase()}.${names[1][0].toUpperCase()}`
}
console.log(abbrevName("Sam harris")) // S.H

export const centuryFromYear = (year: number): number => {
  return Math.ceil(year  / 100)
};
console.log(centuryFromYear(1700)) // 18

export const digitize = (n: number): number[] => {
  return n
    .toString() // [...n.toString()]
    .split("") // 
    .map((item) => Number(item))  //  .map(Number) 
    .reverse();
};
console.log(digitize(35231)); // [1,3,2,5,3])

export function evenOrOdd(n: number): string {
  if (n % 2 === 1 || n % 2 === -1) { // n %2=== 0 ? 'Even' :'Odd';
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
  return true;  // return new Set(str.split('')).size === str.length;
}
console.log(isIsogram("dermatoglyphics"))//  false); // "same chars may not be same case"
