import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../navigation/consts/screens';
import { StackParamList } from '../navigation/types/types';

export const FirstScreen = () => {
    const navigation = useNavigation<StackParamList>();
    
    const handleBtnPress = () => {
        navigation.navigate(Screens.SECOND)
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>FirstScreen</Text>
        <TouchableOpacity style={styles.btn} onPress={handleBtnPress}>
            <Text style={styles.btnTitle}>To Second Screen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    },
    btn: {
        backgroundColor: '#2d2d2d',
        padding: 10,
        width: '100%',
        marginTop: 20
    },
    btnTitle: {
        color: '#fff',
        textAlign: 'center'
    }
});
