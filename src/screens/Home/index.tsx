import React, { FC, useContext, useMemo, useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from '../../components/Header';
import { HomeButtons } from './components/HomeButtons';
import { HomeContent } from './components/HomeContent';
import { GeoContext } from '../../../helpers/context';
import { all, HeaderState, Location } from './components/constants';

/**
 * Компонент Home - вкладка Home на главном экране
 */
export const Home: FC = () => {
  const { myLocation } = useContext(GeoContext);
  const [headerState, setHeaderState] = useState<HeaderState>(all);
  const [inputValue, setInputValue] = useState<string>('');
  const [locations, setLocations] = useState<Location[]>([]);

  const inputChangeHandler = function inputChangeHandler(event: string) {
    setInputValue(event);
  };

  const getLocations = async () => {
    try {
      const response = await fetch('http://80.249.149.14:5000/api/location');
      const data = await response.json();
      setLocations(data.locations);
    } catch (error) {
      console.error('Ошибка в функции getLocations',error);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  const alongside: Location[] | string = useMemo(() => {
    if (locations.length > 0) {
      return locations.filter(
        (i) =>
          Math.abs(i.latitude - myLocation.coords.latitude) <= 15 &&
          Math.abs(i.longitude - myLocation.coords.longitude) <= 161.34,
      );
    } else {
      return 'Грузим локации';
    }
  }, [myLocation]);

  const result = () => {
    if (headerState === all) {
      return locations.filter((item) =>
        item.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
      );
    } else {
      if (Array.isArray(alongside)) {
        return alongside.filter((item) =>
          item.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
        );
      } else {
        return alongside;
      }
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
