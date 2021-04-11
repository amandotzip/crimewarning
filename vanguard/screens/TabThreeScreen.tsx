import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabThreeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.body}>Distance Before Alert</Text>
        <Text style={styles.body}>Crime Score Before Alert</Text>
        <View style={styles.separator} 
            lightColor="#eee" 
            darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabThreeScreen.tsx" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EEF5DB',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4F6367',
    },
    body: {
        fontSize: 20,
        marginRight: 200,
        paddingTop: 30,
        marginLeft: 50,
        color: '#4F6367',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  