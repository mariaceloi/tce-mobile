import React from 'react';
import { View, StyleSheet } from 'react-native';

type ContainerProps = React.PropsWithChildren<{}>;

export default function Container({ children }: ContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F1F2F2',
  },
});