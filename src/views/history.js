import {Text, View,SafeAreaView} from "react-native";
import * as React from "react";
import Box from "../components/box";
import FocusAwareStatusBar from "../components/focus-aware-status-bar";
function HistoryView() {
    return (
        <Box as={SafeAreaView} flex={1}>
            <FocusAwareStatusBar barStyle="dark-content"  />
            <Text>History</Text>
        </Box>
    );
}

export default HistoryView
