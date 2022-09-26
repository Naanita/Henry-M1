"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let decim = 0;
  let chain = [];
  for (let i = 0; i < num.length; i++) {
    chain.unshift(num[i]);
  }

  for (let j = 0; j < chain.length; j++) {
    decim += Math.pow(2, j) * chain[j];
  }

  return decim;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = [];
  let textbin = "";

  for (let i = 0; i < 100; i++) {
    if (num < 1) {
      break;
    }
    bin.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  for (let i = 0; i < bin.length; i++) {
    textbin += bin[i];
  }
  return textbin;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
