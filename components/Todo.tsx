import React, {FC} from 'react';
import {View, StyleSheet, Text, Pressable} from "react-native";
import {ITodo} from "../App";

interface Props {
  todo: ITodo;
  removeTodo: (id: string) => void;
}

export const Todo: FC<Props> = ({todo, removeTodo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo.title}</Text>
      <Pressable style={styles.button} onPress={() => removeTodo(todo.id)}>
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
    marginTop: 5,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#3949ab",
    elevation: 3,
  },
  buttonText: {
    color: "#3949ab",
    fontSize: 16,
  }
})
