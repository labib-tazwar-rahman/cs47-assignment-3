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
  FlatList,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import { material } from "react-native-typography"; //consider using this!
import { Metrics, Colors } from "../Themes";
import * as WebBrowser from "expo-web-browser";

export default function News(props) {
  const [refreshing, setRefreshing] = useState(false);
  const defaultProps = { articles: [] };

  const propTypes = {
    articles: PropTypes.array,
  };
  const webAction = item => WebBrowser.openBrowserAsync(item.url);
  const _keyExtractor = (item, index) => item.title;
  const listItemRenderer = item => {

    return (
      <TouchableOpacity onPress={() => webAction(item)}>
      </TouchableOpacity>
    );
  }
  
  return (
    <View style={styles.container}>
      {/*A FlatList or SectionList of news articles*/}
      <FlatList
          data={props.articles}
          ItemSeparatorComponent = {() => 
            (<View style={styles.separator}
            />)}
          renderItem={({item}) => 
          
          <TouchableOpacity style={styles.cards} onPress={() => Linking.openURL(item.url)}>
              <Text style={material.title}>
                {item.title}
                </Text>
              <Text style={material.body1}>
                {item.snippet}
                </Text>
              <Text style={material.button}>
                {item.byline}
                </Text>
              <Text style={material.caption}>
                {item.date}
                </Text>
            </TouchableOpacity>
          }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 10,
    
  },
  byline: {
    fontWeight: "bold",
  },
  articles: {
    width: Metrics.width,
    marginRight: 20,
    alignItems: 'flex-start',
    marginLeft: 20,
    paddingBottom: 5,
    
  },
  separator: {
    height: 15,
  },
  bold: {
    fontWeight: "bold",
  }
});
