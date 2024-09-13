import React from 'react';
import type {PropsWithChildren} from 'react';
import { styled } from 'nativewind';
import {NavigationContainer} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Image,
  View,
  Pressable,
} from 'react-native';

const SafeAreaViewStyled = styled(SafeAreaView);
const ScrollViewStyled = styled(ScrollView);
const StatusBarStyled = styled(StatusBar);
const TextStyled = styled(Text);
const ImageStyled = styled(Image);
const StyledView = styled(View);
const StyledButton = styled(Pressable);

export default function App() {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
  <NavigationContainer>
    <SafeAreaViewStyled className="flex-1 justify-center items-center bg-[#415e70]">
      <StyledView className=' flex justify-center items-center'>
        <ImageStyled className='h-80 w-80 flex ' source={require('./assets/images/owl2.jpg')} />
      </StyledView>
      <StyledButton className='border-slate-800 border px-4 py-2 rounded-lg bg-blue-500' onPress={() => alert('Simple Button pressed')} ><TextStyled className='text-slate-900 text-xl
      '>Continue</TextStyled></StyledButton>
    </SafeAreaViewStyled>
  </NavigationContainer>
    
  );
}