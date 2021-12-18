import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchView from './views/search';
import HistoryView from './views/history';
import FavoriteView from './views/favorite';
import DetailView from './views/detail';
import TabBar from './components/tab-bar';
import theme from './utils/theme';
import Button from './components/shared/button';
import More from './components/icons/More';
import Left from './components/icons/Left';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator screenOptions={{headerShadowVisible: false}}>
      <HomeStack.Screen
        options={() => {
          return {
            headerShown: false,
          };
        }}
        name="SearchMain"
        component={SearchView}
      />
      <HomeStack.Screen
        options={({route, navigation}) => {
          return {
            title:
              (route.params?.title ?? '').slice(0, 15) +
              ((route.params?.title ?? '').length > 15 ? '...' : ''),
            headerStyle: {
              backgroundColor: theme.colors.softRed,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Button
                height="100%"
                onPress={() => navigation.navigate('Search')}>
                <Left width={24} height={24} color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
                height="100%"
                onPress={() => navigation.navigate('Search')}>
                <More height={24} width={24} color={theme.colors.textDark} />
              </Button>
            ),
          };
        }}
        name="Detail"
        component={DetailView}
      />
    </HomeStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Search"
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
