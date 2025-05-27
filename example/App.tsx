/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import {NitroCalendar} from '@kiethuynh/react-native-nitro-calendar';

const VIEWS_X = 15;
const VIEWS_Y = 15;


type ColorScheme = {
  background: string
  oddBackground: string
  card: string
  foreground: string
  button: string
}
type ColorSchemeName = 'light' | 'dark'
type ColorSchemes = Record<ColorSchemeName, ColorScheme>

export const Colors: ColorSchemes = {
  light: {
    background: 'rgb(239, 249, 255)',
    oddBackground: 'rgb(224, 244, 255)',
    card: 'rgb(131, 199, 235)',
    foreground: 'rgb(36, 42, 63)',
    button: 'rgb(211, 46, 94)',
  },
  dark: {
    background: 'rgb(17, 22, 37)',
    oddBackground: 'rgb(32, 37, 52)',
    card: 'rgb(22, 30, 49)',
    foreground: 'rgb(189, 206, 219)',
    button: 'rgb(232, 72, 124)',
  },
};

export function useColors(): ColorScheme {
  const scheme = useColorScheme();
  if (scheme == null) {
    return Colors.light;
  }
  return Colors[scheme];
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = useColors();

  const [counter, setCounter] = React.useState(0);
  const [isUpdating, setIsUpdating] = React.useState(true);

  const views = React.useMemo(
    () =>
      [...Array(counter)].map((_, i) => (
        <NitroCalendar
          key={i}
          hybridRef={{
            f: ref => {
              console.log('Ref initialized!');
              ref.someMethod();
            },
          }}
          style={styles.view}
          isBlue={i % 2 === 0}
          someCallback={{f: () => console.log('Callback called!')}}
          colorScheme={isDarkMode ? 'dark' : 'light'}
          onTouchEnd={() => {
            console.log(`Touched View #${i}!`);
          }}
        />
      )),
    [counter, isDarkMode],
  );

  React.useEffect(() => {
    if (!isUpdating) {
      return;
    }
    const i = setInterval(
      () => setCounter(c => (c >= VIEWS_X * VIEWS_Y ? 0 : c + 1)),
      10,
    );
    return () => clearInterval(i);
  }, [isUpdating]);

  return (
    <View style={[styles.container, {paddingTop: 40}]}>
      <Text style={styles.header}>View</Text>
      <View style={styles.topControls}>
        <View style={styles.flex} />
      </View>

      <View style={styles.resultContainer}>
        <View style={[styles.viewShadow]}>
          <View style={[styles.viewBorder, {borderColor: colors.foreground}]}>
            <View style={styles.viewContainer}>{views}</View>
          </View>
        </View>
      </View>

      <View style={[styles.bottomView, {backgroundColor: colors.background}]}>
        <Text>{isUpdating ? '🔄 Updating...' : '📱 Idle'}</Text>
        <View style={styles.flex} />
        <Button
          title={isUpdating ? 'Stop Updating' : 'Start Updating'}
          onPress={() => setIsUpdating(i => !i)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 15,
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
  },
  scrollContent: {},
  topControls: {
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buildTypeText: {
    fontFamily: Platform.select({
      ios: 'Menlo',
      macos: 'Menlo',
      android: 'monospace',
    }),
    fontWeight: 'bold',
  },
  segmentedControl: {
    minWidth: 180,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  viewShadow: {
    width: '80%',
    aspectRatio: 1,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
  },
  viewBorder: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 5,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    width: `${100 / VIEWS_X}%`,
    height: `${100 / VIEWS_Y}%`,
    marginLeft: -0.0001,
  },
  testCase: {
    width: '100%',
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  testBox: {
    flexShrink: 1,
    flexDirection: 'column',
  },
  testName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  testStatus: {
    fontSize: 14,
    flex: 1,
  },
  smallVSpacer: {
    height: 5,
  },
  largeVSpacer: {
    height: 25,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 45,
  },
  chartsContainer: {
    alignItems: 'stretch',
    width: '70%',
  },
  nitroResults: {},
  turboResults: {},
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  chart: {
    height: 20,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  flex: {flex: 1},
  bottomView: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowOpacity: 0.4,

    paddingHorizontal: 15,
    paddingVertical: 9,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
