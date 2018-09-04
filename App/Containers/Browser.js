import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button, Slider } from 'react-native-elements'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import styles from './Styles/LaunchScreenStyles'
import {Fonts} from '../Themes'

let selected = '#323232'
let unselected = 'rgba(0, 99, 0, 0)'
let text = 'Artist: {string} - Song: {string} - '

let uiState = {buttonHeight: 80, height: '%100', width: 100}

export default class Browser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      borderWidth: 0,
      buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      selected: -1,
      track: -1
    }
  }

  addButton = () => {
    this.state.buttons.push(this.state.buttons.length)
  };

  deleteButton = (index) => {
    this.state.buttons = this.state.buttons.filter(m => {
      return m !== index
    })
  };

  getButtonSelected = (index) => {
    if (index === this.state.selected) {
      return selected
    } else {
      return unselected
    }
  };

  selectButton = (index) => {
    this.state.selected = index
    this.forceUpdate()
  };

  render () {
    return (
      <View style={styles.mainContainer} >
        <ScrollView style={styles.container} >
          {this.state.buttons.map((button, index) => (
            <Button
              large
              rounded
              buttonStyle={{
                backgroundColor: this.getButtonSelected(button),
                borderWidth: this.state.borderWidth,
                borderRadius: 5,
                fontFamily: Fonts.type.base,
                height: uiState.buttonHeight,
                marginTop: 5
              }}
              title={text.concat(button)}
              onPress={() => this.selectButton(button)}
            />
          ))}
          <DevscreensButton />
        </ScrollView>
        <Slider
          style={{
            backgroundColor: '#323232'
          }}
          thumbStyle={{
            backgroundColor: '#323232',
            borderColor: 'rgba(150, 150, 150, 0.6)',
            borderWidth: 2,
            borderRadius: 5,
            height: 40,
            width: 10
          }} />
        <Text style={{
          backgroundColor: '#323232',
          color: 'white',
          fontSize: 20,
          fontFamily: Fonts.type.base,
          height: 40,
          textAlign: 'center'
        }} >
          {text.concat(this.state.selected)}
        </Text>
      </View>
    )
  }
}
