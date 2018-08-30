import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, AppRegistry, Picker, ScrollView } from 'react-native';
import { Button, Item } from 'native-base';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux'
import { RNS3 } from 'react-native-aws3';

import styles from './Style'
import { submitData } from '../../action/registerUser';
import AWSKEY from '../../aws_key'

class Worker extends React.Component {

  static navigationOptions = {
    title: 'Sign up'
  }

  constructor(props) {
    super(props);
    this.state = {
      language: 'English',
      field: '',
      city: '',
      //city: ['Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kaluthara', 'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunagala', 'Manner', 'Matale', 'Matara'],
      image: null,
      imagURL: null,
    };
    const { state } = props.navigation;
    console.log('Props ', state.params.user)
  }



  componentWillMount() {
    this.setState({ language: this.props.language })
  }


  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      const file = {
        uri: result.uri,
        name: "profile image" + result.width,
        type: "image/png"
      }

      const config = {
        keyPrefix: "profile/",
        bucket: "construction2018research",
        region: "us-east-2",
        accessKey: AWSKEY.AccessKeyID,
        secretKey: AWSKEY.SecretAccessKey,
        successActionStatus: 201
      }

      RNS3.put(file, config).then(response => {
        if (response.status !== 201)
          throw new Error("Failed to upload image to S3");
        this.setState({ imageURL: response.body.postResponse.location, image: result.uri })
      });
    }

  };

  submit = () => {
    const data = {
      'first_name': this.state.first_name,
      'last_name': this.state.last_name,
      'NIC': this.state.NIC,
      'tele': this.state.tele,
      'birthDate': this.state.birthDate,
      'gender': this.state.gender,
      'city': this.state.city,
      'field': this.state.field,
      'experience': this.state.experience,
      'certification': this.state.certification,
      'userName': this.state.userName,
      'password': this.state.password,
      'profileImage': this.state.imageURL
    }

    submitData(data); 

  }

  render() {
    let { image } = this.state;
    return (
      <ScrollView>
        <View style={{ ...styles.container }}>
          <View style={{ ...styles.topView }}>

            <View style={{ backgroundColor: '#1aa3ff', height: 2, }}>
            </View>
          </View>


          <View style={{ ...styles.centerView }}>
            <View style={{ backgroundColor: '#d0d3d8', height: 2, }}>
            </View>
            <TouchableOpacity onPress={this._pickImage}>
              <View style={{ marginTop: 10, marginLeft: 60, width: 150, height: 150, borderRadius: 100, backgroundColor: '#538cc6' }}>
                {image &&
                  <Image source={{ uri: image }}
                    style={{ width: 150, height: 150, borderRadius: 100, }}
                  />}
                {image == null ? <Text style={{ color: 'white', fontWeight: "300", fontSize: 18, position: 'absolute', marginLeft: 42, marginTop: 75 }}>{this.state.language == 'Sinhala' ? `ඔබේ මුහුණ` : (this.state.language == 'Tamil' ? `உங்கள்` : `Upload`)}</Text> : <Text style={{ color: 'white', fontWeight: "300", fontSize: 18, position: 'absolute', marginLeft: 42, marginTop: 75 }}>Change</Text>}
                <Text style={{ color: 'white', fontWeight: "300", fontSize: 16, position: 'absolute', marginLeft: 10, marginTop: 95 }}>{this.state.language == 'Sinhala' ? `ඡායාරූපය දෙන්න` : (this.state.language == 'Tamil' ? `சுயவிவரத்தை பதிவேற்றவும்` : `your profile photo`)} </Text>
              </View>
            </TouchableOpacity>
            <TextInput style={{ ...styles.textBOx, marginTop: 20, }} onChangeText={(text) => this.setState({ first_name: text })} placeholder={this.state.language == 'Sinhala' ? `පළමු නම` :(this.state.language == 'Tamil' ? `முதல் பெயர்` : `First name`)} placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>
            <TextInput style={{ ...styles.textBOx, marginTop: 20, }} onChangeText={(text) => this.setState({ last_name: text })} placeholder={this.state.language == 'Sinhala' ? `අවසන් නම` : (this.state.language == 'Tamil' ? `கடைசி பெயர்` : `Last name`)}  placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>
            <TextInput style={{ ...styles.textBOx, }} onChangeText={(text) => this.setState({ NIC: text })} placeholder={this.state.language == 'Sinhala' ? `හැඳුනුම්පත් අංකය` : (this.state.language == 'Tamil' ? `தே.அ.அ` : `NIC`)} placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>
            <TextInput style={{ ...styles.textBOx, }} onChangeText={(text) => this.setState({ tele: text })} placeholder={this.state.language == 'Sinhala' ? `දුරකථන අංකය` : (this.state.language == 'Tamil' ? `தொலைபேசி எண்` : `Telephone number`)}  placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>
            <TextInput style={{ ...styles.textBOx, }} onChangeText={(text) => this.setState({ birthDate: text })} placeholder={this.state.language == 'Sinhala' ? `උපන්දිනය` : (this.state.language == 'Tamil' ? `பிறந்த தேதி` : `Birth date`)} placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>
            <TextInput style={{ ...styles.textBOx, }} onChangeText={(text) => this.setState({ gender: text })} placeholder={this.state.language == 'Sinhala' ? `ස්ත්රී පුරුෂ භාවය` :(this.state.language == 'Tamil' ? `பாலினம்` : `Gender`)}  placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>

            <Picker
              selectedValue={this.state.city}
              style={{ height: 38 }}
              onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>
              <Picker.Item label={this.state.language == 'Sinhala' ? `ඔබේ නගරය තෝරා ගන්න` : (this.state.language == 'Tamil' ? `உங்கள் நகரத்தைத் தேர்ந்தெடுக்கவும்` : `Select your city`)}  value="select" color="#8c8c8c" />
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

            <Picker
              selectedValue={this.state.field}
              style={{ height: 38 }}
              onValueChange={(itemValue, itemIndex) => this.setState({ field: itemValue })}>
              <Picker.Item label={this.state.language == 'Sinhala' ? `ඔබේ වැඩ කොටස තෝරන්න` :(this.state.language == 'Tamil' ? `உங்கள் துறையில் தேர்ந்தெடுக்கவும்` : `Select your field`)}  value="select" color="#8c8c8c" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `මේසන්` : (this.state.language == 'Tamil' ? `மேசன்` : `Mason`)} value="Mason" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `වඩුවා` : (this.state.language == 'Tamil' ? `தச்சன்` : `Carpenter`)} value="Carpenter" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `තින්ත ශිල්පියා` : (this.state.language == 'Tamil' ? `ஓவியர்` : `Painter`)} value="Painter" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `ආනයන ලබා දෙන්න` : (this.state.language == 'Tamil' ? `வழங்க` : `Deliver`)} value="Deliver" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `විදුලි ශිල්පියා` : (this.state.language == 'Tamil' ? `எலக்ட்ரீஷியன்` : `Electrician`)} value="Electrician" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `ජලනල කාර්මිකයා` : (this.state.language == 'Tamil' ? `பிளம்பராக` : `Plumber`)} value="Plumber" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `අලුත්වැඩියා කරනවා` : (this.state.language == 'Tamil' ? `பழுது` : `Repair`)} value="Repair" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `කොන්ක්රීට් ස්ලැබ්` : (this.state.language == 'Tamil' ? `கான்கிரீட் அடுக்கு` : `Concrete slab`)} value="slab" />
              <Picker.Item label={this.state.language == 'Sinhala' ? `ටයිල්` : (this.state.language == 'Tamil' ? `ஓடு` : `Tile`)} value="Tile" />
            </Picker>

            <TextInput style={{ ...styles.textBOx, }} onChangeText={(text) => this.setState({ experince: text })} placeholder={this.state.language == 'Sinhala' ? `පළපුරුද්ද` :(this.state.language == 'Tamil' ? `வேலை அனுபவம்` : `Working experience`)}  placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>
            <TextInput style={{ ...styles.textBOx, }} onChangeText={(text) => this.setState({ certification: text })} placeholder={this.state.language == 'Sinhala' ? `සහතික කිරීම` :(this.state.language == 'Tamil' ? `சான்றிதழ்` : `Certification`)}  placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>

            <TextInput style={{ ...styles.textBOx, marginTop: 20 }} onChangeText={(text) => this.setState({ userName: text })} placeholder={this.state.language == 'Sinhala' ? `පරිශීලක නාමය` : (this.state.language == 'Tamil' ? `பயனர் பெயர்` : `User name`)}  placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>
            <TextInput style={{ ...styles.textBOx, }} onChangeText={(text) => this.setState({ password: text })} placeholder={this.state.language == 'Sinhala' ? `මුරපදය` :(this.state.language == 'Tamil' ? `கடவுச்சொல்` : `Password`)}  placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>
            <TextInput style={{ ...styles.textBOx, }} onChangeText={(text) => this.setState({ rePassword: text })} placeholder={this.state.language == 'Sinhala' ? `නැවතත් මුරපදය` :(this.state.language == 'Tamil' ? `கடவுச்சொல்லை உறுதிப்படுத்துக` : `Confirm password`)}  placeholderTextColor="#8c8c8c" underlineColorAndroid='#737373'></TextInput>

            <Button style={{ ...styles.button, marginTop: 20, marginBottom: 20 }} onPress={this.submit}>
              <Text style={{ marginLeft: 45, fontSize: 18, color: '#FFF', fontWeight: '300', }}>{this.state.language == 'Sinhala' ? `සහතික කිරීම` :(this.state.language == 'Tamil' ? `பதிவு` : `Register`)} </Text>
            </Button>
          </View>


          <View style={{ ...styles.bottomView, height: 50 }}>
          </View>

        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}


const mapStateToProps = (state) => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps)(Worker);
