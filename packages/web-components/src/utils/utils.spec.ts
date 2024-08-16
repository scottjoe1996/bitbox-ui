import { createClassString } from './utils';

describe('createClassString', () => {
  it('returns empty string if given an empty array', () => {
    expect(createClassString([])).toEqual('');
  });

  it('returns one class', () => {
    expect(createClassString(['class1'])).toEqual('class1');
  });

  it('returns multiple classes', () => {
    expect(createClassString(['class1', 'class2', 'class3'])).toEqual('class1 class2 class3');
  });
});
