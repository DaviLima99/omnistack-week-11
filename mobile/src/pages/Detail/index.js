import React from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';


import styles from './styles';

export default function Detail() {
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={() => {}}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
                
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APASDSA</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Caso teste ong</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 00,00</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia, seja o herói desse caso</Text>

                <Text style={styles.hero}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}