import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvg} from '../../helpers/ISvg';

export const IconTabMap: FC<ISvg> = ({tintColor}) => (
  <Svg width={24} height={25} viewBox="0 0 88 130" fill={tintColor}>
    <Path d="M33.1 1.6c-8 2.1-14.5 6-20.6 12.5C5.8 21.1 2.2 28.5.8 38.2c-1.4 9-.1 16.5 4.7 28 3.6 8.7 30 57.6 32.8 60.9 2.6 3 6.5 3.5 9.5 1.2 1.7-1.2 7.9-11.5 16.4-27.4 16.5-30.8 21.6-42.1 23-50.6C91.9 20 62.6-6.4 33.1 1.6zm20.4 23.7c2.1 1.2 5.3 4.2 7 6.5 2.6 3.8 3 5.2 3 11.2 0 6-.4 7.4-3 11.2-8.1 11.5-24.9 11.6-32.9.1-7-10.1-3.4-23.7 7.9-29.6 4.5-2.4 13.2-2.1 18 .6z" />
  </Svg>
);
