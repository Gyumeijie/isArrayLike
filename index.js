'use strict';
const isPlainObject = require('@gyumeijie/is-pojo');
const getTypeOf = require('@gyumeijie/get-type-of');

// Use `getTypeOf` instead of `typeof` in case of `null`
const isWindow = (obj) => getTypeOf(obj) === 'object' && obj === obj.window;

const isArrayLike = (obj, strict = false) => {
  const type = getTypeOf(obj);
  const length = type === 'object' && 'length' in obj && obj.length;

  // The function or the window object also has the `length` property
  if (type === 'function' || isWindow(obj)) return false;

  // Truly Array object
  if (type === 'array') return true;

  // Plain object with valid `length` property and index keys: [0, ..., length-1]
  if (strict) {
    for (let i = 0; i < obj.length; i++) {
      if (!(i in obj)) return false;
    }
    return true;
  }

  // Plain object with valid `length` property
  return isPlainObject(obj) && typeof length === 'number' && length >= 0;
};

module.exports = isArrayLike;
