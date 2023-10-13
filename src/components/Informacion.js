import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { formatearFecha } from '../helpers'

const Informacion = ({paciente, setModalPaciente, setPaciente}) => {
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Información
                <Text style={styles.tituloBold}> Paciente</Text>
            </Text>
            <View>
                <Pressable
                    onPress={() => {
                        setModalPaciente(false)
                        setPaciente({})
                    }}
                    style={styles.btnCerrar}
                >
                    <Text style={styles.txtCerrar}>Cerrar</Text>
                </Pressable>
            </View>
            <View style={styles.contenido}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre: </Text>
                    <Text style={styles.valor}>{paciente.paciente}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario: </Text>
                    <Text style={styles.valor}>{paciente.propietario}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email: </Text>
                    <Text style={styles.valor}>{paciente.email}</Text>
                </View>
                <View style={styles.campo}> 
                    <Text style={styles.label}>Telefono: </Text>
                    <Text style={styles.valor}>{paciente.telefono}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta: </Text>
                    <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas: </Text>
                    <Text style={styles.valor}>{paciente.sintomas}</Text>
                </View>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#F59E0B',
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
    btnCerrar: {
        marginVertical: 30,
        backgroundColor: '#ff1100',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    txtCerrar: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    contenido: {
        backgroundColor:'#fff',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        //Sombras en ReactNative
        shadowColor: "#000", //color de sombra
        shadowOffset:{ //ubicacion de la sombra de izquierda a derecha, valores negativos es de derecha a izquierda
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, //opacidad de la sombra
        shadowRadius: 3.84, //expansion de la sombra en todas las direcciones
        elevation: 10
    },
    campo: {
        marginBottom: 10
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 12
    },
    valor: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155'
    }
})

export default Informacion