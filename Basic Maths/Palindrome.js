function palindrom(n) {
  let revNum = 0;
  let dup = n;

  while (dup > 0) {
    let ld = dup % 10;
    revNum = revNum * 10 + ld;
    dup = Math.floor(dup / 10);
  }
  return n === revNum;
}

console.log(palindrom(123));
