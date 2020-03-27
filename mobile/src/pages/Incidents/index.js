import React from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();
    
    function navigateToDetail() {
        navigation.navigate('Details');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>Escolha um dos casos que gostaria de ajudar.</Text>


            <FlatList 
                data={[1, 2, 3]}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator= {false}
                renderItem={() => (
                    <View style={styles.incident}>

                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APASDSA</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Caso teste ong</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>R$ 00,00</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress = {navigateToDetail}>

                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>

                        </TouchableOpacity>

                    </View>
                )}
            />

        </View>
    );
}