# isArrayLike [![](https://travis-ci.com/Gyumeijie/isArrayLike.svg?branch=master)](https://travis-ci.com/Gyumeijie/isArrayLike)

> check whether an object is an array-like object

## Install

```bash
$ npm install @gyumeijie/is-array-like
```

## API

```typescript
isArrayLike(obj: any, similarity?: number): boolean
```

obj:

```
the object to be tested
```

similarity:

```
measure how much the obj is similar to the array object, there are three levels: 0, 1, 2:

0: return true iff obj has a valid `length` property, this is the default setting

1: return true iff obj has a valid `length` property and properties: [0, ..., length-1]

2: return true iff obj has and only has a valid `length` property and properties: [0, ..., length-1],
obj as such also called `strict array-like object`
```

### strict array-like object

> a strict array-like object can be safely converted to array using `Array.from` method

```javascript
let obj;

obj = {
  0: 'zero',
  2: 'two',
  3: 'three',
  length: 3,
};
Array.from(obj);
// ["zero", undefined, "two"]  => missing one value, not safe

obj = {
  0: 'zero',
  2: 'two',
  3: 'three',
  length: -3,
};
Array.from(obj);
// []  => missing all values, not safe

obj = {
  zero: 0,
  one: 1,
  two: 2,
  length: 3,
};
Array.from(obj);
// [undefined, undefined, undefined] => missing all values, not safe

obj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  name: 'obj',
  length: 3,
};
Array.from(obj);
// ["zero", "one", "two"]  => missing `name` property, not safe

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
re[0] = 'zero';
isArrayLike(re); // false

let obj = {
  0: 'zero',
  2: 'two',
  3: 'three',
  length: 3,
};
isArrayLike(obj); // true
isArrayLike(obj, 1); // false

obj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3,
};
isArrayLike(obj); // true
isArrayLike(obj, 1); // true

obj = {
  zero: 0,
  one: 1,
  two: 2,
  length: 3,
};
isArrayLike(obj); //true
isArrayLike(obj, 1); //false

obj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: -3,
};
isArrayLike(obj); //false
isArrayLike(obj, 1); //false

obj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  name: 'obj',
  length: 3,
};
isArrayLike(obj); //true
isArrayLike(obj, 1); //true
isArrayLike(obj, 2); //false
```

## License

MIT © [Gyumeijie](https://github.com/Gyumeijie)
