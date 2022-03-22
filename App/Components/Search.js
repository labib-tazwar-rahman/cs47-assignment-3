/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Jan, 2021
 */

import React, { useState } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Metrics, Colors } from "../Themes";
import { SearchBar } from "react-native-elements";

export default function Search(props) {
  const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => 
    {Keyboard.dismiss()}}>
	<View style={styles.container}>
		<SearchBar
			platform={(Platform.OS === 'ios') ? "ios" : "android"}
			onChangeText={text => setText(text)}
			value={text}


			keyboardShouldPersistTaps={'handled'}
          onSubmitEditing={() => props.getQuery(text)}
          placeholder='Search for News'
				/>
				</View>
			</TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    
  },
  
});
