import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, DrawerLayoutAndroid, ImageBackground, ScrollView } from 'react-native';
import { Item, Button, Input } from 'native-base';
import { Icon } from 'react-native-vector-icons/Entypo'
import Stars from 'react-native-stars-rating';


export default class WorkerHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      Password: '',
      error: '',
      dataSource: null,
    };
  }

  static navigationOptions = {
    title: 'HIGHEST RATE',
    header: null
  }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>

          <ImageBackground
            source={require('./images/work4.jpg')}
            style={styles.backgroundImage}>
            <View style={styles.topView}>
            </View>

            <View style={styles.centerView}>

              <View style={{ marginTop: 30, flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>

                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

                <TouchableOpacity style={{ flex: 1 }}>
                  <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold', marginTop: 5, color: 'white' }}>Mason</Text>
                    <Image
                      style={{ marginTop: 0, width: 100, height: 100, borderRadius: 100, }}
                      source={require('./images/user.jpg')}
                    />
                    <Stars isActive={false} rateMax={5} isHalfStarEnabled={true} rate={2.5} size={12} />
                    <Text style={{ marginTop: 2, fontSize: 13, color: 'white' }}>W.G Siripala</Text>
                    <Text style={{ marginBottom: 2, fontSize: 10, fontWeight: '100', color: "#ffffff" }}>Malabe,Colombo</Text>
                    <Button style={styles.button} onPress={this.userCredentials} >
                      <Text style={{ marginLeft: 18, fontSize: 12, color: '#FFF', fontWeight: '300', }}>View Profile</Text>
                    </Button>
                  </View>
                </TouchableOpacity>


                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

                <TouchableOpacity style={{ flex: 1 }}>
                  <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold', marginTop: 5, color: 'white' }}>Carpenter</Text>
                    <Image
                      style={{ marginTop: 0, width: 100, height: 100, borderRadius: 100, }}
                      source={require('./images/user.jpg')}
                    />
                    <Stars isActive={false} rateMax={5} isHalfStarEnabled={true} rate={2.5} size={12} />
                    <Text style={{ marginTop: 2, fontSize: 13, color: 'white' }}>W.G Siripala</Text>
                    <Text style={{ marginBottom: 2, fontSize: 10, fontWeight: '100', color: "#ffffff" }}>Malabe,Colombo</Text>
                    <Button style={styles.button} onPress={this.userCredentials} >
                      <Text style={{ marginLeft: 18, fontSize: 12, color: '#FFF', fontWeight: '300', }}>View Profile</Text>
                    </Button>
                  </View>
                </TouchableOpacity>

                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

              </View>
 
              <View style={{ marginTop: 20,flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>

                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

                <TouchableOpacity style={{ flex: 1 }}>
                  <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold', marginTop: 5, color: 'white' }}>Mason</Text>
                    <Image
                      style={{ marginTop: 0, width: 100, height: 100, borderRadius: 100, }}
                      source={require('./images/user.jpg')}
                    />
                    <Stars isActive={false} rateMax={5} isHalfStarEnabled={true} rate={2.5} size={12} />
                    <Text style={{ marginTop: 2, fontSize: 13, color: 'white' }}>W.G Siripala</Text>
                    <Text style={{ marginBottom: 2, fontSize: 10, fontWeight: '100', color: "#ffffff" }}>Malabe,Colombo</Text>
                    <Button style={styles.button} onPress={this.userCredentials} >
                      <Text style={{ marginLeft: 18, fontSize: 12, color: '#FFF', fontWeight: '300', }}>View Profile</Text>
                    </Button>
                  </View>
                </TouchableOpacity>


                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

                <TouchableOpacity style={{ flex: 1 }}>
                  <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold', marginTop: 5, color: 'white' }}>Mason</Text>
                    <Image
                      style={{ marginTop: 0, width: 100, height: 100, borderRadius: 100, }}
                      source={require('./images/user.jpg')}
                    />
                    <Stars isActive={false} rateMax={5} isHalfStarEnabled={true} rate={2.5} size={12} />
                    <Text style={{ marginTop: 2, fontSize: 13, color: 'white' }}>W.G Siripala</Text>
                    <Text style={{ marginBottom: 2, fontSize: 10, fontWeight: '100', color: "#ffffff" }}>Malabe,Colombo</Text>
                    <Button style={styles.button} onPress={this.userCredentials} >
                      <Text style={{ marginLeft: 18, fontSize: 12, color: '#FFF', fontWeight: '300', }}>View Profile</Text>
                    </Button>
                  </View>
                </TouchableOpacity>

                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

              </View> 

              <View style={{ marginTop: 20,marginBottom: 10,flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>

                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

                <TouchableOpacity style={{ flex: 1 }}>
                  <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold', marginTop: 5, color: 'white' }}>Mason</Text>
                    <Image
                      style={{ marginTop: 0, width: 100, height: 100, borderRadius: 100, }}
                      source={require('./images/user.jpg')}
                    />
                    <Stars isActive={false} rateMax={5} isHalfStarEnabled={true} rate={2.5} size={12} />
                    <Text style={{ marginTop: 2, fontSize: 13, color: 'white' }}>W.G Siripala</Text>
                    <Text style={{ marginBottom: 2, fontSize: 10, fontWeight: '100', color: "#ffffff" }}>Malabe,Colombo</Text>
                    <Button style={styles.button} onPress={this.userCredentials} >
                      <Text style={{ marginLeft: 18, fontSize: 12, color: '#FFF', fontWeight: '300', }}>View Profile</Text>
                    </Button>
                  </View>
                </TouchableOpacity>


                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

                <TouchableOpacity style={{ flex: 1 }}>
                  <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold', marginTop: 5, color: 'white' }}>Mason</Text>
                    <Image
                      style={{ marginTop: 0, width: 100, height: 100, borderRadius: 100, }}
                      source={require('./images/user.jpg')}
                    />
                    <Stars isActive={false} rateMax={5} isHalfStarEnabled={true} rate={2.5} size={12} />
                    <Text style={{ marginTop: 2, fontSize: 13, color: 'white' }}>W.G Siripala</Text>
                    <Text style={{ marginBottom: 2, fontSize: 10, fontWeight: '100', color: "#ffffff" }}>Malabe,Colombo</Text>
                    <Button style={styles.button} onPress={this.userCredentials} >
                      <Text style={{ marginLeft: 18, fontSize: 12, color: '#FFF', fontWeight: '300', }}>View Profile</Text>
                    </Button>
                  </View>
                </TouchableOpacity>

                <View style={{ flex: 0.2, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
                </View>

              </View>
 
            </View>



            <View style={styles.bottomView}>

            </View>

          </ImageBackground>


        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  contentContainer: {
    //flex: 1
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#666666',
  },

  topView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  centerView: {
    flex: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomView: {
    flex: 0,
  },

  button: {
    width: 100,
    height: 25,
    //padding: 35,
    backgroundColor: '#007acc',
    marginBottom: 10,
    alignSelf: 'center'
  },

  textBOx: {
    backgroundColor: "#ffffff",
    width: 250,
    height: 38,
    borderColor: 'gray',
    borderWidth: 0,
    fontSize: 16,
    paddingLeft: 5,
    fontWeight: '300',
    fontSize: 15,
    marginTop: 5
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    opacity: 0.85
  }
});
