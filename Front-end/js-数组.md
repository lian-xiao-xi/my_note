# js 数组相关内容总结

## 复制数组

```javascript
const a1 = [1, 2];
// ES5 写法
const a2 = a1.concat();
// ES6 写法一
const a2 = [...a1];
// ES6 写法二
const [...a2] = a1;
```

## 创建指定长度的数组

使用下面的方法来创建包含 undefined 单元（而非‘空单元’）的数组。

```javascript
// 进过实践的检测，目前发现参数 len 不得超过十万
function createArr(len) {
  return Array.apply(null, { length: len });
}
createArr(3); // [undefined, undefined, undefined]

function createArr(len) {
  return Array(len).fill(undefined);
}
```

## 扁平化多维数组

```javascript
function flattenArray(arr) {
  const flattened = [].concat(...arr);
  return flattened.some(item => Array.isArray(item))
    ? flattenArray(flattened)
    : flattened;
}
function flatten(arr) {
  return arr.reduce(function(plane, toBeFlatten) {
    return plane.concat(
      Array.isArray(toBeFlatten) ? flatten(toBeFlatten) : toBeFlatten
    );
  }, []);
}
```
