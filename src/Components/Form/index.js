import React, {useState} from "react";
import {TextInput, View, Text, Button} from "react-native"
import Resultlmc from "./Resultlmc";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messagelmc, setMenssagelmc] = useState("preencha o peso e altura");
    const [lmc, setlmc] = useState(null)
    const [textButton, setTextButton] = useState("calcular IMC")

    function validationlmc(){
        if(weight != null && height != null){
            lmcCalculator()
            setHeight(null)
            setWeight(null)
            setMenssagelmc(" imc é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setlmc(null)
        setTextButton("Calcular")
        setMenssagelmc("Preencha Peso e Altura")
    }
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput onChangeText={setHeight}
                value={height} placeholder="EX. 1.75"
                keyboardType="numeric"></TextInput>

                <Text>Peso</Text>
                <TextInput onChangeText={setWeight}
                value={weight} placeholder="EX. 75.365"
                keyboardType="numeric"></TextInput>

                <Button onPress={() => validationlmc()}
                title={textButton} color="#3e062d"/>
            </View>
            <Resultlmc messageResultlmc={messagelmc} Resultlmc={lmc}/>
        </View>
    );
}