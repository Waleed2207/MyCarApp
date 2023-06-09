import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18next from '../locals';

const Providers = ({children}) => (
  <NavigationContainer>
    <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
  </NavigationContainer>
);

export default Providers;
