import classnames from './';

describe('classnames', () => {
  it('joins class names into a single string', () => {
    const result = classnames('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('filters out falsy values', () => {
    const values = ['class1', null, undefined, 'class2', 'class3', false, ''] as any;
    const result = classnames(...values);
    expect(result).toBe('class1 class2 class3');
  });
});