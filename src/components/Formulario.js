import React from 'react'
import {Modal, Text, View, StyleSheet, TextInput,} from 'react-native'

const Formulario = ({modalVisible}) => {
    return (
        <Modal 
            animationType='slide' 
            visible={modalVisible}
        >
            <View style={styles.containerModal}>
                <Text style={styles.titulo}>Nueva {''}
                    <Text style={styles.tituloBold}>Cita</Text>
                </Text>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del Paciente</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre del Paciente'
                        placeholderTextColor={'#a5a5a5'}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: '#6D28D9',
        flex: 1
    },
    titulo: {
        textAlign: 'center',
        color: '#FFF', 
        marginTop: 30,
        fontSize: 30,
        fontWeight: '600',
    },
    tituloBold: {
        fontWeight: '900',
        color: '#FFF',
    },
    campo: {
        marginTop: 40,
        marginHorizontal: 30,
        marginBottom: 100
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15
    },

});
export default Formulario
