import React from 'react';
import { Tabs } from 'expo-router';

export default () => {
  return (
    <Tabs initialRouteName="home" backBehavior="none">
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search" />
    </Tabs>
  );
};
