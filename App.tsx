import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Navigator} from './navigation/Navigator';
import * as Font from 'expo-font';

const App = () => {
  const [fontLoaded, setFondLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getFonts = async () => {
      await Font.loadAsync({
        'TheNautigal-Regular': require('./assets/fonts/TheNautigal-Regular.ttf'),
        'LuxuriousRoman-Regular': require('./assets/fonts/LuxuriousRoman-Regular.ttf'),
        'IBMPlexSansKR-Bold': require('./assets/fonts/IBMPlexSansKR-Bold.ttf'),
      });
      setFondLoaded(true);
    };
    getFonts();
  }, []);

  return fontLoaded ? (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  ) : (
    <Text style={styles.loading}> Loading... </Text>
  );
};

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
