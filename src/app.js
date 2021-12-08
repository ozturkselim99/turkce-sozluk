import React from "react";
import Navigation from "./navigation"
import {ThemeProvider} from "styled-components";
import theme from "./utils/theme";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";

function App(){
    return(
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <Navigation/>
            </SafeAreaProvider>
        </ThemeProvider>
    )
}

export default App;
