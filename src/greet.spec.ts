import { greet } from './greet';

describe(`greet`, () => {
  it('should return "Good morning !"', () => {
    expect(greet()).toEqual(`Good morning !`);
  });
});
