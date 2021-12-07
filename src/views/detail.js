import {View} from "react-native";
import * as React from "react";
import Text from "../components/text";
import {SafeAreaView} from "react-native";

import FocusAwareStatusBar from "../components/focus-aware-status-bar";
import Box from "../components/box";
import theme from "../utils/theme";
function DetailView() {
    return (

        <Box as={SafeAreaView} flex={1} bg={theme.colors.softRed} p={16}>
            <FocusAwareStatusBar barStyle="dark-content"  backgroundColor={theme.colors.softRed} />
            <Text>Detail</Text>
        </Box>
    );
}

export default DetailView
