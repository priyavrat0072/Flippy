import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthRoutes, DrawerRoutes, HomeRoutes} from './src/navigation/Routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

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
    <Provider store={store} >
    <NavigationContainer>
      {user !== '' ? <DrawerRoutes userData={user} /> : <AuthRoutes />}
    </NavigationContainer>
    </Provider>
  );
};

export default App;
