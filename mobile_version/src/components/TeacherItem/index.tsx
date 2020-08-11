import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';


function TeacherItem() {
    return ( 
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/67119904?s=60&v=4'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Henrique Silva</Text>
                    <Text style={styles.subject}>Desenvolvimento web</Text>
                </View>  
            </View>

            <Text style={styles.bio}>
                    Estudante de Desenvolvimento web e Desenvolvimento de sistemas procurando levar meus conhecimentos adiante.
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço / Hora { ' ' }
                    <Text style={styles.priceValue}> R$ 50,00 </Text>
                </Text>

                <View style={styles.buttonContainer}>

                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    {/* <Image source={heartOutlineIcon} /> */}
                    <Image source={unfavoriteIcon} />
                </RectButton>
                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}> Entrar em contato</Text>
                </RectButton>
                </View>
            </View>
        </View>


    )
}




export default TeacherItem;