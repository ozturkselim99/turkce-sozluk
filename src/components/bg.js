import Box from "./shared/box";
import {ImageBackground} from "react-native";
import bg from "../assets/bg.jpg";
import * as React from "react";


function Bg({children,...props}){
    return (
        <Box
            as={ImageBackground}
            source={bg}
            style={{width: '100%', height: '100%'}}
            {...props}
        >
            {children}
        </Box>
    )
}
export default Bg
