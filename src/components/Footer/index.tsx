import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

/**
 * Компонент Footer - нижний блок любого экрана
 */
export const Footer: FC = () => {
  return <View style={styles.footerContainer}></View>;
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 30,
  },
});
