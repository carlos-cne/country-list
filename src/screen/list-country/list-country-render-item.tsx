import React from 'react';
import { GetAllCountries_countries } from '../../graphql/graphql-schema';
import { CountrySummary } from './components/country-summary.component';

export const renderItem = ({
  item,
}: {
  item: Omit<GetAllCountries_countries, '__typename'>;
}) => (
  <CountrySummary
    capital={item.capital}
    code={item.code}
    emoji={item.emoji}
    name={item.name}
  />
);
