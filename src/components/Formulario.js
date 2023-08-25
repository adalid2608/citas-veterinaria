import React from 'react'
import {Modal, Text, View} from 'react-native'

const Formulario = ({modalVisible}) => {
    return (
        <Modal 
            animationType='slide' 
            visible={modalVisible}
        >
            <Text>Desde Modal</Text>
        </Modal>
    )
}

export default Formulario
