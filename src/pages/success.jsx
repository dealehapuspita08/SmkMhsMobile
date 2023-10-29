import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const Success = () => {
  return (
    <View>
     <Image style={{
        height: 236,
        width: 236,
        alignSelf: 'center',
        marginTop: 150

     }} source={require('../assets/icon/gambarsuccess.png')}  />
     <Text style={{
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black'
     }}>
        Pemesanan Berhasil
     </Text>
    </View>
  )
}

export default Success

const styles = StyleSheet.create({})