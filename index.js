/*
 * In vanilla JavaScript a POJO (Plain Old JavaScript Object) is the simplest
 * kind of object you could possibly have: a set of key-value pairs, created
 * by the `{} object literal notation` or constructed with `new Object()`
 * reference the jquery.isPlainObject
 */

'use strict';

const isPlainObject = (obj) => {
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const toString = Object.prototype.toString;

  // Detect obvious negatives use toString to catch host objects
  if (obj === null || toString.call(obj) !== '[object Object]') {
    return false;
  }

  const proto = Object.getPrototypeOf(obj);
  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain iff constructed by `Object` function
  const ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (
    typeof ctor === 'function' &&
    hasOwnProperty.toString.call(ctor) === hasOwnProperty.toString.call(Object)
  );
};

module.exports = isPlainObject;
