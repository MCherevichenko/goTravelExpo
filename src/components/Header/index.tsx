import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * Компонент Header - верхний блок любого экрана
 */
export const Header: FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Go Travel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    width: 210,
    fontSize: 70,
    fontFamily: 'TheNautigal-Regular',
  },
});
