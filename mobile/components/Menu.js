import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Link,
} from 'react-native';


export default function Menu({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <Body navigation={navigation} />
      <Footer />
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          flexDirection: 'row',
          marginLeft: 24,
          marginTop: 20,
        }}>
        <Image style={styles.clockicon} source={require('../salir.png')} />
        <Text style={styles.crearalarmatext}> Salir</Text>
      </View>
    </View>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.icon} source={require('../usuario.png')} />
      <Text style={styles.name}>Emilia Perez</Text>
      <View style={styles.containerbotton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbotton}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function Body({navigation}) {
  return ( 
    <View style={styles.body}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          flexDirection: 'row',
          marginLeft: 24,
          marginTop: 20,
        }}>
        <Image style={styles.clockicon} source={require('../clock.png')} />
        <TouchableOpacity
          onPress={() => {     
             navigation.navigate('CrearAlarma');
          }}>
          <Text style={styles.crearalarmatext}> Crear alarma</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          flexDirection: 'row',
          marginLeft: 24,
          marginTop: 20,
        }}>
        <Image
          style={styles.clockicon}
          source={require('../DatabaseFilled.png')}
        />
        <Text style={styles.crearalarmatext}> Ver mis alarmas</Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          flexDirection: 'row',
          marginLeft: 24,
          marginTop: 20,
        }}>
        <Image
          style={styles.clockicon}
          source={require('../PieChartFilled.png')}
        />
        <Text style={styles.crearalarmatext}> Estadisticass</Text>
      </View>      
    </View>
    
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 75,
    borderTopWidth: 1,
    borderTopColor: '#CDA8F0',
  },
  header: {
    borderBottomColor: '#CDA8F0',
    borderBottomWidth: 1,
  },
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f6edfd',
  },
  content: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
  },
  icon: {
    marginLeft: 24,
    width: 88,
    height: 86,
    marginTop: 80,
  },
  name: {
    marginLeft: 19,
    marginTop: -46,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textTransform: 'capitalize',
  },
  button: {
    width: 73,
    height: 24,
    borderRadius: 2,
    backgroundColor: '#B285E3',
    marginTop: -50,
    marginLeft: 50,
  },
  textbotton: {
    fontFamily: 'Inter',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginTop: 2,
  },
  containerbotton: {
    flex: 1,
    marginLeft: 109,
    marginTop: 60,
  },
  clockicon: {
    marginLeft: 5,
    width: 25,
    height: 24,
    marginTop: 5,
  },
  crearalarmatext: {
    marginLeft: 15,
    marginTop: 5,

    color: '#B285E3',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
});
