import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Chat(props) {
  let { name, color } = props.route.params;

  // set the screen title to the user name enetred in the start screen
  useEffect(() => {
    props.navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[{ backgroundColor: color }, styles.container]}>
      <Text style={styles.text}>Hello Chat Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ff9899',
  },
});
