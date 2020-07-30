import React from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TextInput
} from "react-native";
import AlbumDetail from "./component/AlbumDetail";
import { Badge } from "react-native-elements";

export default class AlbumList extends React.Component {
  render() {
    // return (
    //   <View>
    //     <Text>
    //       <AlbumDetail />
    //       <AlbumDetail />
    //       <AlbumDetail />
    //       <AlbumDetail />
    //     </Text>
    //   </View>
    // );

    return this.state.albums.length ? (
      <ScrollView>
        <View>
          <TextInput
            placeholder="Search Album..."
            style={styles.textInputStyle}
            value={this.state.searchTerm}
            onChangeText={searchTerm => {
              this.setState(searchTerm);
            }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 20 }}>Total Items: </Text>
          <Badge
            value={(this.state, albums.length)}
            textStyle={{ color: "white", fontSize: 20 }}
            containerStyle={{ backgroundColor: "orange" }}
          />
        </View>
        {itemsToBeCreated}
      </ScrollView>
    ) : (
      <ActivityIndicator size="large" />
    );
  }
}
