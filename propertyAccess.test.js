const _ = require('./propertyAccess');

let testObject = {};

beforeEach(() => {
  testObject = {
    a: 'string',
    b: 1,
    c: {
      ac: 'string',
      bc: 2,
      d: {
        ad: 'string',
        bd: 3
      }
    }
  };
});

describe('getter', () => {
  test('can get child property', () => {
    let aProperty = _.getter(testObject, 'a');
    expect(aProperty).toBe('string');
    expect(typeof aProperty).toBe('string');
  });
  test('can get second level property', () => {
    let c_bcProperty = _.getter(testObject, 'c.bc');
    expect(c_bcProperty).toBe(2);
    expect(typeof c_bcProperty).toBe('number');
  });
  test('can get third level property', () => {
    let bd = _.getter(testObject, 'c.d.bd');
    expect(bd).toBe(3);
    expect(typeof bd).toBe('number');
  });
});

describe('setter', () => {
  test('can set first level property', () => {
    _.setter(testObject, 'newProperty', 'newValue');
    expect(typeof testObject.newProperty).not.toBe('undefined');
    expect(testObject.newProperty).toBe('newValue');
  });
  test('can set second level property', () => {
    _.setter(testObject, 'c.newProperty', 'newValue');
    expect(typeof testObject.c.newProperty).not.toBe('undefined');
    expect(testObject.c.newProperty).toBe('newValue');
  });
  test('can set third level property', () => {
    _.setter(testObject, 'c.d.newProperty', 'newValue');
    expect(typeof testObject.c.d.newProperty).not.toBe('undefined');
    expect(testObject.c.d.newProperty).toBe('newValue');
  });
  test('can add a new Object', () => {
    _.setter(testObject, 'newObject', { newProperty: 'newValueFromObject' });
    expect(typeof testObject.newObject).not.toBe('undefined');
    expect(typeof testObject.newObject.newProperty).not.toBe('undefined');
    expect(testObject.newObject.newProperty).toBe('newValueFromObject');
  });
});
