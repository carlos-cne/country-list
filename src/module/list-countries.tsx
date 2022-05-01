import { useQuery } from '@apollo/client';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetAllCountries } from '../graphql/graphql-schema';
import { GET_ALL_COUNTRIES } from '../graphql/query/get-all-countries';
import { ListCountryScreen } from '../screen/list-country/list-country.screen';

export const ListCountries = () => {
  const { loading, error, data } = useQuery<GetAllCountries>(GET_ALL_COUNTRIES);

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>Lamentamos, ocorreu um erro. Tente novamente mais tarde</Text>
        <Text>Detalhes do erro: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return <ListCountryScreen countries={data?.countries || []} />;
};
