import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({navigation}:any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            Alert.alert('Login Successful', `Welcome, ${username}!`);
        } else {
            Alert.alert('Error', 'Please enter both username and password.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text className='text-center m-5 text-2xl text-white'>Login</Text>
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
            <TouchableOpacity onPress={handleLogin} className='bg-blue-500 text-white rounded-lg border-blue-600 border-2 my-2 p-4'>
                <Text className='text-center text-white'>Login</Text>
            </TouchableOpacity>
            <View className='flex flex-row mx-auto'>
                <Text className='text-white'>Don't have a account ?</Text> 
                <TouchableOpacity 
                onPress={() => navigation.navigate('Signup')}
                className='mx-2'>
                    <Text className='text-blue-500'>Signup</Text>
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
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
    },
});

export default LoginScreen;