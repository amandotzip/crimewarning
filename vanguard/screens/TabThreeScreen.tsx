import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabThreeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.settingValue}>
          <Text style={styles.settingLabel}>Distance Before Alert</Text>
        </View>
        <Text style={styles.settingLabel}>Crime Score Before Alert</Text>
        <Text style={styles.settingLabel}>Primary Notification Method</Text>
        <Text style={styles.settingLabel}>Primary Contact</Text>
        <View style={styles.center}>
          <View style={styles.separator} 
              lightColor="#eee" 
              darkColor="rgba(255,255,255,0.1)" />
          {/* <EditScreenInfo path="/screens/TabThreeScreen.tsx" /> */}
          </View>
      </View>
    );
  }

  const backgroundColor = "#B8D8D8"

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: backgroundColor,
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4F6367',
    },
    row: {
      backgroundColor: backgroundColor,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      justifyContent: 'space-around'
    },
    settingLabel: {
        fontSize: 20,
        marginRight: 200,
        paddingTop: 30,
        marginLeft: 50,
        color: '#4F6367',
    },
    settingValue: {
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
  