import React, { useEffect } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, ListRenderItem } from 'react-native';
import { Card, CardType } from '../base/types';
import { useAppDispatch, useAppSelector } from '../store/hooks/redux';
import { addCard } from '../store/reducers/addCard';
import { fetchCards } from '../store/reducers/fetchCards';

export const SecondScreen = () => {
    const dispatch = useAppDispatch();
    const { cards, isLoading, error } = useAppSelector(state => state.cardReducer);
    const filteredTasks = cards.filter(item => item.type === CardType.TASKS);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(fetchCards());
        }, 10000);

        dispatch(fetchCards());

        return () => clearInterval(timer);
    }, []);

    const handleCardPress = (item: Card) => {
        dispatch(addCard(item));
        Alert.alert(item.name, item.description ?? undefined);
    }

    const renderCard: ListRenderItem<Card> = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} style={styles.card} onPress={() => handleCardPress(item)}>
                <Text>{item.name}:{item.card_id}</Text>
            </TouchableOpacity>
        )
    }

    if(isLoading) return <Text>Загрузка</Text>

    if(!!error) return <Text>{error}</Text>

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>SecondScreen</Text>
        <FlatList data={filteredTasks} renderItem={renderCard}/>
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
    list: {
        flex: 1,
        marginTop: 20
    },
    card: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#2d2d2d',
        padding: 10
    }
});
