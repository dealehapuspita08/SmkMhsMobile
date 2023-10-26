import { View, Text, TextInput, Image, TouchableOpacity, Button, Alert} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <View style={{
        height: 52,
        backgroundColor: 'red',
        marginHorizontal: 16,
        borderRadius: 100,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}>
              <Image
        source={require('../AwesomeProject/src/icon/logo.png')}
        style={{
          width: 140,
          height: 32,
        }}/>

        <Image
        source={require('../AwesomeProject/src/icon/Vector.png')}
        style={{
          width: 20,
          height: 20,
        }}/>
        <Text style={{
          marginTop: 4,
          marginLeft: 16,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 22,
        }}>KANTIN MULTISTUDI</Text>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
        <View
        style={{
          height: 150,
          borderWidth: 1,
          backgroundColor: 'red',
          borderRadius: 12,
        }}></View>
        
        </View>
        </View>
      </View>
   
  )
  }
export default App