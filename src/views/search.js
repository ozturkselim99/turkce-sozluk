import {Button, Text, View} from "react-native";
import * as React from "react";
import BoxCenter from "../components/box-center";
import SvgLogo from "../components/icons/Logo";
import SearchBox from "../components/search";
function SearchView({navigation}) {
    return (
        <BoxCenter>
            <Button
                title="Go to Details"
                onPress={()=>navigation.navigate("Detail")}
            ></Button>
            <SvgLogo color={"red"} width={120}/>
            <SearchBox/>
        </BoxCenter>
    );
}

export default SearchView
