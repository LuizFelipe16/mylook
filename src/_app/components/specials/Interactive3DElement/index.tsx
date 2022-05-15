import dynamic from 'next/dynamic';
import type { SplineProps } from '@splinetool/react-spline';
import { View } from '../../..';

import styles from './styles.module.scss';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

interface Interactive3DElementProps extends SplineProps { }

export function Interactive3DElement({ ...rest }: Interactive3DElementProps) {
  return (
    <View style={styles.container_3d}>
      <Spline {...rest} />
    </View>
  );
}