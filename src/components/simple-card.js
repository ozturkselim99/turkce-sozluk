import React from "react";
import Text from "./text";
import theme from "../utils/theme";
import Button from "./button";

export function SimpleCardContainer({children,...props}) {
    return (<Button justifyContent={"flex-start"} p={16} bg="white" borderRadius={theme.radii.normal} {...props}>
            {children}
    </Button>)
}


export function SimpleCardTitle({children}) {
    return (
        <Text fontSize={18} fontWeigth="bold">
            {children}
        </Text>
    )
}

