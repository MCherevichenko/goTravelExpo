import React from 'react';
import {ScrollView, View} from 'react-native';
import {Card} from '../Card';
import {IAttraction} from '../../../../mock-data';

/**
 * Компонент-контейнер для отрисовки списка достопримечательностей
 * @param IAttraction[]
 */
export const HomeContent = ({result}: {result: IAttraction[]}) => {
  return (
    <ScrollView style={{alignContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingHorizontal: 4,
        }}
      >
        {result.map((i: IAttraction) => (
          <Card
            path={i.path}
            name={i.name}
            founded={i.founded}
            description={i.description}
            id={i.id}
            street={i.street}
            coordinate={i.coordinate}
          />
        ))}
      </View>
    </ScrollView>
  );
};
