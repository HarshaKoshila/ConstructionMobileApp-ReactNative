import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { Item, Button, Input } from 'native-base';
import Login from '../component/Login'
import Search from '../component/Search'
import WorkerSignUp from '../component/Register/worker.js'
import WorkerHome from '../component/Home/worker/workerHome.js';
import Rate from '../component/Home/worker/rate.js';
import Profile from '../component/Profile';
import CustomerFirst from '../component/Home/customer/customerHome.js';
import HighestRate from '../component/Home/customer/highestRate.js';

import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'


const WorkerTab = TabNavigator({
  Home: { screen: WorkerHome },
  HighestRate: { screen: HighestRate }
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#020223',
        padding: 8,
      },
      indicatorStyle: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 3,
      },
      tabStyle: {
        borderRightColor: '#ffffff',
        borderRightWidth: 1,
      }
    }
  })

const CustomerTab = TabNavigator({
  Home: { screen: CustomerFirst },
  HighestRate: { screen: HighestRate },
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#262626',
        padding: 8,
      },
      indicatorStyle: {
        borderTopColor: '#007acc',
        borderTopWidth: 4,
      },
      tabStyle: {
        borderRightColor: '#ffffff',
        borderRightWidth: 1,
      }
    },
  })

const WorkerDrawer = DrawerNavigator({
  Profile: { screen: WorkerTab }
}, {
    contentComponent: Profile,
    drawerWidth: 200,
  })

export const Stack = StackNavigator({
  Login: { screen: Login },
  WorkerSignUp: { screen: WorkerSignUp },
  WorkerHome: { screen: WorkerDrawer, navigationOptions: {
    header: null
  } },
  CustomerHome: { screen: CustomerTab },
  Search: {screen: Search},
},
  {
    initialRouteName: 'Login',
  })

