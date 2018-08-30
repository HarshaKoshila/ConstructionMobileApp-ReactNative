import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, DrawerLayoutAndroid , ImageBackground} from 'react-native';
import { Item, Button, Input } from 'native-base';
import { Icon } from 'react-native-vector-icons/Entypo'


export default class WorkerHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username : '',
          Password : '',
          error : '',
          dataSource: null,
        };
      }

      static navigationOptions = {
        title: 'Select field', 
        header: null
      }

      displayData = () => { 
        return fetch('http://192.168.8.101:3000/displayData')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.data,
          })
        }).catch((error) =>{
          console.log('Error :',error);
        }); 
    }

    render() { 
        return (
            <View style={styles.container}> 
            <ImageBackground
              source={require('./images/work4.jpg')}
              style={styles.backgroundImage}>
                <View style={styles.topView}>
                </View>

                <View style={styles.centerView}>

                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Search', { user: 'Sinha' })} style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                                <Image   source={require('./images/field_icon/mason.png')}  />
                                <Text style={{ marginTop: 10, color: 'white' }}>Mason</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('Hellow')} style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                            <Image  source={require('./images/field_icon/carpenter.png')}  />
                            <Text style={{ marginTop: 10, color: 'white' }}>Carpenter</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('Hellow')} style={{ flex: 1 }}>
                        <View style={{ flex: 1, backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                            <Image   source={require('./images/field_icon/painter.png')}    />
                            <Text style={{ marginTop: 10, color: 'white' }}>Painter</Text>
                        </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => alert('Hellow')} style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                            <Image    source={require('./images/field_icon/deliver.png')}  />
                            <Text style={{ marginTop: 10, color: 'white' }}>Deliver</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('Hellow')} style={{ flex: 1, }} activeOpacity ={0.5} >
                        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                            <Image         source={require('./images/field_icon/elect.png')}  />
                            <Text style={{ marginTop: 10, color: 'white' }}>Electrician</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('Hellow')} style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                            <Image    source={require('./images/field_icon/plumber.png')}   />
                            <Text style={{ marginTop: 10, color: 'white' }}>Plumber</Text>
                        </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => alert('Hellow')} style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                            <Image   source={require('./images/field_icon/repair.png')}  />
                            <Text style={{ marginTop: 10, color: 'white' }}>Repair</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('Hellow')} style={{ flex: 1  }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                            <Image   source={require('./images/field_icon/slab.png')} />
                            <Text style={{ marginTop: 10, color: 'white' }}>Concrete slab</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('Hellow')} style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#262626', justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 0.5 }}>
                            <Image   source={require('./images/field_icon/welding.png')}  />
                            <Text style={{ marginTop: 10, color: 'white' }}>Tile</Text>
                        </View>
                        </TouchableOpacity>
                        
                    </View>

                </View>



                <View style={styles.bottomView}>

                </View>

                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#666666',
    },

    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    centerView: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomView: {
        flex: 1,
    },

    button: {
        width: 200,
        padding: 35,
        backgroundColor: '#262626',
        marginTop: 10,
        alignSelf: 'center'
    },

    textBOx: {
        backgroundColor: "#ffffff",
        width: 250,
        height: 38,
        borderColor: 'gray',
        borderWidth: 0.5,
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
