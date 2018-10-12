function swapArray(arr, x, y) {
  const swapArr = arr.concat()
  // ES5 写法
  // swapArr.splice(x, 1, swapArr.splice(y, 1, swapArr[x])[0])
  // ES6 写法
  swapArr.splice(x, 1, ...swapArr.splice(y, 1, swapArr[x]))
  return swapArr;
}