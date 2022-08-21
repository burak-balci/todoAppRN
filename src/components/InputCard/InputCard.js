import React, {useState} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import styles from './InputCard.styles';

const InputCard = ({handleClick, todo, setTodo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholderTextColor="#808080"
          value={todo}
          onChangeText={setTodo}
          style={styles.textinput}
          placeholder="Yapılacaklar..."
        />
        <View style={styles.seperator}></View>
      </View>
      <TouchableHighlight
        onPress={() => handleClick(todo)}
        style={styles.button}>
        <Text style={styles.buttontext}>Kaydet</Text>
      </TouchableHighlight>
    </View>
  );
};

export default InputCard;
