import React from 'react';
import { useQuery } from '@apollo/client';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RouteProp } from '@react-navigation/native';

import { GetCountry, GetCountryVariables } from '../graphql/graphql-schema';
import { GET_COUNTRY } from '../graphql/query/get-country';
import { RootStackParamList } from '../routes/root-stack-param-list';
import { CountryInfo } from '../screen/country-info/country-info.screen';

type RoutePropType = {
  route: RouteProp<RootStackParamList, 'CountryInformation'>;
};

export const CountryInformation = ({ route }: RoutePropType) => {
  const { loading, error, data } = useQuery<GetCountry, GetCountryVariables>(
    GET_COUNTRY,
    {
      variables: {
        code: route.params.code,
      },
    },
  );

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error || !data?.country) {
    return (
      <SafeAreaView>
        <Text>Lamentamos, ocorreu um erro. Tente novamente mais tarde</Text>
        <Text>
          Detalhes do erro: {error?.message ?? 'Sem dados para exibir'}
        </Text>
      </SafeAreaView>
    );
  }

  return <CountryInfo {...data.country} />;
};
