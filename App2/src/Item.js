import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Button, Input } from 'native-base';
import { DrawerActions } from 'react-navigation';

class Item extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render () {
    return (
      <View style={styles.container}>
       <Button style={styles.button} onPress={() => this.props.navigation.navigate('ItemList')}>
          <Text style={{ marginLeft: 45, fontSize: 18, color: '#FFF',fontWeight: '300', }}>Press</Text> 
         </Button>
        <Text style={styles.text}>Item</Text>
      </View>
      )
  }
}

export default Item

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
