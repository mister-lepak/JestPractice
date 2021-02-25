// const fetch = require("node-fetch");

const capitalize = (string) => {
  const firstChar = string.slice(0, 1).toUpperCase();
  const restChar = string.slice(1);
  return firstChar.concat(restChar);
};

const reverseString = (string) => {
  const result = [];
  const chunkedString = string.split("");
  chunkedString.map((e, i) => (result[chunkedString.length - i - 1] = e));
  return result.join("");
};

const calculator = {
  add: (val1, val2) => {
    return val1 + val2;
  },
  subtract: (val1, val2) => {
    return val1 - val2;
  },
  multiply: (val1, val2) => {
    return val1 * val2;
  },
  divide: (val1, val2) => {
    return val1 / val2;
  },
};

const caesarCipher = (string, shift) => {
  const alphabetMap = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const arrayedString = string.split("");

  const result = [];

  arrayedString.map((e) => {
    const originalAlpaIndex = alphabetMap.indexOf(e);
    if (e === " ") {
      result.push(" ");
    } else {
      const shiftedAlphaIndex = (originalAlpaIndex + shift) % 26;
      result.push(alphabetMap[shiftedAlphaIndex]);
    }
  });
  return result.join("");
};

const analyze = (array) => {
  return {
    average:
      array.reduce((total, num) => {
        return total + Math.round(num);
      }, 0) / array.length,
    min: array.reduce((min, num) => {
      return min > num ? (min = num) : min;
    }, array[0]),
    max: array.reduce((max, num) => {
      return max < num ? (max = num) : max;
    }, array[0]),
    length: array.length,
  };
};

const fetchData = (url) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.id);
      return data.id;
    });
};

fetchData("https://www.balldontlie.io/api/v1/teams/28");

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyze,
  fetchData,
};
