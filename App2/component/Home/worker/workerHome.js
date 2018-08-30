import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import { Item, Button, Input } from 'native-base';
import { Icon } from 'react-native-vector-icons/Entypo'


export default class WorkerHome extends React.Component {

  static navigationOptions = {
    title: 'Worker Dashboard',

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#1aa3ff', height: 2, }}>
        </View>

        <View style={styles.topView}>
          <Image
            style={{ marginTop: 30, width: 350, height: 200, }}
            source={require('../../../Images/work.jpg')}
          />
        </View>

        <View style={styles.centerView}>
          <Text style={{ fontSize: 18, fontWeight: '300' }}>Suggestions Courses</Text>
          <Text style={{ marginLeft: 20, fontSize: 12, color: '#666666', }}>With the diploma-level course in Electrical Studies, you will learn the basics of the electrical trade, including electrical safety, circuits and electrical theory. ... Other Alison online electrical courses offer basic introductions to electrical.</Text>

          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: '300' }}>Improve Your Work</Text>
          <Text style={{ marginLeft: 20, fontSize: 12, color: '#666666', }}>Now after Click on Trim you have to click on that line with which that particular extra portion of Line in Connected.Then press Enter then click on that extra portion line which you want to delete.after clicking on that portion of extra line it will be deleted. </Text>

          <View style={{ alignItems: 'center',justifyContent: 'center', marginTop: 15, marginLeft: 5, marginBottom: 2, marginRight: 5, backgroundColor: "#6699ff" }}>
            <Text style={{ marginTop: 20, fontSize: 18, fontWeight: '300',color: '#ffffff' }}>Increase Your Rate </Text>
            <Text style={{ marginLeft: 20, fontSize: 12, color: '#ffffff', }}>Ve are going to remove small line which arrow is pointing now click on Modify then click on Trim.Then select those lines with which that small line is connectted.then click Enter.</Text>
            <Text/>
            <Text/>
          </View>
        </View>

        <View style={styles.bottomView}>

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
    flex: 2,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center'
  },

  centerView: {
    flex: 3,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomView: {
    flex: 0.2,
    backgroundColor: "#ffffff",
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
