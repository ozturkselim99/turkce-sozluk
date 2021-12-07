import {Button, View, ImageBackground, SafeAreaView, StatusBar, Animated, FlatList} from "react-native";
import * as React from "react";
import Box from "../components/box";
import bg from "../assets/bg.jpg"
import Logo from "../components/icons/Logo";
import Search from "../components/search";
import FocusAwareStatusBar from "../components/focus-aware-status-bar";
import theme from "../utils/theme";
import Bg from "../components/bg";
import {CardBody, CardContainer, CardSummary, CardTitle} from "../components/card";
import {SimpleCardContainer, SimpleCardTitle} from "../components/simple-card";
import Text from "../components/text";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        summary: "First Item1"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        summary: 'Second Item2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        summary: 'Third Item3',
    },
];

function SearchView({navigation}) {
    const [isSearchFocus, setSearchFocus] = React.useState(false)
    const heroHeight = React.useRef(new Animated.Value(285)).current;
    React.useEffect(() => {
        if (isSearchFocus) {
            Animated.timing(heroHeight, {
                toValue: 52 + 32,
                duration: 320
            }).start();
        } else {
            Animated.timing(heroHeight, {
                toValue: 285,
                duration: 320
            }).start();
        }

    }, [heroHeight, isSearchFocus])
    return (
        <Box as={SafeAreaView} bg={isSearchFocus ? theme.colors.softRed : theme.colors.red} flex={1}>
            <FocusAwareStatusBar barStyle={isSearchFocus ? "dark-content" : "light-content"}
                                 backgroundColor={isSearchFocus ? theme.colors.softRed : theme.colors.red}/>
            <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
                {!isSearchFocus && (
                    <Bg
                    >
                        <Box flex={1} alignItems="center" justifyContent="center">
                            <Logo width={120} color="white"/>
                        </Box>
                    </Bg>
                )}
                <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
                    <Search onChangeFocus={(status) => setSearchFocus(status)}/>
                </Box>
            </Box>
            <Box flex={1} bg={theme.colors.softRed} pt={isSearchFocus ? 0 : 26}>
                {isSearchFocus ? (
                    <Box flex={1}>
                        <FlatList
                            style={{
                                padding:16
                            }}
                            showsVerticalScrollIndicator={false}
                            data={DATA}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                                <Box py={6}>
                                    <SimpleCardContainer>
                                        <SimpleCardTitle>{item.title}</SimpleCardTitle>
                                    </SimpleCardContainer>
                                </Box>
                            )}
                            ListHeaderComponent={<Text color={theme.colors.textLight} mb={10}>Son Aramalar</Text>}
                        />


                    </Box>
                ) : (
                    <Box px={16} py={40} flex={1}>
                        <Box>
                            <Text color={theme.colors.textLight}>Bir deyim - Atasözü</Text>
                            <CardContainer mt={10} onPress={() => navigation.navigate("Detail",{title:"on para"})}>
                                <CardTitle>on para</CardTitle>
                                <CardSummary>çok az (para).</CardSummary>
                            </CardContainer>
                        </Box>
                        <Box mt={40}>
                            <Text color={theme.colors.textLight}>Bir deyim - Atasözü</Text>
                            <CardContainer mt={10} onPress={() => navigation.navigate("Detail",{title:"siyem siyem ağlamak"})}>
                                <CardTitle>siyem siyem ağlamak</CardTitle>
                                <CardSummary>hafif hafif, ince ince, durmadan gözyaşı dökmek</CardSummary>
                            </CardContainer>
                        </Box>

                    </Box>
                )}

            </Box>
        </Box>
    );
}

export default SearchView
