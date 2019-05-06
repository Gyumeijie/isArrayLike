# isArrayLike [![](https://travis-ci.com/Gyumeijie/isArrayLike.svg?branch=master)](https://travis-ci.com/Gyumeijie/isArrayLike)

> check whether an object is a Plain Javascript Object

## Install

```bash
$ npm install @gyumeijie/is-array-like
```

## API

```typescript
isArrayLike(obj: any, strict?: boolean): boolean
```

obj:

> the object to test

strict:

> if set to ***true***, `isArrayLike` return true iff the obj is a strict array-like object

### strict array-like object
> a strict array-like object can be safely converted to array using `Array.from` method

```javascript
let obj = {
  0: 'zero',
  2: 'two',
  3: 'three',
  length: 3,
};
Array.from(obj);
// ["zero", undefined, "two"]  => missing one value, not safe

obj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3,
};
Array.from(obj);
//  ["zero", "one", "two"]   => containing all values, safely
```

## Usage

```js
const isArrayLike = require('@gyumeijie/is-array-like');

// test truly array
isArrayLike([]); // true
isArrayLike([1, 2, 3, 4]); // true

// test non-array object
isArrayLike({}); // false
isArrayLike(1); // false
isArrayLike('string'); // false
isArrayLike(undefined); // false
isArrayLike(null); // false
isArrayLike(new Date()); // false

let fn = (arg1, arg2) => {};
isArrayLike(fn); // false

let re = /regexp/;
re.length = 1;
isArrayLike(re); // false

let obj = {
  0: 'zero',
  2: 'two',
  3: 'three',
  length: 3,
};
isArrayLike(obj); // true
isArrayLike(obj, true); // false

obj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3,
};
isArrayLike(obj); // true
isArrayLike(obj, true); // true
```

## License

MIT © [Gyumeijie](https://github.com/Gyumeijie)
