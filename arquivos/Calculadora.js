import React, { Component } from 'react'
import { View, Button, StyleSheet} from 'react-native'


export default class Calculadora extends Component {
    render (){
        return (
            <>
                <View style={style.todo}>
                    <View style={style.Container}>
                        <Button title= '1' style={style.Texto}> </Button>
                        <Button title= '2' style={style.Texto}> </Button>
                        <Button title= '3' style={style.Texto}> </Button>
                        <Button title= '+' style={style.Texto}> </Button>
                    </View> 
                    <View style={style.Container}>
                        <Button title= '4' style={style.Texto}> </Button>
                        <Button title= '5' style={style.Texto}> </Button>
                        <Button title= '6' style={style.Texto}> </Button>
                        <Button title= '-' style={style.Texto}> </Button>
                    </View> 
                    <View style={style.Container}>
                        <Button title= '7' style={style.Texto}> </Button>
                        <Button title= '8' style={style.Texto}> </Button>
                        <Button title= '9' style={style.Texto}> </Button>
                        <Button title= '*' style={style.Texto}> </Button>
                    </View>
                    <View style={style.Container}>
                        <Button title= 'ON' style={style.Texto}> </Button>
                        <Button title= '0' style={style.Texto}> </Button>
                        <Button title= '/' style={style.Texto}> </Button>
                        <Button title= '=' style={style.Texto}> </Button>
                    </View> 
                </View>
            </>
        )
    }
}
const style = StyleSheet.create({
    Container:{
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    Texto: {
        textAlign: 'center',
        width: 90,
        height: 10
        
        
        
    },
    todo: {
        marginTop: 300,

    }
})
