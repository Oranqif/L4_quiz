import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';

export default function App() {
    const [point1, setPoint1] = useState();
    const [point2, setPoint2] = useState();
    const [point3, setPoint3] = useState();
    const answerList = [point1, point2, point3]
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titleText}>Pokemon Quiz</Text>
                <Quiz style={styles.questionText} animal={require('./images/MarillPokemon.jpg')} point={(point1)=> setPoint1(point1)}/>
                <Quiz style={styles.questionText} animal={require('./images/EeveePokemon.jpg')} point={(point2)=> setPoint2(point2)}/>
                <Quiz style={styles.questionText} animal={require('./images/PikachuPokemon.jpg')} point={(point3)=> setPoint3(point3)}/>
                <Submit style={'#570202'} answerList={answerList} correctList={['marill','eevee','pikachu']}/>
                <StatusBar hidden={true}/>
            </ScrollView>
        </View>
  );
}

const Quiz = ({style, animal, point}) => {
    return (
      <View>
          <Image source={animal} style={{height:200,width:500}}/>
          <Text style={style}>What Pokemon is this?</Text>
          <RNPickerSelect style={style} placeholder={{label:'Choose the answer',color:'white'}} onValueChange={(point)} items={[
              {label: 'Eevee', value: 'eevee'},
              {label: 'Pikachu', value: 'pikachu'},
              {label: 'Marill', value: 'marill'},
          ]}/>
      </View>
  )
}

const Submit = ({style, answerList, correctList}) => {
    let count = 0
    for (let i = 0; i < correctList.length; i++) {
        if (answerList[i] === correctList[i]) {
            count += 1
        }
    }
    return (
        <View>
            <Button color={style} onPress={() => Alert.alert(`You have ${count} correct answers!`)} title='Submit'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#870000',
    },
    titleText: {
        color: 'white',
        fontSize: 38
    },
    questionText: {
        color: 'white',
        fontSize: 28
    }
});
