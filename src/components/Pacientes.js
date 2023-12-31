import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { formatearFecha } from '../helpers'

const Pacientes = ({item, setModalVisible, pacienteEditar, pacienteEliminar, setModalPaciente, setPaciente}) => {
    const { paciente, fecha, id} = item

    return (
        <Pressable
            onPress={() => {
                setModalPaciente(true)
                setPaciente(item)
            }}
        >
            <View style={styles.contenedor}>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.texto}>{paciente}</Text>
                <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

                <View style={styles.contenedorBotones}>
                    <Pressable
                        onPress={() => { 
                            setModalVisible(true)
                            pacienteEditar(id)
                        }}
                        style={[styles.btn, styles.btnEditar]}
                    >
                        <Text style={styles.txtBtn}>Editar</Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.btn, styles.btnEliminar]}
                        onPress={() => pacienteEliminar(id)}
                    >
                        <Text style={styles.txtBtn}>Eliminar  </Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFF',
        padding: 20,
        borderBottomColor:'#94a3b8',
        borderBottomWidth: 1,
        borderRadius: 10,
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10
    },
    texto: {
        color: '#6D289D',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10
    },
    fecha: {
        color: '#374151',
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnEditar: {
        backgroundColor: '#F59E0B'
    },
    btnEliminar: {
        backgroundColor: '#EF4444'
    },
    txtBtn: {
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: '700',
        color: '#FFF'
    }
})

export default Pacientes
