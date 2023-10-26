import { View, Text, TextInput, Image, TouchableOpacity, Button, Alert} from 'react-native'
import React from 'react'
import { SearchSource } from 'jest'

const App = () => {
  return (
    <View>
      <View style={{
        height: 52,
        backgroundColor: 'E90101',
        marginHorizontal: 16,
        borderRadius: 99,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 16,
      }}>
        <Image
          source={require('../AwesomeProject/src/assets/logo.png')}/>
          <view
          style={{
            width: 140,
            height: 32,
            backgroundColor: 'gray',
          }}>

        </view>
      </View>
    </View>
  )
  }
export default App