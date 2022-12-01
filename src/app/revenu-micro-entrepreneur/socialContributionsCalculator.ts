type Params = {
  withAcre: boolean;
};

export const calculateSocialContributions = (revenue: number): number =>
  revenue * 0.211;

export const calculateSocialContributionsWithAcre = (revenue: number): number =>
  calculateSocialContributions(revenue) / 2;

export const makeSocialContributionsCalculator = ({ withAcre }: Params) => {
  if (withAcre) {
    return calculateSocialContributionsWithAcre;
  }

  return calculateSocialContributions;
};
