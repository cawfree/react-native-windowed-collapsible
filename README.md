# @cawfree/react-native-windowed-collapsible
A &lt;Collapsible/> component for React Native, with a difference.

<p align="center">
  <img src="./bin/demo.gif" alt="react-native-windowed-collapsible" width="600" height="1200">
</p>

## 🚀 Getting Started
Using [`npm`](https://www.npmjs.com/package/@cawfree/react-native-windowed-collapsible):

```shell
npm install --save @cawfree/react-native-windowed-collapsible
```

Using [`yarn`](https://www.npmjs.com/package/@cawfree/react-native-windowed-collapsible):

```shell
yarn add @cawfree/react-native-windowed-collapsible
```

## ✍️ Example

```javascript
import React from 'react';
import {
  ScrollView,
  LayoutAnimation,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

import {
  WindowedCollapsibleProvider,
  WindowedCollapsible,
} from '@cawfree/react-native-windowed-collapsible';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    content: {
      flex: 1,
    },
    button: {
      position: 'absolute',
      bottom: 0,
      width,
      height: 60,
      backgroundColor: 'firebrick',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
    child: {
      width,
      height: 300,
      backgroundColor: 'peachpuff',
    },
    fixed: {
      width,
      height: 200,
    },
  },
);

export default class App extends React.Component {
  state = {
    collapsed: true,
    animationConfig: LayoutAnimation.create(250, 'linear', 'scaleY'),
    source: {
      uri: 'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png',
    },
  }
  onPress = () => this.setState(
    {
      collapsed: !this.state.collapsed,
    },
  );
  render() {
    const {
      collapsed,
      animationConfig,
      source,
    } = this.state;
    return (
      <View
        style={styles.container}
      >
        <ScrollView
        >
          <WindowedCollapsibleProvider
          >
            <WindowedCollapsible
              collapsed={collapsed}
            >
              <Image
                style={styles.child}
                source={source}
              />
            </WindowedCollapsible>
            <WindowedCollapsible
              collapsed={collapsed}
            >
              <Image
                style={styles.child}
                source={source}
              />
            </WindowedCollapsible>
            <WindowedCollapsible
              collapsed={collapsed}
            >
              <Image
                style={styles.child}
                source={source}
              />
            </WindowedCollapsible>
          </WindowedCollapsibleProvider>
          <Image
            style={styles.fixed}
            source={{ uri: 'https://pbs.twimg.com/media/D81l1E9U0AAKl9Y.jpg' }}
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text
            style={styles.text}
          >
            {collapsed ? 'Expand' : 'Collapse'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
```

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)
