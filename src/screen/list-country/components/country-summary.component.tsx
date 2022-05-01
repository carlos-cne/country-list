import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { GetAllCountries_countries } from '../../../graphql/graphql-schema';

import {
  Container,
  CountryCapitalText,
  CountryInfoContainer,
  CountryName,
  EmojiText,
} from './country-summary.style';

export const CountrySummary = ({
  capital,
  code,
  emoji,
  name,
}: Omit<GetAllCountries_countries, '__typename'>) => {
  const navigation = useNavigation();
  return (
    <Container
      accessibilityRole="button"
      accessibilityLabel={name}
      onPress={() => navigation.navigate('CountryInformation', { code })}
      key={code}>
      <EmojiText>{emoji}</EmojiText>
      <CountryInfoContainer>
        <CountryName numberOfLines={1}>{name}</CountryName>
        <CountryCapitalText>{capital}</CountryCapitalText>
      </CountryInfoContainer>
    </Container>
  );
};
