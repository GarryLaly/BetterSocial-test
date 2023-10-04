import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import FeedScreen from '@screens/FeedScreen';
import PostDetailScreen from '@screens/PostDetailScreen';
import {store, persistor} from '@store/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="feed">
            <Stack.Screen
              name="feed"
              component={FeedScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="post-detail"
              component={PostDetailScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
