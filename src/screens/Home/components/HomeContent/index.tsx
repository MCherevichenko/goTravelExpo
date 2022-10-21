import React from 'react';
import { ScrollView, View } from 'react-native';
import { BackgroundImage } from '../../../Other/Image';
import { Card } from '../Card';
import { Location } from '../constants';

/**
 * Компонент-контейнер для отрисовки списка достопримечательностей
 * @param IAttraction[]
 */
export const HomeContent = ({ result }: { result: Location[] | string }) => {
  return (
    <ScrollView style={{ alignContent: 'center' }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingHorizontal: 4,
        }}
      >
        {Array.isArray(result) ? (
          result.map((i: Location) => (
            <Card
              key={i.id}
              picture={BackgroundImage.GetImage(`${i.picture}`)}
              name={i.name}
              founded={i.founded}
              description={i.description}
              id={i.id}
              street={i.street}
              longitude={i.longitude}
              latitude={i.latitude}
            />
          ))
        ) : (
          <p>{result}</p>
        )}
      </View>
    </ScrollView>
  );
};
