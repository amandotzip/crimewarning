import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabThreeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.row}>
          <Text style={styles.settingLabel}>Distance Before Alert</Text>
          <Text style={styles.settingValue}>2.0 Miles</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.settingLabel}>Crime Score Before Alert</Text>
          <Text style={styles.settingValue}>200 Points</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.settingLabel}>Primary Notification Method</Text>
          <Text style={styles.settingValue}>SMS</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.settingLabel}>Primary Contact</Text>
          <Text style={styles.settingValue}>John Doe</Text>
        </View>

        <View style={styles.center}>
          <View style={styles.separator} 
              lightColor="#eee" 
              darkColor="rgba(255,255,255,0.1)" />
          {/* <EditScreenInfo path="/screens/TabThreeScreen.tsx" /> */}
          </View>
      </View>
    );
  }

  const backgroundColor = "#EEF5DB"

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: backgroundColor,
    },
    title: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#4F6367',
      marginTop: 20,
    },
    row: {
      backgroundColor: backgroundColor,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center'
    },
    settingLabel: {
        fontSize: 20,
        paddingRight: 25,
        marginLeft: 25,
        paddingTop: 30,
        color: '#4F6367',
    },
    settingValue: {
        fontSize: 20,   
        paddingTop: 30,
        marginRight: 25,
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
      backgroundColor: '#EEF5DB',
    }
  });
  