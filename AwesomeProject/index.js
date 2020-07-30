/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Header from "./component/header";
import { View } from  'react-native';
import React from 'react';
import AlbumList from "./component/AlbumList";

cosnt App = () => {
    <View>
        <Header message={"Hello React Native"}> 
<AlbumList/>
        </Header>
    </View>
}
AppRegistry.registerComponent(appName, () => App);

