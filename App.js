import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Searchscreen from './screens/searchScreen';
import Transcreen from './screens/tranScreen';
import createBottomTabNavigator from 'react-navigation-tabs';
import createAppContainer from 'react-navigation';


export default class App extends React.Component{

render(){
    return(
       <View>
          <Container/>
        </View>    
    );
}
}

const navigater = createBottomTabNavigator({
Transaction: {screen:Transcreen},
Search: {screen:Searchscreen}
}
)
const Container = createAppContainer(navigater)