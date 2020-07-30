import React from "react";
import { View } from "react-native";

export default class AlbumDetail extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.details.title}</Text>
      </View>
    );
  }
}
