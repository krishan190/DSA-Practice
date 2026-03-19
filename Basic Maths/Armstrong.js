function Armstrong(n) {
  const k = n.toString().length;
  let sum = 0;
  let dup = n;

  while (dup > 0) {
    let ld = dup % 10;
    sum = sum + Math.pow(ld, k);
    dup = Math.floor(dup / 10);
  }
  return sum === n;
}

console.log(Armstrong(153));
