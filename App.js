/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Jan, 2021
 */

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, TouchableOpacity } from "react-native";
import { Images, Colors } from "./App/Themes";
import APIRequest from "./App/Config/APIRequest";

import News from "./App/Components/News";
import Search from "./App/Components/Search";
import Logo from "./App/Components/Logo";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchText] = useState("");
  const [category] = useState("");

  const loadArticles = async (searchTerm = "", category = "") => {
    setLoading(true);
    setArticles([]);
    var resultArticles = [];
    if (category === "") {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    setLoading(false);
    setArticles(resultArticles);
  };

  useEffect(() => {
    //uncomment this to run your API query!
     loadArticles();
  }, []);

  contentDisplayed = null;
  if (loading) {
    contentDisplayed = (
      <ActivityIndicator
        style={styles.activityIndicator}
  />
    )
  } else {
    contentDisplayed = <News articles=
    {articles}/>
  }
  return (
    <SafeAreaView style={styles.container}>

      {/*First, you'll need to display the NYT logo 🖼*/}
      <Logo style={{flex:.1}}/>
      {/*Then a search bar 🔎*/}
      <Search getQuery={loadArticles} />
      {/*Then a list of news 🗞*/}
      <View style={{flex:6}}>
        {contentDisplayed}
      </View>
      {/*You can style and organize your UI however you want! Power to you 💪😎*/}

      {/*If you want to retreive other information from the NYT API, checkout the APIRequest file!*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
