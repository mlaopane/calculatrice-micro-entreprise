type Params = {
  withAcre: boolean;
};

export const calculateSocialContributions = (revenue: number): number =>
  +(revenue * 0.211).toFixed(3);

export const calculateSocialContributionsWithAcre = (revenue: number): number =>
  revenue * 0.11;

export const makeSocialContributionsCalculator = ({ withAcre }: Params) => {
  if (withAcre) {
    return calculateSocialContributionsWithAcre;
  }

  return calculateSocialContributions;
};
