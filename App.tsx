import React, {useCallback, useState} from "react";
import {Alert, FlatList, Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {NavBar} from "./components/NavBar";
import AddTodo from "./components/AddTodo";
import {Todo} from "./components/Todo";

export interface ITodo {
  id: string;
  title: string;
}

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = useCallback((title: string) => {
    const newTodo: ITodo = {
      id: Date.now().toString(),
      title,
    }

    setTodos(prevState => [...prevState, newTodo])
  }, [todos])

  const removeTodo = useCallback((todoId: string) => {
    const filteredTodos: ITodo[] = [...todos].filter(({id}) => id !== todoId)
    setTodos(filteredTodos)
  }, [todos])

  return (
    <View style={styles.container}>
      <NavBar title="Todo App"/>
      <View style={styles.content}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList
          data={todos}
          renderItem={({item}) => <Todo todo={item} removeTodo={removeTodo} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  content: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  }
});
