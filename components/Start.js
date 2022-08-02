import React, { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import BackgroungImage from '../assets/img/Background_Image.png';

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
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#fff',
  },
  box: {
    backgroundColor: '#fff',
    width: '88%',
    alignItems: 'center',
    height: '44%',
    justifyContent: 'space-evenly',
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
  },
  text: {
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
  },
  colorContainer: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#fff',
  },
});
