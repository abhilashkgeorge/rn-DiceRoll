import { ImageSourcePropType, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, {useState} from 'react';

//images import 

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'
import { PropsWithChildren } from 'react';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.DiceImage}
      source={imageUrl}
      />

    </View>
  )
}

export default function App(): JSX.Element {
  const [diceImage, setDiceImage ] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }

  }
  return (
    <View style={styles.container}>
      <Dice  imageUrl={diceImage}/>
      <Pressable style={styles.rollDiceButton}
      onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceButtonText}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DiceImage: {
    width: 100,
    height: 100,
    marginBottom: 20
  }, 
  rollDiceButton: {
    width: 150,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 10
  }, 
  rollDiceButtonText: {
    color: '#fff',
    fontSize: 15,

  },
});
