import {Image, Text, View} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import React from "react";

const Quiz = (
    {
        backgroundStyle,
        imageStyle,
        titleStyle,
        animalImage,
        animalName,
        point
    }
    ) => {
    return (
        <View style={backgroundStyle}>
            <Image style={imageStyle} source={animalImage}/>
            <Text style={titleStyle}>What {animalName} is this?</Text>
            <RNPickerSelect style={titleStyle} placeholder={
                {label:"Choose the answer", color:"black"}
            } onValueChange={(point)} items={[
                {label: 'Eevee', value: 'eevee'},
                {label: 'Pikachu', value: 'pikachu'},
                {label: 'Marill', value: 'marill'},
            ]}/>
        </View>
    );
};

export default Quiz;
