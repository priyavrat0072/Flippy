import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator, View} from 'react-native';
import {AuthRoutes, HomeRoutes} from './src/navigation/Routes';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState<any>('');

  React.useEffect(() => {
    const userCheck = auth().onAuthStateChanged(userExist => {
      if (userExist) setUser(userExist);
      else setUser('');
    });

    return () => {
      userCheck();
    };
  }, []);

  return (
    <NavigationContainer>
      {user !== '' ? <HomeRoutes userData={user} /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default App;
