import React from "react";
import {View} from "react-native";

export default function ResultImc(){
    return(
        <View>
            <Text>{props.messageResultIMC}</Text>
            <Text>{props.resultImc}</Text>
             
        </View>
    );
}