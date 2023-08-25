import React, { useState } from 'react'
import {Modal, Text, View, StyleSheet, TextInput,ScrollView, SafeAreaView} from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({modalVisible}) => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')


    return (
        <Modal 
            animationType='slide' 
            visible={modalVisible}
        > 
            <View style={styles.containerModal}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Paciente</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre del Paciente'
                            placeholderTextColor={'#a5a5a5'}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre del Propietario'
                            placeholderTextColor={'#a5a5a5'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email del Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email del Propietario'
                            placeholderTextColor={'#a5a5a5'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono del Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Telefono del Propietario'
                            placeholderTextColor={'#a5a5a5'}
                            keyboardType='number-pad'
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={10}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono del Propietario</Text>
                        
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput 
                            style={[styles.input, styles.sintomasInput]}
                            placeholder='Sintomas del Paciente'
                            placeholderTextColor={'#a5a5a5'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </ScrollView>
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
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 5,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
    },
    sintomasInput: {
        height: 100
    }
});
export default Formulario
