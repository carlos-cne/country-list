import React, { FC, ReactElement } from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, RenderOptions } from '@testing-library/react-native';

const renderWithProvider = (
  ui: ReactElement,
  {
    mocks = [],
    ...renderOptions
  }: { mocks?: any[]; options?: RenderOptions } = {},
) => {
  const Wrapper: FC = ({ children }) => {
    return <MockedProvider mocks={mocks}>{children}</MockedProvider>;
  };

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

export { render, renderWithProvider };

export * from '@testing-library/react-native';
