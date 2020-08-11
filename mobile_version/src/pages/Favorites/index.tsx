import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
function Favorites(){
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
                 <TeacherItem/>
                 <TeacherItem/>
                 <TeacherItem/>
                 <TeacherItem/>
                 <TeacherItem/>
            </ScrollView>
     </View>
    )
}
export default Favorites;