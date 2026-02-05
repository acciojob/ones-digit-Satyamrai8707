function onesDigit(n) {
  n = String(n);          
  return Number(n[n.length - 1]);
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
