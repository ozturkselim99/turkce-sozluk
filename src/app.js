import React from "react";
import {Text,SafeAreaView,View} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ThemeProvider} from "styled-components";
import SearchView from "./views/search";
import HistoryView from "./views/history";
import FavoriteView from "./views/favorite";
import DetailView from "./views/detail";
import TabBar from "./components/tab-bar";
import Box from "./components/box";
import theme from "./utils/theme";





function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SearchView}/>
            <HomeStack.Screen name="Detail" component={DetailView}/>
        </HomeStack.Navigator>
    )
}


function App(){
    return(
        <ThemeProvider theme={theme}>
            <Box flex={1} as={SafeAreaView}>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Search" tabBar={props => <TabBar {...props} />}>
                        <Tab.Screen name="History" component={HistoryView} />
                        <Tab.Screen name="Search" component={SearchStack} />
                        <Tab.Screen name="Favorite" component={FavoriteView} />
                    </Tab.Navigator>
                </NavigationContainer>
            </Box>
        </ThemeProvider>
    )
}

export default App;
