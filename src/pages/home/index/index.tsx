import React from 'react';
import {View, Pressable, Text} from 'react-native';
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

export default () => {
  const navigation = useNavigation();

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

  return (
    <View>
      <Pressable onPress={onClick}>
        <Text>home/index</Text>
      </Pressable>
    </View>
  );
};
