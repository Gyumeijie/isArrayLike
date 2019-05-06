import isPlainObject from './';

describe('', () => {
  test('Object created by `Object` constructor or Object literals', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
    expect(isPlainObject(Object.create(Object.prototype))).toBe(true);
    expect(isPlainObject({ constructor: function Foo() {} })).toBe(true);
  });

  test('Object not created by  `Object` constructor or Object literals', () => {
    expect(isPlainObject(Object.create({}))).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2, 3, 4])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(/regexp/)).toBe(false);

    class Custom {
      constructor() {
        this.name = 'custom';
      }
    }
    expect(isPlainObject(new Custom())).toBe(false);

    function Foo() {
      this.name = 'foo';
    }
    expect(isPlainObject(new Foo())).toBe(false);
  });
});
