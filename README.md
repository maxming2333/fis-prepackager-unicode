# fis-prepackager-unicode

a prepackager plugin for fis
在 prepackager 阶段，把文件进行unicode编码

## usage

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
