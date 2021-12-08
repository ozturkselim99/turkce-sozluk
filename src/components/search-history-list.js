import {FlatList} from "react-native";
import Box from "./box";
import {SimpleCardContainer, SimpleCardTitle} from "./simple-card";
import Text from "./text";
import theme from "../utils/theme";
import * as React from "react";

function SearchHistoryList({data})
{
    return(
        <FlatList
            style={{
                padding:16
            }}
            showsVerticalScrollIndicator={false}
            data={data}
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
    )
}

export default SearchHistoryList
