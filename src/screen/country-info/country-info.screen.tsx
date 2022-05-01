import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetCountry_country } from '../../graphql/graphql-schema';

export const CountryInfo = (
  country: Omit<GetCountry_country, '__typename'>,
) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 60 }}>{country.emoji}</Text>
    </View>
    <Text>País: {country.name}</Text>
    <Text>Nome nativo: {country.native}</Text>
    <Text>Capital: {country.capital}</Text>
    <Text>Continente: {country.continent.name}</Text>
    <Text>Moeda local: {country.currency}</Text>
  </SafeAreaView>
);
