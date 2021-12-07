import {Button, Text, View} from "react-native";
import * as React from "react";
import BoxCenter from "../components/box-center";
function SearchView({navigation}) {
    return (
        <BoxCenter>
            <Button
                title="Go to Details"
                onPress={()=>navigation.navigate("Detail")}
            ></Button>
        </BoxCenter>
    );
}

export default SearchView
