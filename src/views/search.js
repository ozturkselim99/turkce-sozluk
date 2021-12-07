import {Button, Text, View} from "react-native";
import * as React from "react";
function SearchView({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="Go to Details"
                onPress={()=>navigation.navigate("Detail")}
            ></Button>
        </View>
    );
}

export default SearchView
