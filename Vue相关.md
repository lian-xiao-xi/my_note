### 元素 style 内联绑定背景图
`:style="{backgroundImage:`url(\${titleImg})`}"`

### 📌 在 vue 中使用 img 标签的 src 和 srcset 属性时的注意事项
注意事项都写在了下面代码的注释中
```html
<img
  // 使用 src="./img/brand@2x.png" 将无法正确引入图片资源, 开发环境下浏览器会报错: "GET http://localhost:8080/img/brand@2x.png 404 (Not Found)", 所以使用下面这种方式
  :src="$options._myOpt.imgSrc._2x"
  // 由于使用 require 引入的资源会经过 webpack 处理, 所以这里引入的图片 url 变成了 base64 编码的图片路径, 这样的话, 使用 srcset 属性展示的图片就一直是最后一个 url 的图片
  v-bind:srcset="`${$options._myOpt.imgSrc._2x} 2x, ${$options._myOpt.imgSrc._3x} 3x`"
/>
```
```javascript
export default {
  _myOpt: {
    imgSrc: {
      // 使用 require 引入资源时, 需要使用以 './' 开头的相对路径,否则无法正确引入资源
      _2x: require('./img/brand@2x.png'),
      _3x: require('./img/bulletin@3x.png'),
    }
  },
}
```
