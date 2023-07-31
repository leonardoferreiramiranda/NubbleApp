import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

//type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoback>
      <Text preset="headingLarge">Setting Screen</Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {screen: 'NewPostScreen'})
        }
      />
    </Screen>
  );
}
