import isArrayLike from './';

describe('', () => {
  test('test truly array', () => {
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike([1, 2, 3, 4])).toBe(true);
  });

  test('test non-array object', () => {
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike({ key: 'value' })).toBe(false);
    expect(isArrayLike({ key: 'value' }, 1)).toBe(false);
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike('string')).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(new Date())).toBe(false);

    let fn = (arg1, arg2) => {};
    expect(isArrayLike(fn)).toBe(false);

    let re = /regexp/;
    re.length = 1;
    re[0] = 'zero';
    expect(isArrayLike(re)).toBe(false);

    let obj = {
      0: 'zero',
      2: 'two',
      3: 'three',
      length: 3,
    };
    expect(isArrayLike(obj)).toBe(true);
    expect(isArrayLike(obj, 1)).toBe(false);

    obj = {
      0: 'zero',
      1: 'one',
      2: 'two',
      length: 3,
    };
    expect(isArrayLike(obj)).toBe(true);
    expect(isArrayLike(obj, 1)).toBe(true);

    obj = {
      zero: 0,
      one: 1,
      two: 2,
      length: 3,
    };
    expect(isArrayLike(obj)).toBe(true);
    expect(isArrayLike(obj, 1)).toBe(false);

    obj = {
      0: 'zero',
      1: 'one',
      2: 'two',
      length: -3,
    };
    expect(isArrayLike(obj)).toBe(false);
    expect(isArrayLike(obj, 1)).toBe(false);

    obj = {
      0: 'zero',
      1: 'one',
      2: 'two',
      name: 'obj',
      length: 3,
    };
    expect(isArrayLike(obj)).toBe(true);
    expect(isArrayLike(obj, 1)).toBe(true);
    expect(isArrayLike(obj, 2)).toBe(false);
  });
});
