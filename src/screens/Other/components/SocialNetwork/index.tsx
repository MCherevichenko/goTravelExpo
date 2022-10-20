import React, {FC} from 'react';
import {
  View,
  Linking,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const mockData = [
  {
    link: 'https://www.instagram.com/',
    picture: require('../../../../../assets/pictures/instagram.png'),
    social: 'Instagram',
  },
  {
    link: 'https://www.vk.com/',
    picture: require('../../../../../assets/pictures/vk.png'),
    social: 'Вконтакте',
  },
  {
    link: 'https://www.facebook.com',
    picture: require('../../../../../assets/pictures/facebook.png'),
    social: 'Facebook',
  },
  {
    link: 'https://www.twitter.com',
    picture: require('../../../../../assets/pictures/twitter.png'),
    social: 'Twitter',
  },
];

/**
 * Компонент-контейнер, в котором собраны социальные сети
 */
export const SocialNetwork: FC = () => {
  return (
    <View style={styles.contactIconsContainer}>
      {mockData.map((i) => {
        return (
          <View style={styles.iconContainer} key={`${i.link}`}>
            <TouchableOpacity
              onPress={() => Linking.openURL(i.link)}
              style={{flexDirection: 'row', alignItems: 'center'}}
            >
              <Image style={styles.contactIcons} source={i.picture} />
              <Text style={styles.text}>- Мы в {i.social} </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  contactIconsContainer: {
    marginTop: 30,
  },
  contactIcons: {
    width: 40,
    height: 40,
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 4,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 12,
    marginVertical: 4,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 8,
  },
});
