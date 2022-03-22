import React, { useState } from "react";
import PropTypes from "prop-types"; //consider using this!

import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  Linking,
} from "react-native";
import { Images, Metrics } from "../Themes";

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image
                source = {Images.logo}
                style = {styles.logoStyle}
                resizeModule = "contain"
            />
            
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 0.5
    },

    logoStyle: {
        height: Metrics.images.logo * 0.3,
        width: Metrics.screenWidth
    }
});