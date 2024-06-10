import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


export default function LoadingSpinner() {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator/>
    </View>
  )
}

const styles = StyleSheet.create({
    spinnerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
