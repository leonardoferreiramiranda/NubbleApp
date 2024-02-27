import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

const ICON_SIZE = 20;

type Props = Pick<ScreenProps, 'title' | 'canGoback' | 'HeaderComponent'> &
  BoxProps;

export function ScreenHeader({
  canGoback,
  title,
  HeaderComponent,
  ...boxProps
}: Props) {
  const navigation = useNavigation();

  if (!title && !canGoback && !HeaderComponent) {
    return null;
  }
  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between"
      {...boxProps}>
      {canGoback && (
        <TouchableOpacityBox
          testID="screen-back-button"
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="carrotSecondary" width={ICON_SIZE} />}
    </Box>
  );
}
