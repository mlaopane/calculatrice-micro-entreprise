export type ScaleYear = 2022 | 2023;

export const taxScale: Record<ScaleYear, any> = {
  2022: {
    firstTier: {
      rate: 0,
      cap: 10_225,
    },
    secondTier: {
      rate: 0.11,
      cap: 26_070,
    },
    thirdTier: {
      rate: 0.3,
      cap: 74_545,
    },
    fourthTier: {
      rate: 0.41,
      cap: 160_336,
    },
    fifthTier: {
      rate: 0.45,
      cap: Infinity,
    },
  },
  2023: {
    firstTier: {
      rate: 0,
      cap: 10_777,
    },
    secondTier: {
      rate: 0.11,
      cap: 27_478,
    },
    thirdTier: {
      rate: 0.3,
      cap: 78_570,
    },
    fourthTier: {
      rate: 0.41,
      cap: 168_994,
    },
    fifthTier: {
      rate: 0.45,
      cap: Infinity,
    },
  },
};
