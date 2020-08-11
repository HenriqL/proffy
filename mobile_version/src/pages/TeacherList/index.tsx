import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles'





 function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isFilterVisible, setIsfilterVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    useEffect(()=> {

    }, []);

    function handlerToggleFilterVisible() {
        setIsfilterVisible(!isFilterVisible)
    }

    async function handlerFilterSubmit(){
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        setIsfilterVisible(false);
        setTeachers(response.data);

    }
     return (
         <View style={styles.container}>
            <PageHeader 
                title="Proffys disponiveis" 
                headerRight={(
                    <BorderlessButton onPress={handlerToggleFilterVisible}>
                        <Feather name="search" size={20} color='#fff'/>
                    </BorderlessButton>
                )}>
                { isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={ text => setSubject(text)}
                            placeholder='Qual a matéria?'
                            placeholderTextColor= '#c1bccc'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={ text => setWeekDay(text)}
                                    placeholder='Qual o dia?'
                                    placeholderTextColor= '#c1bccc'
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horários</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={ text => setTime(text)}
                                    placeholder='Qual o horário?'
                                    placeholderTextColor= '#c1bccc'
                                />
                            </View>
                        </View>

                      <RectButton onPress={handlerFilterSubmit} style={styles.submitButton}>
                          <Text style={styles.submitButtonText}>Buscar</Text>
                        </RectButton>  
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
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
                 
            </ScrollView>
         
         
        
         </View>

     )
 }
 export default TeacherList;