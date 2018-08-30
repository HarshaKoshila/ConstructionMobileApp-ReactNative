import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, DrawerLayoutAndroid,Picker } from 'react-native';
import { Item, Button, Input } from 'native-base';
import { Icon } from 'react-native-vector-icons/Entypo'


export default class Search extends React.Component {

  static navigationOptions = {
    title: 'Search', 
  }

  constructor(props) {
    super(props);
    this.state = {
        nav: props.navigation
    };
    const {state} = props.navigation;
    console.log("PROPS " + state.params.user);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#1aa3ff', height: 2, }}>
        </View>

        <View style={styles.topView}>
          <Image
            style={{ marginTop: 30, width: 350, height: 200, }}
            source={require('../../Images/work.jpg')}
          />
        </View>

        <View style={styles.centerView}>
        <View style={{flexDirection: "row"}}>
          <Text style={{ fontSize: 15, fontWeight: '300' }}>Select city :</Text>
          <Picker
              selectedValue={this.state.city}
              style={{ height: 38, width: 200 }}
              onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>
              <Picker.Item label={this.state.language == 'Sinhala' ? `නගරය තෝරා ගන්න` : (this.state.language == 'Tamil' ? `நகரம் தேர்ந்தெடு` : `Select city`)}  value="select" color="#8c8c8c" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `අම්පාර` : (this.state.language == 'Tamil' ? `அம்பாறை` : `Ampara`)} value="Ampara" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `අනුරාධපුර` : (this.state.language == 'Tamil' ? `அனுராதபுரம்` : `Anuradhapura`)} value="Anuradhapura" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `බදුල්ල` : (this.state.language == 'Tamil' ? `பதுளை` : `Badulla`)} value="Badulla" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `මඩකලපුව` : (this.state.language == 'Tamil' ? `மட்டக்களப்பு` : `Batticola`)} value="Batticaloa" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `කොළඹ` : (this.state.language == 'Tamil' ? `கொழும்பு` : `Colombo`)} value="Colombo" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `ගාල්ල` : (this.state.language == 'Tamil' ? `காலி` : `Galle`)} value="Galle" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `ගම්පහ` : (this.state.language == 'Tamil' ? `கம்பஹா` : `Gampaha`)} value="Gampaha" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `මාතර` : (this.state.language == 'Tamil' ? `மாத்தறை` : `Matara`)} value="Matara" /> 
              <Picker.Item label={this.state.language == 'Sinhala' ? `යාපනය` : (this.state.language == 'Tamil' ? `யாழ்ப்பாண` : `Jaffna`)} value="Jaffna" />
            </Picker>
            </View>
            <View style={{flexDirection: "row"}}>
            <Text style={{ fontSize: 15, fontWeight: '300' }}>Qualification :</Text>
            </View>
            <View style={{flexDirection: "row"}}>
            <Text style={{ fontSize: 15, fontWeight: '300' }}>Low price :</Text>
            </View>
            <View style={{flexDirection: "row"}}>
            <Text style={{ fontSize: 15, fontWeight: '300' }}>Number of experience :</Text>
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
    //justifyContent: 'center',
    //alignItems: 'center'
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
