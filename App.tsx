import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
} from 'react-native';

import Formulario from './src/components/Formulario';

const App = () => {
  //Los Hooks siempre van en la parte superior de los componentes
  const [modalVisible, serModalVisible] = useState(false)
  console.log(modalVisible)
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Adminstrador de citas {''}
          <Text style={styles.tituloBold}>Veterinaria</Text>
        </Text>
        <Pressable 
          style={styles.btnCita}
          onPress={ () => serModalVisible(true)}
        >
          <Text style={styles.txtBtn}>Nueva Cita</Text>
        </Pressable>
        <Formulario 
          modalVisible = {modalVisible}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
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
  }
});

export default App;
