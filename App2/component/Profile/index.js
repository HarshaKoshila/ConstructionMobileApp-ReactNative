import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Item, Button, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class Profile extends React.Component {

  static navigationOptions = {
    title: 'Profile'
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={styles.container}>
        <View style={{ backgroundColor: '#1aa3ff', height: 2, }}>
        </View>

        <View style={styles.topView}>
          <TouchableOpacity >
            <Image
              style={{ marginTop: 0, width: 100, height: 100,borderRadius: 100, }}
              source={require('../../Images/user.jpg')}
            />
          </TouchableOpacity>
          <Image
              style={{ marginTop: 5, width: 100, height: 20 }}
              source={require('../../Images/rate.png')}
            />
          <Text style={{marginTop: 5,fontSize: 15,fontWeight: '100',color: "#ffffff" }}>W.G Siripala de Silva</Text>
          <Text style={{fontSize: 12,fontWeight: '100',color: "#ffffff"}}>Malabe</Text>

        </View>

        <View style={styles.centerView}>
          <Text style={{ marginLeft: 5,fontSize: 12,color: "#ffffff" }}>Full name :W.G Siripala Silva</Text>
          <Text style={{ marginLeft: 5,fontSize: 12,color: "#ffffff" }}>Field :Mason</Text>
          <Text style={{ marginLeft: 5,fontSize: 12,color: "#ffffff" }}>NIC :12346789V</Text>
          <Text style={{ marginLeft: 5,fontSize: 12,color: "#ffffff" }}>Telephone :077-4567893</Text>
          <Text style={{ marginLeft: 5,fontSize: 12,color: "#ffffff" }}>Age :55</Text>
          <Text style={{ marginLeft: 5,fontSize: 12,color: "#ffffff" }}>Gender :Male</Text>
          <Text style={{ marginLeft: 5,fontSize: 12,color: "#ffffff" }}>Working experiences :5 years</Text> 
        </View>

        <View style={styles.bottomView}>
        </View>
      </View>

      <View style={{flex: 0.1, backgroundColor: 'white'}}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#0088cc',
  },

  topView: {
    flex: 2, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0088cc'
  },

  centerView: {
    flex: 2,
    //justifyContent: 'center',
    // alignItems: 'center'
  },

  bottomView: {
    flex: 1, 
  },

  button: {
    width: 200,
    padding: 35,
    backgroundColor: '#007acc',
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
