import React from 'react';
import {View, Pressable, Text, Button} from 'react-native';
import {
  useAppActive,
  useAppInactive,
  useLoad,
  useShow,
  useHide,
  useUnload,
  useResize,
} from 'react-native-lifecycle';
import {useNavigation} from '@react-navigation/native';
import {useEventEmitter, usePageInterval, usePermissions} from 'react-native-hook';
import {PERMISSIONS} from "react-native-permissions";

export default () => {
  const navigation = useNavigation();
  useEventEmitter('goBack', e => {
    navigation.goBack();
    console.log('xxx', e);
  });
  const pageInterval = usePageInterval(() => {
    console.log('usePageInterval');
  }, 3 * 1000);

  const onClick = () => {
    navigation.navigate('/user/index');
  };

  // Called when the application from background to foreground
  useAppActive(() => {
    console.log('Home useAppActive');
  });

  // Called when the application from foreground to background
  useAppInactive(() => {
    console.log('Home useAppInactive');
  });

  // Called when the page load
  useLoad(() => {
    console.log('Home useLoad');
  });

  // Called when the page is displayed or in the application from background to foreground
  useShow(() => {
    console.log('Home useShow');
  });

  // Called when the page is hidden or in the application from foreground to background
  useHide(() => {
    console.log('Home useHide');
  });

  // Called when the page is unloaded
  useUnload(() => {
    console.log('Home useUnload');
  });

  // Called after the page window resize
  useResize(() => {
    console.log('Home useResize');
  });

  const onStopInterval = () => {
    pageInterval.setEnabled(false);
  };

  return (
    <View>
      <Pressable onPress={onClick}>
        <Text>home/index</Text>
        <Button title="stopInterval" onPress={onStopInterval} />
      </Pressable>
    </View>
  );
};
