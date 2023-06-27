import React from 'react';
import {SafeAreaView} from 'react-native';
import Text from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{padding: 16}}>
        <Text preset="headingLarge" italic style={{marginBottom: 16}}>
          React Native
        </Text>
        {/* <Button title="Primary" marginBottom="s12" />
        <Button title="Primary Disabled" marginBottom="s12" disabled />
        <Button title="Outline" marginBottom="s12" preset="outline" />
        <Button title="Outiline Disabled" preset="outline" disabled /> */}
        <Icon name='arrowLeft' color='backgroundContrast' size={50}/>
        <Icon name='arrowRight' color='carrotSecondary' size={50}/>
        <Icon name='chatOn' color='buttonPrimary' size={50}/>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
