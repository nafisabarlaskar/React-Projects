import React from "react";
import { Text, View } from "react-native";

const { viewStyle } = styles;
const Header = props => {
  return (
    <View style={viewStyle}>
      <Text style={styles.headerTextStyle}>{this.props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffser: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    elevation: 2
  }
});

export default Header;
