import {Button, Text, View,ImageBackground,SafeAreaView,StatusBar,Animated} from "react-native";
import * as React from "react";
import Box from "../components/box";
import bg from "../assets/bg.jpg"
import Logo from "../components/icons/Logo";
import Search from "../components/search";
import FocusAwareStatusBar from "../components/focus-aware-status-bar";
import theme from "../utils/theme";
function SearchView({navigation}) {
    const [isSearchFocus, setSearchFocus] = React.useState(false)
    const heroHeight = React.useRef(new Animated.Value(285)).current;
   React.useEffect(()=>{
       if(isSearchFocus){
           Animated.timing(heroHeight, {
               toValue: 52+32,
               duration: 320
           }).start();
       }
       else {
           Animated.timing(heroHeight, {
               toValue: 285,
               duration: 320
           }).start();
       }

   },[heroHeight,isSearchFocus])
    return (
        <Box as={SafeAreaView} bg={isSearchFocus ? theme.colors.softRed:theme.colors.red} flex={1}>
            <FocusAwareStatusBar barStyle={isSearchFocus ? "dark-content":"light-content"} backgroundColor={isSearchFocus ? theme.colors.softRed:theme.colors.red} />
            <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
                {!isSearchFocus &&(
                    <Box
                        as={ImageBackground}
                        source={bg}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Box flex={1} alignItems="center" justifyContent="center">
                            <Logo width={120} color="white" />
                        </Box>
                    </Box>
                )}
                <Box position="absolute" left={0} bottom={isSearchFocus ? 0: -42} p={16} width="100%" >
                    <Search onChangeFocus ={(status) =>setSearchFocus(status)} />
                </Box>
            </Box>
            <Box flex={1} bg="white" pt={26}>
                {isSearchFocus ?(
                    <Box p={30} flex={1}>
                        <Text>Suggestion</Text>
                    </Box>
                ):(
                    <Box p={30} flex={1}>
                        <Text>History</Text>
                    </Box>
                )}

            </Box>
        </Box>
    );
}

export default SearchView
