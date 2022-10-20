import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvg} from '../../helpers/ISvg';

export const IconTabOther: FC<ISvg> = ({tintColor}) => {
  return (
    <Svg width={24} height={25} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1H5Zm0 16a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5Z"
        fill={tintColor}
      />
    </Svg>
  );
};
