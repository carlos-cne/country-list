import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { client } from './config/apollo.client';
import { AppRoutes } from './routes/app.routes';
import { View } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <View style={{ flex: 1, paddingHorizontal: 16 }}>
            <AppRoutes />
          </View>
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
