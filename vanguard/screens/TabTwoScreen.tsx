import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { CourierClient } from "@trycourier/courier";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
export default class TabTwoScreen extends React.Component {
  courier = CourierClient({
    authorizationToken: "dk_prod_FQV2FZV89CMQD9HXP6VKM85MQJNR",
  });
  state = {
    error: false,
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    reports: [],
    crime_score: "⌛Please wait retrieving crime score.⏳",
  };
  async _get_location() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    this.setState({ error: status !== "granted" });

    if (status !== "granted") {
      console.log("Location not given");
      // await Permissions.askAsync(Permissions.LOCATION)
    } else {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // -76.9378 38.9897

      this._center_map_on(latitude, longitude);
      // this._center_map_on(38.9897, -76.9378);
    }
  }
  _center_map_on(latitude: Number, longitude: Number) {
    this.setState({
      region: {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    });
    this.get_crime_info();
  }
  get_crime_info() {
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
        apikey: "a79c51e7dd2a4aedd82eb2a65f59b18a",
      },
    };
    console.log(this.state.region.longitude, this.state.region.latitude);
    // const mile_longitude = 1/54.6
    // const mile_latitude = 1/1.15
    fetch(
      `https://api.gateway.attomdata.com/areaapi/v2.0.0/hierarchy/lookup?WKTString=POINT(${this.state.region.longitude}%20${this.state.region.latitude})&geoType=ZI`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:",data);
        const area_id = data.response.result.package.item[0].id;
        fetch(
          `https://api.gateway.attomdata.com/communityapi/v2.0.0/area/full?AreaId=${area_id}`,
          options
        )
          .then((res) => res.json())
          .then((data) => {
            const crime_rate_over_nate_avg = parseInt(
              data.response.result.package.item[0].cocrmcytotc
            );
            this.setState({
              crime_score: `Crime Score @ Current Location:${crime_rate_over_nate_avg}`,
            });
            this.send_alert(crime_rate_over_nate_avg);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  send_alert(crime_rate_over_nate_avg) {
    if (crime_rate_over_nate_avg >= 200) {
      this.courier
        .send({
          eventId: "M230QKVSP04E1PK5XVQ7Y04BG730",
          recipientId: "cce68751-102c-44ce-bb99-1af2d3d13287",
          profile: {
            phone_number: "240-479-1412",
          },
          data: {
            name: "Ferzam Mohammad",
          },
          override: {},
        })
        .then(({ messageId }) => console.log(messageId))
        .catch((err) => console.error(err));
    }
  }
  // mapMarkers = () => {
  //   return this.state.reports.map((report) => (
  //     <Marker
  //       key={report.id}
  //       coordinate={{ latitude: report.lat, longitude: report.lon }}
  //       title={report.location}
  //       description={report.comments}
  //     ></Marker>
  //   ));
  // };
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
        <Text style={styles.title}>
          {this.state.error
            ? "Location access wasn't given (╯°□°）╯︵ ┻━┻"
            : this.state.crime_score}
        </Text>
        <MapView style={styles.map} region={this.state.region}>
          <Marker
            draggable
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
            onDragEnd={(e) => {
              console.log(e.nativeEvent.coordinate);
            }}
          />
        </MapView>
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
    backgroundColor: "#B8D8D8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4F6367",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 75,
  },
});
