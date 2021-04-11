import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Text, View } from './components/Themed';
import { StyleSheet } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
    <View style={styles.container}>
      <StatusBar
      />
      <Text style={styles.title}>
        Welcome to React Native!
      </Text>
      <Text style={styles.title}>
        To get started, edit App.js
      </Text>
      <Text style={styles.title}>
        Hello
      </Text>
    </View>)
    // null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8D8D8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#EEF5DB',
    color: '#4F6367',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#EEF5DB',
  },
});