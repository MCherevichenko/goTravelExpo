import React, {FC, useState} from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {Attraction} from '../Attractions';
import {IAttraction} from '../../../../mock-data';

/**
 * Компонент карточки достопримечательности в списке
 * @param IAttraction
 */
export const Card: FC<IAttraction> = ({
  path,
  name,
  id,
  founded,
  description,
  street,
  coordinate,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <ImageBackground source={path} style={styles.cardImage}>
            <Text style={styles.cardName}>{name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <Attraction
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        path={path}
        name={name}
        founded={founded}
        description={description}
        id={id}
        street={street}
        coordinate={coordinate}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: 160,
    width: '48%',
    marginVertical: 4,
  },

  cardImage: {
    resizeMode: 'cover',
    height: '100%',
    flexDirection: 'column-reverse',
  },

  cardName: {
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'IBMPlexSansKR-Bold',
    backgroundColor: '#ffffff',
    paddingLeft: 4,
    width: '100%',
    fontSize: 12,
  },
});
