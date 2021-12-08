import Box from "./box";
import Text from "./text";
import theme from "../utils/theme";
import {CardContainer, CardSummary, CardTitle} from "./card";
import {ActivityIndicator} from "react-native";
import * as React from "react";

function SuggestionCard({title,onPress,data,...props}){
    return (
        <Box {...props}>
            <Text color={theme.colors.textLight}>{title}</Text>
            <CardContainer mt={10} onPress={onPress}>
                {
                    data ? (
                        <>
                            <CardTitle>{data.madde}</CardTitle>
                            <CardSummary>{data.anlam}</CardSummary>
                        </>
                    ):(
                        <ActivityIndicator/>
                    )
                }
            </CardContainer>
        </Box>

    )
}

export default SuggestionCard
