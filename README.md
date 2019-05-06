# isPOJO [![](https://travis-ci.com/Gyumeijie/isPOJO.svg?branch=master)](https://travis-ci.com/Gyumeijie/isPOJO)

> check whether an object is a Plain Javascript Object

## Install

```bash
$ npm install @gyumeijie/is-pojo
```

## Usage

```js
const isPlainObject = require('@gyumeijie/is-pojo');

isPlainObject({})  //true
isPlainObject(Object.create(null))  //true
isPlainObject(Object.create(Object.prototype))  //true
isPlainObject({ constructor: function Foo() {} })  //true
isPlainObject(Object.create({}))  //false
isPlainObject('string')  //false
isPlainObject(undefined)  //false
isPlainObject(1)  //false
isPlainObject(() => {})  //false
isPlainObject([])  //false
isPlainObject([1, 2, 3, 4])  //false
isPlainObject(new Date())  //false
isPlainObject(/regexp/)  //false
```

## License

MIT © [Gyumeijie](https://github.com/Gyumeijie)
