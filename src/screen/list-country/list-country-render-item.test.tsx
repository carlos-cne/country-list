import { render } from 'test-utils';
import { renderItem } from './list-country-render-item';

jest.mock('./components/country-summary.component', () => ({
  CountrySummary: (props: unknown) => mockedCountrySummary(props),
}));

const mockedCountrySummary = jest.fn().mockReturnValue(null);

const componentProps = {
  capital: 'unit-test-capital',
  code: 'unit-test-code',
  emoji: 'unit-test-emoji',
  name: 'unit-test-name',
};

describe('renderItem use case', () => {
  it('should call the CountrySummary function', () => {
    render(renderItem({ item: componentProps }));

    expect(mockedCountrySummary).toHaveBeenCalledWith(componentProps);
  });
});
