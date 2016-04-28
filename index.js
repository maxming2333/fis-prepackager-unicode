'use strict';

module.exports = function (ret, conf, settings, opt) {

  var enUnicode = function (content, file) {
    if (!file.isCssLike) {
      return content;
    }
    var exp = new RegExp("(/\\\*([^*]|[\\\r\\\n]|(\\\*+([^*/]|[\\\r\\\n])))*\\\*+/)|(//.*)|([^(//.*)]*)", "g");
    content = content.replace(exp, function (_text) {
      // 非注释才 Unicode
      if (!/^\/\*|\/\//ig.test(_text)) {
        return _text.replace(/[\u00FF-\uFFFF]/ig, function ($0) {
          return (file.isCssLike ? '\\' : '\\u') + $0.charCodeAt().toString(16);
        });
      } else {
        return _text;
      }
    });
    return content;
  };

  for (var path in ret.src) {
    var file = ret.src[path];
    if (file.extras.useUnicode) {
      file.setContent(enUnicode(file.getContent(), file));
    }
  }
};