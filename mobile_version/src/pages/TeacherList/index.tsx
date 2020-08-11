import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import styles from './styles'




 function TeacherList(){

    const [isFilterVisible, setIsfilterVisible] = useState(false);

    function handlerToggleFilterVisible() {
        setIsfilterVisible(!isFilterVisible)
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

                      <RectButton style={styles.submitButton}>
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