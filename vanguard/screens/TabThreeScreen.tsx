import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabThreeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.body}>Distance Before Alert</Text>
        <Text style={styles.settings}>2.0 miles</Text>
        <Text style={styles.body}>Crime Score Before Alert</Text>
        <Text style={styles.body}>Primary Notification Method</Text>
        <Text style={styles.body}>Primary Contact</Text>
        <View style={styles.center}>
          <View style={styles.separator} 
              lightColor="#eee" 
              darkColor="rgba(255,255,255,0.1)" />
          {/* <EditScreenInfo path="/screens/TabThreeScreen.tsx" /> */}
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#B8D8D8',
    },
    title: {
      textAlign: 'center',
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
    settings: {
        fontSize: 20,
        marginRight: 200,
        paddingTop: 30,
        color: '#4F6367',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    center: {
      alignItems: 'center',
      backgroundColor: '#B8D8D8',
    }
  });
  