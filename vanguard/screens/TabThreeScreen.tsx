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
          <Text style={styles.settingValue}>Text</Text>
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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center'
    },
    settingLabel: {
        fontSize: 20,
/*        marginRight: 200,
        marginLeft: 50,
*/      
        marginRight: 20,
        paddingTop: 30,
        color: '#4F6367',
    },
    settingValue: {
        fontSize: 20,
/*        marginRight: 200,
        marginLeft: 50,
 */     
        marginRight: 10,
        paddingTop: 30,
        paddingLeft: 20,
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
  