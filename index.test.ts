import { add } from './index';

describe('test - base', () => {
  test('add', () => {
    const sum = add(2, 3);
    expect(sum).toBe(5);
  });
});
