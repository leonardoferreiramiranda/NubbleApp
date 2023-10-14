import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

const ICON_SIZE = 20;
type Props = Pick<ScreenProps, 'title' | 'canGoback'>;

export function ScreenHeader({canGoback, title}: Props) {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between">
      {canGoback && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
