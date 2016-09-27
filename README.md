rfc-encode-uri
==============

This library polyfills [encodeURI]/[encodeURIComponent] to make it
[RFC3986]-compliant.

Install
-------
```shell
npm install rfc-encode-uri
```

Usage
-----
Just require this package
```javascript
require('rfc-encode-uri');
```
then it will replace [encodeURI]/[encodeURIComponent] to a RFC3986-Compliant
ones.



[encodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
[encodeURI]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
[RFC3986]: https://tools.ietf.org/html/rfc3986#page-12
