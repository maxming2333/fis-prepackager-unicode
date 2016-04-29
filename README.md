# fis-prepackager-unicode

a prepackager plugin for fis
在 prepackager 阶段，把文件进行unicode编码

## usage


> Q: 为何在 prepackager 阶段执行unicode编码？
> A: 因为 uglify-js 会让 Unicode 变回中文，所以要在打包阶段进行 Unicode


**install**

```bash
npm install fis-prepackager-unicode
```

**use**

`请在需要 unicode编码的文件上加上 extras.useUnicode 标记`

```javascript
  // css 类型文件需要加 isCssLike 标记
  fis.match('**.less', {
    isCssLike : true,
    extras : {
      useUnicode : true
    }
  });

  fis.match('**.js', {
    extras : {
      useUnicode : true
    }
  });
```
