import React from 'react';
import { render, fireEvent } from 'test-utils';
import { CountrySummary } from './country-summary.component';

jest.mock('@react-navigation/native', () => ({
  useNavigation() {
    return {
      navigate: (...props: unknown[]) => mockedNavigate(...props),
    };
  },
}));

const mockedNavigate = jest.fn();

const componentProps = {
  capital: 'unit-test-capital',
  code: 'unit-test-code',
  emoji: 'unit-test-emoji',
  name: 'unit-test-name',
};
const sut = (props?: typeof componentProps) =>
  render(<CountrySummary {...{ ...componentProps, ...props }} />);

describe('CountrySummary use case', () => {
  it('should be able to call the navigate function when user press the component', () => {
    const { getByRole } = sut();

    fireEvent.press(getByRole('button'));
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('CountryInformation', {
      code: componentProps.code,
    });
  });
  it('should find the properties on the screen', () => {
    const { getByText } = sut();

    getByText(componentProps.capital);
    getByText(componentProps.emoji);
    getByText(componentProps.name);
  });
});
