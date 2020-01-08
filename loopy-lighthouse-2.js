// function loopyLighthouse(range, multiples, words) {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(i);
//     }
//   }
// }

let getChar = (num, multiples, words) => {
  if (num % multiples[0] === 0 && num % multiples[1] === 0) {
    return words[0] + words[1];
  }
  if (num % multiples[0] === 0) {
    return words[0];
  }
  if (num % multiples[1] === 0) {
    return words[1];
  }
  return num;
};

let loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    console.log(getChar(i, multiples, words));
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
