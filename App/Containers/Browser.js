import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Button } from 'react-native-elements'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import styles from './Styles/LaunchScreenStyles'

let selected = '#323232'
let unselected = 'rgba(0, 99, 0, 0)'
let text = 'Artist: {string} - Song: {string} - '

let uiState = {buttonHeight: 100, height: '%100', width: 100}

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
                height: uiState.buttonHeight,
                marginTop: 5
              }}
              title={text.concat(button)}
              onPress={() => this.selectButton(button)} />
          ))}
          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
