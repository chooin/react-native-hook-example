import React from 'react';
import {View, Text} from 'react-native';
import {
  useAppActive,
  useAppInactive,
  useHide,
  useLoad,
  useResize,
  useShow,
  useUnload,
} from 'react-native-lifecycle';
import {Hoc} from '../../../components';

const Index = () => {
  // Called when the application from background to foreground
  useAppActive(() => {
    console.log('User useAppActive');
  });

  // Called when the application from foreground to background
  useAppInactive(() => {
    console.log('User useAppInactive');
  });

  // Called when the page load
  useLoad(() => {
    console.log('User useLoad');
  });

  // Called when the page is displayed or in the application from background to foreground
  useShow(() => {
    console.log('User useShow');
  });

  // Called when the page is hidden or in the application from foreground to background
  useHide(() => {
    console.log('User useHide');
  });

  // Called when the page is unloaded
  useUnload(() => {
    console.log('User useUnload');
  });

  // Called after the page window resize
  useResize(() => {
    console.log('User useResize');
  });

  return (
    <View>
      <Text>/user/index</Text>
    </View>
  );
};

export default Hoc(Index);
