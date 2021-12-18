import React, {FC, useState} from 'react';
import {View, StyleSheet, TextInput, Button, Keyboard, Alert, TouchableWithoutFeedback} from "react-native";

interface Props {
  onSubmit: (title: string) => void
}

const AddTodo: FC<Props> = ({onSubmit}) => {
  const [title, setTitle] = useState<string>('')

  const onPressHandler = () => {
    if (!title.trim()) {
      Alert.alert('Название дела не может быть пустым!')
      setTitle('')
      return;
    }
    onSubmit(title)
    setTitle('')
  }

  return (
    <View style={styles.block} >
      <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholderTextColor="black" placeholder="Введите название дела..." autoCorrect={false}/>
      <Button title="Добавить" onPress={onPressHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "70%",
    padding: 5,
    lineHeight: 20,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    fontSize: 16
  }
})

export default AddTodo;