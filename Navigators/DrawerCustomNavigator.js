
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {MonsterScreen} from "../Screens/MonsterScreen";
import {InfoScreen} from "../Screens/InfoScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen, MonsterScreen, InfoScreen);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}  />}
                onLogout={() => this.setLogout()}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Monster" component={MonsterScreen} />
                <Drawer.Screen name="Info" component={InfoScreen} />
            </Drawer.Navigator>
        );
    }
    
}

