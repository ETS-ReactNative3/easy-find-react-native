/*
Detail screen
*/

import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView
} from 'react-native'
import styles from './DetailStyle'
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { MapButton, BackButton } from '../../Components';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.item = this.props.navigation.state.params.item;
  }

  backButtonClicked() {
    Actions.pop()
  }

  mapButtonClicked() {
    this.props.navigation.navigate('Map')
  }

  // Render UI objects 
  render() {
    var categories = ''
    this.item.categories.forEach(element => {
      if (categories.length > 0) {
        categories = categories.concat(', ')
      }
      categories = categories.concat(element.title)
    })
    return (
      <>
        <ScrollView bounces={false}>
          <View style={styles.mainConatiner}>
            <View style={styles.topContainer}>
              <SafeAreaView></SafeAreaView>
              <BackButton onPress={() => { this.backButtonClicked() }} />
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.infoRowStyle}>
                <View style={styles.titleContainer}>
                  <Text style={styles.nameStyle}>{this.item.name}</Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Rating
                    readonly
                    type='star'
                    ratingCount={5}
                    imageSize={20}
                    style={styles.ratingStyle}
                    startingValue={this.item.rating}
                  />
                  <Text style={styles.reviewStyle}>{this.item.review_count} Reviews</Text>
                </View>
                <Text style={styles.mealsStyle}>{categories}</Text>
                <Text style={styles.priceStyle}>{this.item.price}</Text>
                <Text style={styles.addressStyle}>Open</Text>
              </View>
              <View style={styles.mapContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  region={{
                    latitude: this.item.coordinates.latitude,
                    longitude: this.item.coordinates.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.015,
                  }}
                >
                  <MapView.Marker
                    coordinate={{
                      latitude: this.item.coordinates.latitude,
                      longitude: this.item.coordinates.longitude
                    }}
                    title={this.item.name}
                  />


                </MapView>
                <View style={styles.directionButton}>
                  <MapButton
                    onPress={() => { this.mapButtonClicked() }}
                  />
                </View>
              </View>
              <View style={styles.infoRowStyle}>
                <Text style={styles.mapAddressStyle}>{this.item.location.address1}</Text>
                <Text style={styles.mapAddressStyle}>{this.item.location.city}</Text>
                <Text style={styles.mapAddressStyle}>{this.item.location.zip_code}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}


export default Detail;