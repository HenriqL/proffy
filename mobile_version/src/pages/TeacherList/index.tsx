import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles'




 function TeacherList(){

    const [isFilterVisible, setIsfilterVisible] = useState(false);

     return (
         <View style={styles.container}>
            <PageHeader title="Proffys disponiveis">
                { isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Qual a matéria?'
                            placeholderTextColor= '#c1bccc'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Qual o dia?'
                                    placeholderTextColor= '#c1bccc'
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horários</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Qual o horário?'
                                    placeholderTextColor= '#c1bccc'
                                />
                            </View>
                        </View>
                    </View>
                )}
            </PageHeader>
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
 export default TeacherList;