'use strict';

const isPlainObject = require('@gyumeijie/is-pojo');
const getTypeOf = require('@gyumeijie/get-type-of');

// Use `getTypeOf` instead of `typeof` in case of `null`
const isWindow = (obj) => getTypeOf(obj) === 'object' && obj === obj.window;

const isArrayLike = (obj, similarity = 0) => {
  const type = getTypeOf(obj);
  const length = type !== 'null' && type !== 'undefined' && obj.length;

  // Truly Array object
  if (type === 'array') return true;

  // Detect obvious negtives (obj should have a valid `length` property)
  if (typeof length !== 'number' || length < 0) return false;

  // The function or the window object also has the `length` property
  if (type === 'function' || isWindow(obj)) return false;

  if (similarity > 0) {
    const keys = [];
    let result = true;

    for (const key in obj) keys.push(key);
    for (let i = 0; i < obj.length; i++) {
      if (!keys.includes(`${i}`)) result = false;
    }

    return similarity === 1 ? result : result && keys.length === obj.length + 1;
  }

  // Plain object with valid `length` property
  return isPlainObject(obj);
};

module.exports = isArrayLike;
