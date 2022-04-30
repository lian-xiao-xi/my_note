# js 字符串相关内容总结

## 获取字符串长度

```javascript
const str = '\uD83D\uDE80'; // "🚀"
str.length // 2
[...'\uD83D\uDE80'].length // 1
```

上面代码的第一种写法，JavaScript 会将四个字节的 Unicode 字符，识别为 2 个字符，而采用扩展运算符就能够正确识别四个字节的 Unicode 字符。
因此，凡是涉及到操作四个字节的 Unicode 字符的地方最好都用扩展运算符改写。

```javascript
let str = "x\uD83D\uDE80y"; // "x🚀y"
str
  .split("")
  .reverse()
  .join(""); // "y��x" 出现乱码
[...str].reverse().join(""); // "y🚀x"
```
