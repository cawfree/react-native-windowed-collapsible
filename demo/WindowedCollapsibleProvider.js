import React from 'react';
import PropTypes from 'prop-types';
import { View, LayoutAnimation, StyleSheet } from 'react-native';
import LayoutAnimationProvider from '@cawfree/react-native-layout-animation-provider';

const styles = StyleSheet.create(
  {
    forceLayoutHack: {
      height: 1,
      backgroundColor: 'transparent',
    },
  },
);

const WindowedCollapsibleProvider = ({ duration, children, ...extraProps }) => (
  <LayoutAnimationProvider
    animationConfig={LayoutAnimation.create(duration, 'linear', 'scaleY')}
    {...extraProps}
  >
    {children}
    <View
      style={styles.forceLayoutHack}
    />
  </LayoutAnimationProvider>
);

WindowedCollapsibleProvider.propTypes = {
  duration: PropTypes.number,
};

WindowedCollapsibleProvider.defaultProps = {
  duration: 300,
};

export default WindowedCollapsibleProvider;
