import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { ListCountries } from '../module/list-countries';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountryInformation } from '../module/country-information';
import { RootStackParamList } from './root-stack-param-list';

const Tab = createBottomTabNavigator();
const ListCountriesStack = createNativeStackNavigator<RootStackParamList>();

const History = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>History!</Text>
  </View>
);

const ListCountryStackScreen = () => (
  <ListCountriesStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <ListCountriesStack.Screen name="CountryList" component={ListCountries} />
    <ListCountriesStack.Screen
      options={{
        headerShown: true,
        headerTitle: 'Detalhes',
      }}
      name="CountryInformation"
      component={CountryInformation}
    />
  </ListCountriesStack.Navigator>
);
export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="CountryListTab" component={ListCountryStackScreen} />
      <Tab.Screen name="HistoryTab" component={History} />
    </Tab.Navigator>
  );
}
