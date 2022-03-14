import { calculateTaxableRevenue } from './calculateTaxableRevenue';

describe(`When I calculate the taxable revenue of a gross revenue`, () => {
  it('Then it should be 66% of the gross revenue', () => {
    expect(calculateTaxableRevenue(0)).toEqual(0);
    expect(calculateTaxableRevenue(100)).toEqual(66);
    expect(calculateTaxableRevenue(72600)).toEqual(47916);
  });
});
