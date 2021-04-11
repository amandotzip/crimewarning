import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { CourierClient } from "@trycourier/courier";

export default class TabOneScreen extends React.Component {

  /*
  // Email test run with SendGrid
  async sendStuff() {
      const courier = CourierClient({ authorizationToken: "dk_prod_FQV2FZV89CMQD9HXP6VKM85MQJNR" });
      courier.send({
        eventId: "WZZ8TRS0CMM5FXK1R0AT4A1VE8HK",
        recipientId: "e0e8200c-a29f-4bf4-ae9f-99a681e7251c",
        profile: {
          email: "ferzammohammad99@gmail.com",
        },
        data: {
          name: "Ferzam Mohammad",
          email: "ferzammohammad99@gmail.com"
        },
        override: {
        },
      }).then(({messageId}) => console.log(messageId))
          .catch(err => console.error(err));
  }
  */

  // Function which called whenever TabOneScreen component is mounted (when screen loads)
  // Can copy and paste most of the generated Courier code into here.
  componentDidMount = () => {
      const courier = CourierClient({ authorizationToken: "dk_prod_FQV2FZV89CMQD9HXP6VKM85MQJNR" });
      courier.send({
        eventId: "M230QKVSP04E1PK5XVQ7Y04BG730",
        recipientId: "cce68751-102c-44ce-bb99-1af2d3d13287",
        profile: {
          phone_number: "240-479-1412",
        },
        data: {
          name: "Ferzam Mohammad",
        },
        override: {
        },
      }).then(({messageId}) => console.log(messageId))
      .catch(err => console.error(err));
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
      </View>
    );
  }
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