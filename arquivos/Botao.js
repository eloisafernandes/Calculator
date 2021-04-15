import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, TouchableHighlight, Text} from 'react-native'


const styles = StyleSheet.create({
    button:{
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    estiloBotao:{
        color: '#fff',
        backgroundColor: '#fa8231'

    },
    buttonDouble:{
        width: (Dimensions.get('window').width/4) * 2,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width/4) * 3,
    }

})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.estiloBotao)

    return (
        <TouchableHighlight  onPress={props.onClick}>
            <Text style={stylesButton}> {props.label}  </Text>
        </TouchableHighlight>
    )
}

