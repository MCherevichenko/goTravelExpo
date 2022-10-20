import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {all, HeaderState, near} from '../..';

type Props = {
  /** Cостояние шапки all | near */
  headerState: HeaderState;
  /** Функция, изменяющая состояние шапки */
  setHeaderState: React.Dispatch<React.SetStateAction<HeaderState>>;
};

/**
 * Компонент-контейнер кнопок на странице Home
 * @param Props
 * */
export const HomeButtons: FC<Props> = ({setHeaderState}) => {
  return (
    <View style={styles.topToolsContainer}>
      <View style={styles.homeButtonContainer}>
        <TouchableOpacity
          style={styles.findButton}
          onPress={() => {
            setHeaderState(all);
          }}
        >
          <Text>Все</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.findButton}
          onPress={() => {
            setHeaderState(near);
          }}
        >
          <Text style={{alignSelf: 'center', fontSize: 13}}>Поблизости</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topToolsContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  findButton: {
    width: '30%',
    borderRadius: 12,
    borderWidth: 1,
    height: 25,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  disableButton: {
    backgroundColor: 'red',
  },

  homeButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});
