import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import InputCard from './components/InputCard';
import TodoCard from './components/TodoCard';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleClick = todo => {
    const newTodo = {
      id: Date.now() + Math.random(),
      title: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodo('');
  };

  const changeCompleted = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const renderTodos = ({item}) => (
    <TodoCard
      handleDelete={handleDelete}
      changeCompleted={changeCompleted}
      todo={item}
    />
  );

  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Yapılacaklar</Text>
        <Text style={styles.text}>{activeTodos.length}</Text>
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={renderTodos}
      />
      <InputCard todo={todo} setTodo={setTodo} handleClick={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    flexDirection: 'column',
  },
  title: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFA500',
  },
});

export default App;
