import React, {FC} from 'react';
import {
  Image,
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Footer} from '../../../../components/Footer';

type IAttractionProps = {
  /** Флаг открытия модального окна */
  isOpen: boolean;
  /** Функция, срабатывающая при закрытии */
  onClose: () => void;
  /** Картинка */
  path: number;
  /** Название достопримечательности */
  name: string;
  /** Описание достопримечательности */
  description: string;
  /** id */
  id: number;
  /** Год основания */
  founded: number;
  /** Улица, на которой расположена достопримечательность */
  street: string;
  /** координаты достопримечательности */
  coordinate: {
    /** широта */
    latitude: number;
    /** долгота */
    longitude: number;
  };
};

/**
 * Компонент Attraction - компонент-карточка достопримечательности при открытии в списке
 * @param IAttractionProps
 */
export const Attraction: FC<IAttractionProps> = ({
  isOpen,
  onClose,
  path,
  name,
  id,
  founded,
  description,
  street,
  coordinate,
}) => {
  return (
    <Modal visible={isOpen}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          onPress={() => onClose()}
          style={styles.backButtonContainer}
        >
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Image source={path} style={styles.attractionPicture} />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.attractionFounded}>
            Год основания - {founded}
          </Text>
          <Text style={{marginBottom: 4}}>Расположение: {street}</Text>
        </View>
        <ScrollView style={{borderWidth: 2, borderColor: 'black'}}>
          <Text style={styles.attractionDescription}>{description}</Text>
        </ScrollView>
      </View>
      <Footer />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingHorizontal: 4,
  },

  backButtonContainer: {
    marginTop: 40,
  },

  backButton: {
    color: 'black',
    fontFamily: 'TheNautigal-Regular',
    fontSize: 40,
  },

  attractionDescription: {
    fontFamily: 'LuxuriousRoman-Regular',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 3,
    padding: 3,
  },
  attractionPicture: {
    height: '30%',
    width: '100%',
    borderColor: 'grey',
    borderWidth: 2,
  },

  attractionFounded: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 5,
  },
});
