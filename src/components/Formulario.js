import React, { useState, useEffect } from 'react'
import {Modal, Text, View, StyleSheet, TextInput,ScrollView, SafeAreaView, Pressable, Alert, NativeModules} from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({
    modalVisible,
    cerrarModal,
    pacientes,
    setPacientes, 
    paciente:pacienteObj, 
    setPaciente:setPacienteApp }) => {

    const [paciente, setPaciente] = useState('')
    const [id, setId] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    //useEffect ( () => {
        //console.log('el componente esta listo')
    //},[])
    useEffect(() => {
        if(Object.keys(pacienteObj).length > 0) {
            setId(pacienteObj.id)
            setPaciente(pacienteObj.paciente)
            setPropietario(pacienteObj.propietario)
            setEmail(pacienteObj.email)
            setTelefono(pacienteObj.telefono)
            setFecha(pacienteObj.fecha)
            setSintomas(pacienteObj.sintomas)
        }
    },[pacienteObj])

    const nuevaCita = () => {
        //validacion
        if([paciente, propietario, email, telefono, fecha, sintomas].includes('')){
            Alert.alert(
                'Error',
                'Todos los campos son Obligatorios',
            )
            return
        }
        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }
        //Revisar si es un registro nuevo o es edicion
        if(id) {
            //Editar Registro
            nuevoPaciente.id = id
            const pacientesActualizados = pacientes.map(pacienteState => 
                pacienteState.id === nuevoPaciente.id ? nuevoPaciente 
                :pacienteState)
            
                setPacientes(pacientesActualizados)
        }else {
            //Registrar un nuevo paciente
            nuevoPaciente.id = Date.now()
            setPacientes([...pacientes, nuevoPaciente])
            setPacienteApp({})
        }
        cerrarModal()
        setId('')
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha(new Date())
        setSintomas('')
    }

    return (
        <Modal 
            animationType='fade' 
            visible={modalVisible}
        > 
            <View style={styles.containerModal}>
                <ScrollView>
                    <Text style={styles.titulo}>{pacienteObj.id ? 'Editar': 'Nueva'} {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>
                    <Pressable
                        style={styles.btnCancelar}
                        onPress={ () => {
                            cerrarModal()
                            setPacienteApp({})
                            setId('')
                            setPaciente('')
                            setPropietario('')
                            setEmail('')
                            setTelefono('')
                            setFecha(new Date())
                            setSintomas('')
                        }}
                    >
                        <Text style={styles.txtCancelar}>X Cancelar</Text>
                    </Pressable>
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
                        <Text style={styles.label}>Fecha de la Cita</Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                                date={fecha}
                                locale='es'
                                mode='date'
                                onDateChange={(date)=> setFecha(date)}
                                
                            />
                        </View>
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
                    <Pressable
                        style={styles.btnAgregar}
                        onPress={nuevaCita}
                    >
                        <Text style={styles.txtAgregar}>{pacienteObj.id ? 'Editar ' : 'Agregar '}Paciente</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: '#6D28D9',
        flex: 1,
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
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#ff1100',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    txtCancelar: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase'
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
        height: 100,
        marginBottom: 40
    },
    fechaContenedor: {
        backgroundColor: '#FFF',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10
    },
    btnAgregar: {
        marginTop: 10,
        marginBottom: 50,
        backgroundColor: '#F59E0B',
        marginHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    txtAgregar: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase'
    },

});
export default Formulario
