function palindrom(n) {
  let revNum = 0;
  let dup = n;

  while (n > 0) {
    let ld = n % 10;
    revNum = revNum * 10 + ld;
    n = Math.floor(n / 10);
  }
  return dup === revNum;
}

console.log(palindrom(121));
