import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';

import {Header} from '../../components/Header';
import {SupportModal} from './components/SupportModal';
import {SocialNetwork} from './components/SocialNetwork';

/**
 * Компонент Other - вкладка Other на главном экране
 */
export const Other: FC = () => {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <>
      <Header />
      <View style={styles.otherScreenContainer}>
        <View style={styles.otherMenuChapterContainer}>
          <TouchableOpacity
            style={styles.otherMenuChapterContainer}
            onPress={() => Alert.alert('ну закажи')}
          >
            <Text style={styles.otherMenuChapter}>Заказать пиццу</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.otherMenuChapterContainer}
            onPress={() => setSupportOpen(!supportOpen)}
          >
            <Text style={styles.otherMenuChapter}>Поддержка</Text>
          </TouchableOpacity>
        </View>
        <SocialNetwork />
      </View>
      <SupportModal
        supportOpen={supportOpen}
        onClose={() => setSupportOpen(!supportOpen)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  otherScreenContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },

  otherMenuChapterContainer: {},

  otherMenuChapter: {
    fontSize: 28,
  },
});
