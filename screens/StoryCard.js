import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {RFValue} from 'react-native-responsive-fontsize'

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <Image source={require('../assets/story_image_1.png')} style = {styles.storyImage}></Image>

        <View style={styles.titleContainor}>
          <Text style = {styles.storyTitleStyle}>{this.props.story.title}</Text>
        </View>

        <View>
          <Text>{this.props.story.author}</Text>
        </View>

        <View>
          <Text>{this.props.story.description}</Text>
        </View>

        <View style={styles.like}>
          <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
          <Text style={styles.likeText}>9K</Text>
        </View>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },

  titleContainor : {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },

  storyTitleStyle: {
    fontSize: RFValue(23),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },

  likes: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "violet",
    borderRadius: RFValue(30)
  },

  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }

});
