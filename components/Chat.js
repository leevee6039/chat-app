import React from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    // Set name as title chat
    let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: `${name} has entered the chat.`,
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }

  // Add message to the messages state
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  // Customize the color of the sender bubble
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#FFE5B4',
          },
          right: {
            backgroundColor: '#00abc0',
          },
        }}
      />
    );
  }

  render() {
    let { color } = this.props.route.params;

    return (
      <>
        <View style={[{ backgroundColor: color }, styles.container]}>
          <GiftedChat
            renderBubble={this.renderBubble.bind(this)}
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{ _id: 1 }}
          />
          {/* Avoid keyboard to overlap text messages on older Andriod versions */}
          {Platform.OS === 'android' ? (
            <KeyboardAvoidingView behavior="height" />
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
