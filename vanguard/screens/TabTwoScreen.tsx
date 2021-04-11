import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView from "react-native-maps";
export default class TabTwoScreen extends React.Component {
  map = null
  state = { error: false,
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },};
  async _get_location() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    this.setState({error:status !== "granted"})

    if (status !== "granted") {
      console.log("Location not given");
      // await Permissions.askAsync(Permissions.LOCATION)
    } else {
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
     this._center_map_on(latitude,longitude)

    }
  }
  _center_map_on(latitude:Number,longitude:Number){
    this.setState({ region:{
       latitude:latitude,
      longitude:longitude,
       latitudeDelta: 0.003,
      longitudeDelta: 0.003,} });
  }
  get_crime_info(){
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'apikey': "a79c51e7dd2a4aedd82eb2a65f59b18a"
      }
    };
    fetch(`https://api.gateway.attomdata.com/areaapi/v2.0.0/hierarchy/lookup?WKTString=POINT(${-this.state.region.longitude}%20${this.state.region.latitude})&geoType=ZI`,options)
    .then(response => response.json())
    .then((data=>{
      console.log('Success:', data);
    })).catch((error) => {
      console.error('Error:', error);
    });
  }
  componentDidMount() {
    this._get_location();
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {/* <Text style={styles.title}>
          Location:{this.state.error?"Location access wasn't given (╯°□°）╯︵ ┻━┻"  : ""+this.state.region.latitude+","+this.state.region.longitude}}
        </Text> */}
        <MapView style={styles.map}
        region={this.state.region}
    />
        {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#B8D8D8',
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: '#4F6367',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
