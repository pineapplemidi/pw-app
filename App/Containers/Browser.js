import React, { Component } from 'react'
import { ScrollView, Image, View } from 'react-native'
import { Button } from 'react-native-elements'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

import styles from './Styles/LaunchScreenStyles'

let selected = 'rgba(92, 99, 216, 1)'
let unselected = 'rgba(0, 99, 0, 0)'
let text = 'Artist: {string} - Song: {string} - '

export default class Browser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      selected: -1
    }
  }

  buttonSelect = (index) => {
    this.state.selected = index
    this.forceUpdate()
  };

  isSelected = (index) => {
    if (index === this.state.selected) {
      return selected
    } else {
      return unselected
    }
  };

  addButton = () => {
    this.state.buttons.push(this.state.buttons.length)
  }

  deleteButton = (index) => {
    this.state.buttons = this.state.buttons.filter(m => {
      return m !== index
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          {this.state.buttons.map((button, index) => (
            <Button
              large
              rounded
              buttonStyle={{
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 5,
                height: 100,
                backgroundColor: this.isSelected(button)
              }}
              title={text.concat(button)}
              onPress={() => this.buttonSelect(button)} />
          ))}
          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
