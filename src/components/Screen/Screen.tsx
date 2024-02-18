import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer, ScreenHeader} from './components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoback?: boolean;
  scrollable?: boolean;
  title?: string;
}
export function Screen({
  children,
  HeaderComponent,
  canGoback = false,
  scrollable = false,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScreenHeader
            HeaderComponent={HeaderComponent}
            canGoback={canGoback}
            title={title}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
