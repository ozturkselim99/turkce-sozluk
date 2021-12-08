import {SafeAreaView} from "react-native";
import * as React from "react";
import Box from "../components/box";
import FocusAwareStatusBar from "../components/focus-aware-status-bar";
import theme from "../utils/theme";
import SuggestionCard from "../components/suggestions-card";
import SearchHistoryList from "../components/search-history-list";
import HomeSearch from "../components/home-search";

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
    const [homeData, setHomeData] = React.useState(null)

    const getHomeData = async () => {
        const response = await fetch('https://sozluk.gov.tr/icerik')
        const data = await response.json()
        setHomeData(data)
    }

    React.useEffect(() => {
        getHomeData()
    }, [])

    return (
        <Box as={SafeAreaView} bg={isSearchFocus ? theme.colors.softRed : theme.colors.red} flex={1}>
            <FocusAwareStatusBar barStyle={isSearchFocus ? "dark-content" : "light-content"}
                                 backgroundColor={isSearchFocus ? theme.colors.softRed : theme.colors.red}/>
           <HomeSearch isSearchFocus={isSearchFocus} onSearchFocus={setSearchFocus}/>
            <Box flex={1} bg={theme.colors.softRed} pt={isSearchFocus ? 0 : 26}>
                {isSearchFocus ? (
                    <Box flex={1}>
                       <SearchHistoryList data={DATA}/>
                    </Box>
                ) : (
                    <Box px={16} py={40} flex={1}>
                        <SuggestionCard
                            data={homeData?.kelime[0]}
                            onPress={() => navigation.navigate("Detail",{
                                title:homeData?.kelime[0].madde
                            })}
                            title={"Bir Kelime"}
                        />
                        <SuggestionCard
                            mt={40}
                            data={homeData?.atasoz[0]}
                            onPress={() => navigation.navigate("Detail",{
                                title:homeData?.atasoz[0].madde
                            })}
                            title={"Bir deyim - Atasözü"}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default SearchView
