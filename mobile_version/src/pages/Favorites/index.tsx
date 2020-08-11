import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { useFocusEffect } from '@react-navigation/native'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AssyncStorage from '@react-native-community/async-storage'
import PageHeader from '../../components/PageHeader';

import styles from './styles'



function Favorites(){
    const [favorites, setFavorites] = useState([]);
    function loadFavorites(){
        AssyncStorage.getItem('favorites').then(response =>{
            if ( response){
                const favoritedTeacher = JSON.parse(response);
    
                setFavorites(favoritedTeacher);
            }

        });
    }
    useFocusEffect(() => {
        loadFavorites();
    },);
    return (
    <View style={styles.container}>
        <PageHeader title="Meus proffys favoritos"></PageHeader>

        <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingBottom:16,
                    paddingHorizontal: 16,
                }}
            >
            {favorites.map((teacher: Teacher) =>{
                return (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                    />
                )
            })}
                 
            </ScrollView>
     </View>
    )
}
export default Favorites;