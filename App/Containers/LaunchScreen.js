import React, { Component } from 'react'
import { Image, View } from 'react-native'

import { Images } from '../Themes'

import styles from './Styles/LaunchScreenStyles'
import Browser from './Browser'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <Browser />
      </View>
    )
  }
}
