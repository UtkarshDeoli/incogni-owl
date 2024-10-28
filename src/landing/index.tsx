import React from 'react';
const owlImage = require('../../assets/images/owl2.jpg');
import { SafeAreaView, View, Image, Pressable, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp } from '@react-navigation/native';

type LandingProps = {
  navigation: NavigationProp<any>;
};

export default function Landing({ navigation }: LandingProps) {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#415e70]">
      {/* Image section */}
      <Image 
        className="h-[80%] w-[80%] mb-10" 
        source={owlImage} 
        style={{ resizeMode: 'contain' }} 
      />

      {/* Floating Action Button */}
      <View className="absolute bottom-5 right-5">
        <TouchableHighlight
          className="bg-blue-400 p-5 rounded-full justify-center items-center shadow-lg"
          onPress={() => navigation.navigate('Login')}
          style={{ elevation: 6 }}
        >
          <View className='flex flex-row gap-2 justify-center items-center'>
            
            <Icon name="arrow-forward" size={24} color="white" /> 
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
