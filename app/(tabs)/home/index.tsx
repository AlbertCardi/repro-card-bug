import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  const router = useRouter();

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 100}}>
      <Pressable
        onPress={() => {
          router.push('/home/club');
        }}
      >
        <Text>Navigate to club</Text>
      </Pressable>
      <Pressable
      style={{ marginTop: 20}}
        onPress={() => {
          router.push('/home/page');
        }}
      >
        <Text>Navigate to page</Text>
      </Pressable>
    </View>
  );
};

export default Home;
