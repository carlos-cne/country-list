import { GetAllCountries_countries } from 'graphql/graphql-schema';
import React from 'react';
import { render } from 'test-utils';
import { ListCountryScreen } from './list-country.screen';

jest.mock('./list-country-render-item', () => ({
  renderItem: (...props: unknown[]) => mockedRenderItem(...props),
}));

const mockedRenderItem = jest.fn();
const componentProps = [
  {
    __typename: 'Country',
    capital: 'unit-test-capital1',
    code: 'unit-test-code1',
    emoji: 'unit-test-emoji1',
    name: 'unit-test-name1',
  },
  {
    __typename: 'Country',
    capital: 'unit-test-capital2',
    code: 'unit-test-code2',
    emoji: 'unit-test-emoji2',
    name: 'unit-test-name2',
  },
] as GetAllCountries_countries[];
describe('ListCountryScreen use case', () => {
  it('should ', () => {
    render(<ListCountryScreen countries={componentProps} />);

    expect(mockedRenderItem).toHaveBeenCalledTimes(2);
    expect(mockedRenderItem.mock.calls).toEqual([
      expect.arrayContaining([
        expect.objectContaining({
          item: componentProps[0],
        }),
      ]),
      expect.arrayContaining([
        expect.objectContaining({
          item: componentProps[1],
        }),
      ]),
    ]);
  });
});
