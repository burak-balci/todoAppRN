import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './TodoCard.styles';

const TodoCard = ({todo, changeCompleted, handleDelete}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => changeCompleted(todo.id)}
        onLongPress={() => handleDelete(todo.id)}>
        <Text style={todo.completed ? styles.completedText : styles.text}>
          {todo.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;
