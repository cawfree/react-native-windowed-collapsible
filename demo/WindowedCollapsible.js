import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { withLayoutAnimation } from '@cawfree/react-native-layout-animation-provider';

const styles = StyleSheet.create(
  {
    container: {
      overflow: 'hidden',
    },
    forceLayoutHack: {
      height: Number.MIN_VALUE,
      backgroundColor: 'transparent',
    },
  },
);

class WindowedCollapsible extends React.Component {
  constructor(props) {
    super(props);
    this.__onLayout = this.__onLayout.bind(this);
    this.state = {
      collapsed: true,
      style: {
        position: 'absolute',
        width: null,
        height: null,
      },
    };
  }
  componentWillUpdate(nextProps, nextState) {
    const { collapsed } = nextProps;
    const {
      width,
      height,
    } = this.state.style;
    const shouldInit = (width === null || height === null);
    if (shouldInit || (collapsed !== this.props.collapsed)) {
      this.setStateWithAnimation(
        {
          collapsed,
        },
      );
    }
  }
  __onLayout(e) {
    const {
      width,
      height,
    } = e.nativeEvent.layout;
    const {
      style,
    } = this.state;
    const {
      width: currentWidth,
      height: currentHeight,
    } = style;
    if (width !== currentWidth || height !== currentHeight) {
      this.setState(
        {
          style: {
            ...style,
            width,
            height,
          },
        },
      );
    }
  }
  render() {
    const {
      children,
      ...extraProps
    } = this.props;
    const {
      style,
      collapsed,
      ...extraState
    } = this.state;
    const {
      width,
      height,
    } = style;
    const shouldCollapse = collapsed || (!width || !height);
    const platformProps = (Platform.OS === 'ios') ? {
      pointerEvents: 'none',
    } : {};
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.forceLayoutHack}
        />
        <View
          key="child"
          style={style}
          onLayout={this.__onLayout}
        >
          {children}
        </View>
        {
          (!shouldCollapse) && (
            <View
              {...platformProps}
              style={{
                width,
                height,
              }}
            />
          )
        }
        <View
          style={styles.forceLayoutHack}
        />
      </View>
    );
  }
}

export default withLayoutAnimation(
  WindowedCollapsible,
);
