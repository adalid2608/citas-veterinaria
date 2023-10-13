import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  FlatList,
  Alert
} from 'react-native';

import Formulario from './src/components/Formulario';
import Pacientes from './src/components/Pacientes';
import Informacion from './src/components/Informacion';

const App = () => {
  //Los Hooks siempre van en la parte superior de los componentes
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = id => {
      const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
      setPaciente(pacienteEditar[0])}
      
  const pacienteEliminar = id => {
    Alert.alert(
      '¿Deseas elimiar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text: 'Cancelar'},
        {text: 'Si, eliminar', onPress: () => {
          const pacientesActualizados = pacientes.filter(pacientesState => pacientesState.id !== id)
          setPacientes(pacientesActualizados)
        }}
      ]
    )
  }

  const cerrarModal = () => {
    setModalVisible(false)
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Adminstrador de citas {''}
          <Text style={styles.tituloBold}>Veterinaria</Text>
        </Text>
        <Pressable 
          style={styles.btnCita}
          onPress={ () => setModalVisible(!modalVisible)}
        >
          <Text style={styles.txtBtn}>Nueva Cita</Text>
        </Pressable>
        {pacientes.length === 0 ? 
          <Text style={styles.pacientes}>No hay pacientes aún</Text> :
          <FlatList
            style={styles.listado}
            data={pacientes}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => {
              return(
                <>
                  <Pacientes
                    item={item}
                    setModalVisible={setModalVisible}
                    pacienteEditar={pacienteEditar}
                    pacienteEliminar={pacienteEliminar}
                    setModalPaciente={setModalPaciente}
                    setPaciente={setPaciente}
                  />
                </>
              )
            }}
          />
        }
        {modalVisible && (
          <Formulario 
            cerrarModal={cerrarModal}
            pacientes = {pacientes}
            setPacientes = {setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
        )}
        <Modal
          visible={modalPaciente}
          animationType='fade'
        >
          <Informacion
            paciente={paciente}
            setPaciente={setPaciente}
            setModalPaciente={setModalPaciente}
          />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9e9ff',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    color: '#374151', 
    marginTop: 10,
    fontSize: 30,
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D289D',
  },
  btnCita: {
    backgroundColor: '#6D28D9',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  txtBtn: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  pacientes: {
    marginTop: 40,
    textAlign: 'center',
    color: '#000',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
});

export default App;
