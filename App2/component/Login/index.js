import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Item, Button, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { changeLanguage } from '../../action/main'
import book from '../../reducer/book';




class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      Password: '',
      error: '',
      dataSource: null,
      language: 'English',
      userType: 'Worker'
    };
  }

  static navigationOptions = {
    title: 'Smart Construction Network'
  }

  componentWillMount() {
    this.setState({ language: this.props.language })
  }

  userCredentials = () => {
    // (this.state.username == 'pablo' && this.state.Password == '123') ?  this.props.navigation.navigate('WorkerHome') : this.setState({error : 'Username and Password incorrect'});
    this.props.navigation.navigate('WorkerHome');
  }


  changeLanguage = (lang) => {
    this.setState({ language: lang })
    this.props.changeState(lang)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#1aa3ff', height: 2, }}>
        </View>

        <ImageBackground
          source={require('../../Images/work4.jpg')}
          style={styles.backgroundImage}>

          <View style={{ flexDirection: 'row', backgroundColor: "#aaacaf" }}>
            <Button onPress={() => this.setState({ userType: 'Worker' })} style={{ marginTop: 5, marginLeft: 220, height: 35, width: 70, backgroundColor: '#007acc' }}><Text style={{ color: '#ffffff', marginLeft: 10 }}> Worker </Text></Button>
            <Button onPress={() => this.props.navigation.navigate('CustomerHome')} style={{ marginTop: 5, height: 35, backgroundColor: '#ffffff', borderColor: '#007acc', borderWidth: 0.8 }}><Text> Customer </Text></Button>
          </View>

          <View style={styles.topView}>
            <Image
              style={{ marginTop: 0, width: 200, height: 200, }}
              source={require('../../Images/picto-maison.png')}
            />
          </View>

          <View style={styles.centerView}>
            <Text style={{ color: 'red' }}>{this.state.error}</Text>
            <TextInput
              style={styles.textBOx} placeholder={this.state.language == 'Sinhala' ? `ඔබගේ නම` : (this.state.language == 'Tamil' ? `பயனர் பெயர்` : `User name`)} underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
            <TextInput style={styles.textBOx} secureTextEntry={true} placeholder={this.state.language == 'Sinhala' ? `මුරපදය` : (this.state.language == 'Tamil' ? `கடவுச்சொல்` : `Password`)} underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText={(Password) => this.setState({ Password })}
              value={this.state.Password}
            />

            <Button style={styles.button} onPress={() => this.userCredentials()}>
              {this.state.language == 'Sinhala' ? <Text style={{ textAlign: 'center', fontSize: 18, color: '#FFF', fontWeight: '300', }}>ඇතුල් වන්න</Text> : (this.state.language == 'Tamil') ? <Text style={{ marginLeft: 20, fontSize: 18, color: '#FFF', fontWeight: '300', }}>உள் நுழை</Text> : <Text style={{ marginLeft: 40, fontSize: 18, color: '#FFF', fontWeight: '300', }}>Login</Text>}
            </Button>

            <Text style={{ marginTop: 10, fontSize: 13, color: 'black', fontWeight: '300', }}>{this.state.language == 'Sinhala' ? `මුරපදය අමතකයි?` : (this.state.language == 'Tamil' ? `கடவுச்சொல்லை மறந்துவிட்டீர்களா` : `Forget password?`)} </Text>
            <Text style={{ marginTop: 5, fontSize: 13, color: '#FFFFFF', fontWeight: '300', }}>-------------------------------------</Text>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('WorkerSignUp', { user: 'Sinha' })}>
              <Text style={{ marginBottom: 5,marginTop: 5, fontSize: 15, color: '#007acc', fontWeight: '300', }}>{this.state.language == 'Sinhala' ? `ගිණුම තනන්න` : (this.state.language == 'Tamil' ? `உங்கள் கணக்கை துவங்குங்கள்` : `Create Account`)} </Text>
            </TouchableOpacity>

          </View>
    
          <View style={styles.bottomView}>
            <TouchableOpacity onPress={() => this.changeLanguage('Sinhala')}>
              <Text style={{ marginLeft: 100, fontSize: 15, color: '#FFFFFF', fontWeight: '300', }}>සිංහල</Text>
            </TouchableOpacity>
            <Text> | </Text>
            <TouchableOpacity onPress={() => this.changeLanguage('English')}>
              <Text style={{ fontSize: 15, color: '#007acc', fontWeight: '300', }}>English</Text>
            </TouchableOpacity>
            <Text> | </Text>
            <TouchableOpacity onPress={() => this.changeLanguage('Tamil')}>
              <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: '300', }}>தமிழ்</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    language: state.language
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    changeState: (text) => dispatch(changeLanguage(text))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  topView: {
    flex: 3,
    backgroundColor: "#aaacaf",
    justifyContent: 'center',
    alignItems: 'center'
  },

  centerView: {
    flex: 3,
    backgroundColor: "#aaacaf",
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomView: {
    flex: 1,
    backgroundColor: "#aaacaf",
    flexDirection: 'row'
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
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    opacity: 0.8
  }

});
