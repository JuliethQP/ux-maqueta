import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  Select,
  Modal,
  Button,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.header}>
        <Image style={styles.iconUser} source={require('../usuario.png')} />
        <Image
          style={styles.iconLogo}
          source={require('../logoApp_edited.png')}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu');
          }}>
          <Image
            style={styles.iconButton}
            source={require('../menuIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function CrearAlarma({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Body />
    </View>
  );
}

function Body() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [selectedOption, setSelectedOption] = useState('none');
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'México', label: 'México' },
  ];

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };
  const [selected, setSelected] = React.useState('');

  const data = [
    { key: '1', value: 'Correo electrónico' },
    { key: '2', value: 'Notificación celular' },
  ];

  const data2 = [
    { key: '1', value: '5' },
    { key: '2', value: '10' },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crear alarma</Text>
      <View style={styles.containerSelect}>
        <Text>Franja horaria:</Text>
        <View style={styles.containerSwitch}>
          <Text style={styles.label}>A.M</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#B285E3' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            style={styles.switchStyle}
            value={checked}
            onValueChange={(value) => setChecked(value)}
          />
          <Text style={styles.labelPm}>P.M</Text>
        </View>
      </View>
      <View style={styles.containerSelect}>
        <Text syle={styles.textLabel}>Hora:</Text>
        <TextInput
          style={styles.inputHora}
          value={name}
          onChange={(value) => setName(value)}
          placeholder="07:20"
          borderWidth={1}
          //  placeholderTextColor="#b8b8b8"
          placeholderTextColor="black"
          placeholderTextStyles={{ paddingLeft: 10,     color:'#0000' }}
     
        />
      </View>
      <View>
        <View style={styles.containerSelect}>
          <Text>Tipo de notificación:</Text>
          <SelectList
            placeholder="Selecciona la frecuencia"
            setSelected={(val) => setSelected(val)}
            value={selected}
            data={data}
            style={styles.selectItems}
            fontFamily="Inter"
            boxStyles={{
              borderRadius: 2,
              fontFamily: 'Inter',
              width: 214,
              height: 40,
              borderColor: '#B285E3',
              fontSize: 16,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              overflow: 'hidden',
              marginTop: 5,
            }}
            dropdownStyles={{
              borderRadius: 2,
              borderColor: '#B285E3',
              fontFamily: 'Inter',
              fontSize: 16,
              width: 214,
            }}
            dropdownTextStyles={{
              fontFamily: 'Inter',
              fontSize: 16,
            }}
            placeholderTextColor="#B8B8B8"
            placeholderTextStyles={{
              fontFamily: 'Inter',
              color: '#b8b8b8',
            }}
          />
        </View>
        <View style={styles.containerSelect}>
          <Text>Frecuencia de alarma en minutos:</Text>
          <SelectList
            placeholder="Selecciona la frecuencia"
            setSelected={(val) => setSelected(val)}
            value={selected}
            data={data2}
            style={styles.selectItems}
            fontFamily="Inter"
            boxStyles={{
              borderRadius: 2,
              fontFamily: 'Inter',
              width: 214,
              height: 40,
              borderColor: '#B285E3',
              fontSize: 16,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              overflow: 'hidden',
              marginTop: 5,
            }}
            dropdownStyles={{
              borderRadius: 2,
              borderColor: '#B285E3',
              fontFamily: 'Inter',
              fontSize: 16,
              width: 214,
            }}
            dropdownTextStyles={{
              fontFamily: 'Inter',
              fontSize: 16,
            }}
            placeholderTextStyles={{
              fontFamily: 'Inter',
              color: '#888',
            }}
          />
        </View>
      </View>
      <View style={styles.containerbotton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textbotton}> Crear</Text>
        </TouchableOpacity>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para la modal
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  containerbotton: {
    flex: 1,
    marginLeft: 70,
    marginTop: 600,
   position: 'absolute',
  },
  button: {
    width: 129,
    height: 32,
    borderRadius: 2,
    backgroundColor: '#B285E3',
    marginLeft: 50,
  },
  textbotton: {
    fontFamily: 'Inter',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
    fontWeight: '400',
  },
  textLabel: {
    color: '#000',

    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: 'normal',
  },
  switchStyle: {
    trackColor: 'blue',
    color: 'blue',
    marginLeft: 10,
  },
  iconUser: {
    width: 34,
    height: 32,
    marginLeft: 29,
    marginTop: 15,
  },
  iconLogo: {
    width: 142,
    height: 62,
    marginLeft: 60,
  },
  iconButton: {
    width: 27,
    height: 23,
    marginLeft: 60,
    marginTop: 20,
  },
  header: {
    borderBottomColor: '#CDA8F0',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  containerSelect: {
    marginLeft: 75,
    marginTop: 25,
  },
  selectItems: {
    borderColor: '#B285E3',
  },
  inputHora: {
    borderColor: '#B285E3',
    width: 214,
    height: 40,
    marginTop: 5,
    color:'#0000'
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: '#AB7AE0',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 132,
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  labelPm: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    marginLeft: 10,
  },
  label: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 'normal',
    textTransform: 'capitalize',
  },
});
