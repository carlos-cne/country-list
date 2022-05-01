import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetAllCountries } from '../../graphql/graphql-schema';
import { renderItem } from './list-country-render-item';

export const ListCountryScreen = ({ countries }: GetAllCountries) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }} edges={['top']}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={country => country.code}
        style={{ backgroundColor: '#fff' }}
      />
    </SafeAreaView>
  );
};
