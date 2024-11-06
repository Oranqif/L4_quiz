import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView, Button, Alert, Pressable} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';
import Quiz from './Quiz/Quiz.js';

export default function App() {
    const [point1, setPoint1] = useState();
    const [point2, setPoint2] = useState();
    const [point3, setPoint3] = useState();
    const answerList = [point1, point2, point3]
    return (
        <View style={styles.backgroundMain}>
            <ScrollView>
                <Text style={styles.titleMain}>Pokémon Quiz</Text>
                <Quiz
                    backgroundStyle={styles.backgroundItem}
                    imageStyle={styles.imageItem}
                    animalName={"Pokémon"}
                    titleStyle={pickerSelectStyles.inputAndroid}
                    animalImage={require('./images/MarillPokemon.jpg')}
                    point={(point1)=> setPoint1(point1)}
                />
                <Quiz
                    backgroundStyle={styles.backgroundItem}
                    imageStyle={styles.imageItem}
                    animalName={"Pokémon"}
                    titleStyle={pickerSelectStyles.inputAndroid}
                    animalImage={require('./images/EeveePokemon.jpg')}
                    point={(point2)=> setPoint2(point2)}
                />
                <Quiz
                    backgroundStyle={styles.backgroundItem}
                    imageStyle={styles.imageItem}
                    animalName={"Pokémon"}
                    titleStyle={pickerSelectStyles.inputAndroid}
                    animalImage={require('./images/PikachuPokemon.jpg')}
                    point={(point3)=> setPoint3(point3)}
                />
                <Submit
                    buttonStyle={styles.buttonItem}
                    textButtonStyle={styles.textButtonItem}
                    answerList={answerList}
                    correctList={['marill','eevee','pikachu']}
                />
                <StatusBar hidden={true}/>
            </ScrollView>
        </View>
  );
}

const Submit = ({textButtonStyle, buttonStyle, answerList, correctList}) => {
    let count = 0
    for (let i = 0; i < correctList.length; i++) {
        if (answerList[i] === correctList[i]) {
            count += 1
        }
    }
    return (
        <View>
            <Pressable style={buttonStyle} onPress={() => Alert.alert(`You have ${count} correct answers!`)}>
                <Text style={textButtonStyle}>Submit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundMain: {
        backgroundColor: "whitesmoke",
    },
    backgroundItem: {
        alignItems: "center",
        backgroundColor: "#912d2d",
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        borderWidth: 5,
        borderColor: "#1e1e1e"
    },
    titleMain: {
        color: "white",
        fontSize: 38,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        backgroundColor: "#912d2d",
        borderBottomWidth: 5,
        borderColor: "#1e1e1e",
        marginBottom: 20,
    },
    imageItem: {
        width: "90%",
        borderWidth: 3,
        borderColor: "#1e1e1e",
    },
    buttonItem: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#912d2d',
        borderTopWidth: 5,
        borderColor: "#1e1e1e",
    },
    textButtonItem: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
})
