import React from 'react';
import {View, Linking, Image, Text, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const message = 'Teste msg app';
    const incident = route.params.incident;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso ${incident.name}`,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWpp() {
        Linking.openURL(`whatsapp://send?${incident.wpp}&text=${message}`)
    }

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
                
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{
                    Intl.NumberFormat('pt-BR', { 
                    style: 'currency', currency: 'BRL'})
                    .format(incident.value)}
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia, seja o herói desse caso</Text>

                <Text style={styles.hero}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendWpp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}