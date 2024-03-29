import { makeSocialContributionsCalculator } from './socialContributionsCalculator';

describe(`When I calculate the social contributions`, () => {
  it('Then it should be 21.10% of the gross revenue', () => {
    const calculateSocialContributions = makeSocialContributionsCalculator({
      withAcre: false,
    });
    expect(calculateSocialContributions(0)).toEqual(0);
    expect(calculateSocialContributions(100)).toEqual(21.1);
  });
});

describe(`When I calculate the social contributions with ACRE`, () => {
  it('Then it should be 11% of the gross revenue', () => {
    const calculateSocialContributions = makeSocialContributionsCalculator({
      withAcre: true,
    });
    expect(calculateSocialContributions(0)).toEqual(0);
    expect(calculateSocialContributions(100)).toEqual(11);
  });
});
