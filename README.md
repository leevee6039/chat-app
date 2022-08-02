# chat-app

## Description

To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

### User Stories

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.

- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.

- As a user, I want to send images to my friends to show them what I’m currently doing.

- As a user, I want to share my location with my friends to show them where I am.

- As a user, I want to be able to read my messages offline so I can reread conversations at any time.

- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

### Key Features

- A page where users can enter their name and choose a background color for the chat screen before joining the chat.

- A page displaying the conversation, as well as an input field and submit button.

- The chat must provide users with two additional communication features: sending images and location data.

- Data gets stored online and offline.

### What technology did I use and why?

I am using **React Native** to create the mobile application due to following considerations:

- Develop and Maintain One Codebase

- Large and Active Community

- Web Developers Can Use Existing Skills

I am using **XCode** as an iOS simulator and **Android Studio** as an Andriod emulator.

Using **expo** as development to develop and test the app.

### User Stories

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.

- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.

- As a user, I want to send images to my friends to show them what I’m currently doing.

- As a user, I want to share my location with my friends to show them where I am.

- As a user, I want to be able to read my messages offline so I can reread conversations at any time.

- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

# Development Process

## Setup Expo as Development Environment

1. Install Expo CLI

```
npm insatll expo-cli --location=global
```

2. Create a new expo project

```
expo init [projectname]
```

3. Navigate to the project

```
cd [projectname]
```

4. Start expo project

```
npm start or expo start
```

### Install React Navigation library to navigate between screens

1. Navigate to project folder and run

```
npm install react-navigation
```

2. Install necessary dependencies

```
npm install @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

### Set up Android Studio as Android Emulator

1. Download Android Studio

2. Make sure 'Android Virtual Device' is installed

3. Add Android SDK Location to ~/.zshrc file

```
export ANDROID_SDK=/Users/myuser/Library/Android/sdk
export PATH=/Users/myuser/Library/Android/sdk/platform-tools:$PATH
```

4. Create virtual device and click play to start

5. Select 'Run app on Android' in Expo to run app on virtual device