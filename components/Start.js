import React, { useState } from 'react';
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import { TextInput } from 'react-native-paper';

import BackgroungImage from '../assets/img/Background_Image.png';
import avatarIcon from '../assets/svg/icon.svg';

const colors = {
  black: '#090C08',
  purple: '#474056',
  grey: '#8A95A5',
  green: '#B9C6AE',
};

export default function Start(props) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  return (
    <View style={styles.container}>
      {/* Image Background */}
      <ImageBackground
        source={BackgroungImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Chat App</Text>

        <View style={styles.box}>
          {/* Input box to set user name passed to chat screen */}
          <TextInput
            // left={<TextInput.Icon name={avatarIcon} />}
            style={styles.input}
            placeholder={` Your Name`}
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={[styles.text]}>Choose Background Color:</Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={[{ backgroundColor: colors.black }, styles.colorButton]}
              onPress={() => setColor(colors.black)}
            />
            <TouchableOpacity
              style={[{ backgroundColor: colors.purple }, styles.colorButton]}
              onPress={() => setColor(colors.purple)}
            />
            <TouchableOpacity
              style={[{ backgroundColor: colors.grey }, styles.colorButton]}
              onPress={() => setColor(colors.grey)}
            />
            <TouchableOpacity
              style={[{ backgroundColor: colors.green }, styles.colorButton]}
              onPress={() => setColor(colors.green)}
            />
          </View>

          <Pressable
            onPress={() => props.navigation.navigate('Chat', { name, color })}
            style={({ pressed }) => [
              { backgroundColor: pressed ? '#585563' : '#757083' },
              styles.button,
            ]}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </Pressable>

          {/* <Button
            style={styles.button}
            title="Start Chatting"
            color="#757083"
            onPress={() => props.navigation.navigate('Chat', { name, color })}
          /> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#fff',
    margin: '10%',
  },
  box: {
    backgroundColor: '#fff',
    width: '88%',
    alignItems: 'center',
    height: '44%',
    justifyContent: 'space-evenly',
    margin: '10%',
    // paddingVertical: 10,
  },
  input: {
    height: 50,
    width: '88%',
    borderColor: 'gray',
    borderWidth: 1,
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
    paddingHorizontal: 10,
    // marginVertical: 10,
  },
  text: {
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
    alignItems: 'baseline',
    // paddingVertical: 10,
  },
  colorContainer: {
    width: '88%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    // paddingVertical: 10,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  button: {
    height: 50,
    width: '88%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#fff',
  },
});
