import React from 'react';
import {
  SafeAreaView, View, Text, Image, StyleSheet,
} from 'react-native';
import Button from '../components/Button';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>GitHub Search</Text>
      <Image
        style={styles.headerImage}
        resizeMode="contain"
        source={require('../assets/images/app-logo.png')}
      />
    </View>
    <Button title="LOGIN" onPress={() => console.log('Login pressed')} />
    <View style={styles.footerWrapper}>
      <Image
        style={styles.gitImage}
        resizeMode="contain"
        source={require('../assets/images/GitHub-Mark.png')}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7CF66',
  },
  headerWrapper: {
    alignItems: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 25,
  },
  headerImage: {
    width: 200,
  },
  footerWrapper: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 50,
  },
  gitImage: {
    width: 32,
  },
});

export default HomeScreen;
