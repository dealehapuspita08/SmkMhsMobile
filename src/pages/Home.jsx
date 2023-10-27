import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          height: 52,
          backgroundColor: '#C40001',
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
          source={require('../assets/icon/logo.png')}
          style={{
            width: 140,
            height: 32,
          }}
        />

        <Image
          source={require('../assets/icon/Vector.png')}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 36,
          marginLeft: 16,
          color: '#A4A4A4',
          fontSize: 12,
        }}>
        Selamat Datang Di
      </Text>
      <Text
        style={{
          marginTop: 3,
          marginLeft: 16,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 22,
        }}>
        KANTIN MULTISTUDI
      </Text>
      <Text
        style={{
          marginTop: 32,
          marginLeft: 16,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 15,
        }}>
        Menu Makanan
      </Text>
        
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            flex: 1,
            padding: 3,
            marginTop: 2,
          }}>
          <Image
            source={require('../assets/icon/burger.png')}
            style={{
              marginRight: 16,
              marginTop: 3,
              width: 180,
              height: 160,
              borderRadius: 12,
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'space-evenly',
            flex: 1,
            padding: 3,
            marginTop: 2,
          }}>
          <Image
            source={require('../assets/icon/nasgor.png')}
            style={{
              marginLeft: 16,
              marginTop: 3,
              width: 180,
              height: 160,
              borderRadius: 12,
            }}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000000',
            marginLeft: 16,
          }}>
          Beef Burger
        </Text>

        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000000',
            marginRight: 121,
          }}>
          Fried Rice
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#C40001',
              marginLeft: 16,
            }}>
            Rp20.000
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#C40001',
              marginRight: 119,
            }}>
            Rp 15.000
          </Text>
        </View>
      </View>

      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            flex: 1,
            padding: 3,
            marginTop: 2,
          }}>
          <Image
            source={require('../assets/icon/jeruk.png')}
            style={{
              marginRight: 16,
              marginTop: 3,
              width: 180,
              height: 160,
              borderRadius: 12,
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            flex: 1,
            padding: 3,
            marginTop: 2,
          }}>
          <Image
            source={require('../assets/icon/kopi.png')}
            style={{
              marginLeft: 16,
              marginTop: 3,
              width: 180,
              height: 160,
              borderRadius: 12,
            }}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000000',
            marginLeft: 16,
          }}>
          Lemon ice
        </Text>

        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000000',
            marginRight: 120,
          }}>
          Ice Coffe
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#C40001',
              marginLeft: 16,
            }}>
            Rp 7.000
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#C40001',
              marginRight: 110,
            }}>
            Rp 10.000
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        // onPress={() => navigation.navigate('Detail')}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          alignItems: 'center',
          borderRadius: 6,
          backgroundColor: '#C40001',
          marginTop: 25,
          borderWidth: 1,
          zIndex: 999,
        }}>
        <Text style={{color: '#ffffff'}}>Menuju Detail</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
