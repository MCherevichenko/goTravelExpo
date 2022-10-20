import React, {FC, useContext, useMemo, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {attractions, IAttraction} from '../../mock-data';
import {Header} from '../../components/Header';
import {HomeButtons} from './components/HomeButtons';
import {HomeContent} from './components/HomeContent';
import {GeoContext} from '../../../helpers/context';

export const all = 'all';
export const near = 'near';
export type HeaderState = typeof all | typeof near;

/**
 * Компонент Home - вкладка Home на главном экране
 */
export const Home: FC = () => {
  const {myLocation} = useContext(GeoContext);
  const [headerState, setHeaderState] = useState<HeaderState>(all);
  const [inputValue, setInputValue] = useState<string>('');

  const inputChangeHandler = function inputChangeHandler(event: string) {
    setInputValue(event);
  };

  const alongside: IAttraction[] = useMemo(
    () =>
      attractions.filter(
        (i) =>
          Math.abs(i.coordinate.latitude - myLocation.coords.latitude) <= 15 &&
          Math.abs(i.coordinate.longitude - myLocation.coords.longitude) <=
            161.34,
      ),
    [myLocation],
  );

  const result = () => {
    if (headerState === all) {
      return attractions.filter((item) =>
        item.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
      );
    } else {
      return alongside.filter((item) =>
        item.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
      );
    }
  };

  return (
    <View style={styles.mainScreenContainer}>
      <Header />
      <HomeButtons setHeaderState={setHeaderState} headerState={headerState} />
      <TextInput
        style={styles.searchInput}
        onChangeText={inputChangeHandler}
        value={inputValue}
        placeholder={' Поиск'}
      />
      <HomeContent result={result()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'black',
    width: '98%',
    padding: 8,
    alignSelf: 'center',
  },
});
