import React from 'react';
import type {PropsWithChildren} from 'react';
import { styled } from 'nativewind';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Image
} from 'react-native';

const SafeAreaViewStyled = styled(SafeAreaView);
const ScrollViewStyled = styled(ScrollView);
const StatusBarStyled = styled(StatusBar);
const TextStyled = styled(Text);
const ImageStyled = styled(Image);

export default function App() {
  return (
    <SafeAreaViewStyled className="flex-1 justify-center items-center bg-gray-100">
      <ScrollViewStyled className="bg-gray-100">
        <ImageStyled src='/assets/images/owl.jpg'></ImageStyled>
      </ScrollViewStyled>
    </SafeAreaViewStyled>
  );
}