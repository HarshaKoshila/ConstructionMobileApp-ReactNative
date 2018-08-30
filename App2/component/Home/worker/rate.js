import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'; 
import { Item, Button, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class Rate extends React.Component {

  static navigationOptions = {  
    header: null
  }


  render() {
    return (
      <View style={styles.container}>
      <View style={{ backgroundColor: '#1aa3ff', height: 2, }}> 
          </View>

        <View  style={styles.topView}> 
         
          </View>

        <View  style={styles.centerView}> 
        <Text style={{ marginLeft: 45, fontSize: 18,fontWeight: '300', }}>Rate</Text> 
        </View>

         <View  style={styles.bottomView}> 
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff', 
  },

  topView: {
    flex: 3,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center'
  },

  centerView: {
    flex: 3,
    backgroundColor: "#ffffff", 
    justifyContent: 'center',
    alignItems: 'center'
  } ,

  bottomView: {
    flex: 1,
    backgroundColor: "#ffffff",
  } ,

  button: { 
    width: 200,
    padding: 35, 
    backgroundColor:'#007acc', 
    marginTop: 10, 
    alignSelf: 'center'
  },

  textBOx: {
    backgroundColor: "#ffffff",
    width: 250,
    height: 38,
    borderColor: 'gray', 
    borderWidth: 1,
    fontSize: 16, 
    paddingLeft: 5,
    fontWeight: '300',
    fontSize: 15,
    marginTop: 5
  }

});
