import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native';

const Page = () => {
  const router = useRouter();

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Pressable
        style={{marginTop: 100}}
        onPress={() => {
          router.back();
        }}
      >
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
};

export default Page;
