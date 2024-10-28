import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        else if (username && password === confirmPassword) {
        Alert.alert('Success', 'Account created successfully');
        }
        else {
            Alert.alert('Error', 'Please enter both username and password.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text className='text-center m-5 text-2xl text-white'>Sign Up</Text>
            <View className='bg-slate-200 px-2 text-black rounded-lg border-gray-400 border-2 my-2'>
                <TextInput
                    className='text-black'
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                    placeholderTextColor={'#333'}
                />
            </View>
            <View className='bg-slate-200 px-2 text-black rounded-lg border-gray-400 border-2 my-2'>
                <TextInput
                    className='text-black'
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor={'#333'}
                />
            </View>
            <View className='bg-slate-200 px-2 text-black rounded-lg border-gray-400 border-2 my-2'>
                <TextInput
                    className='text-black'
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm Password"
                    secureTextEntry
                    placeholderTextColor={'#333'}
                />
            </View>
            <TouchableOpacity onPress={handleSignup} className='bg-blue-500 text-white rounded-lg border-blue-600 border-2 my-2 p-4'>
                <Text className='text-center text-white'>Sign Up</Text>
            </TouchableOpacity>
            <View className='flex flex-row mx-auto'>
                <Text className='text-white'>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    className='mx-2'>
                    <Text className='text-blue-500'>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
});

export default SignupScreen;