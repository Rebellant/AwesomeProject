import React, { useState } from 'react';
import styles from './Styles';
import RenderItem from './RenderItem';
import { //AQUÍ SE AÑADEN TODOS LOS IMPORTS DE LOS ELEMENTOS QUE UTILIZAREMOS EN NUESTRA APP
  View,
  Text,
  TextInput,
  TouchableOpacity, //ACTUA COMO UN BOTON PERO MAS PERSONALIZABLE
  FlatList, //NOS AYUDA A RENDERIZAR INFO EN APPS DE SCROLL
} from 'react-native';
console.log('hola');
//tasks SERÁ NUESTRO ARRAY DE CONTENIDO DE JS, EL CUAL SE LO PASAREMOS A data

//placeholder: ES EL HINT DEL TEXTINPUT
//data: ES EL ELEMENTO QUE VA A RECIBIR FLATLIST PARA PODER RENDERIZAR LOS ITEMS, Y data ES EL ARRAY DE OBJETOS
//renderItem: NOS AYUDA A RENDERIZAR CADA ITEM QUE TENEMOS EN LA LISTA
// item.done ? styles.textTaskDone : styles.text ESTA LINEA CONDICIONA EL ESTILO

export interface Task { //interface:se usa para definir la estructura de un objeto, es decir, qué propiedades y tipos debe tener.
  title: String;
  done: boolean;
  date: Date;
}

export default function App() {
  const [text, setText] = useState('');// EL TEXTO QUE ESCRIBIMOS SE ALMACENA EN NUESTRO USE STATE
  const [tasks, setTasks] = useState<Task[]>([]); //ESPECIFICAMOS A USE STATE QUE VA A SER UN ARRAY DE TAREAS

  const addTask = () => {
    const tmp = [...tasks] //EL OPERADOR DE 3 PUNTOS EN JS "..." NOS PERMITE CREAR UN ARRAY EN UNO QUE YA EXISTE
    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask); //AL HACER UN PUSH YA TENDREMOS EN tmp LA NUEVA TAREA QUE HEMOS AGREGADO
    setTasks(tmp);
    setText('');//LIMPIAMOS EL CAMPO DE TEXTO AL AÑADIR LA TAREA PASANDOLE UN TEXTO VACÍO
  };
  const markDone = () => {
    console.log('marked task');
  };
  const deleteFunction = () => {
    console.log('Delete');
  };
  //TARJETAS TAREAS
  return (
    /*INTERFAZ PRINCIPAL*/
    <View style={styles.container}>
      {/*TITULO*/}
      <Text style={styles.title}>To do list</Text>
      {/*CONTAINER DE AÑADIR TAREAS NUEVAS*/}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="New task"
          onChangeText={(t: string)=> setText(t)} //CADA VEZ QUE ALGUIEN ESCRIBA SE REFLEJA EN EL VALOR Y CAMBIARA
          value={text}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={addTask} style={styles.touchableOpacityButton}>
          <Text style={styles.whiteText}>Add</Text>
        </TouchableOpacity>
      </View>
      {/*LISTA DE TARJETAS*/}
      <View style={styles.scrollContainer}>
        <FlatList renderItem={({ item }) => (
          <RenderItem item={item} deleteFunction={deleteFunction} markDone={markDone} />
        )} data={tasks}
        /> {/*RenderItem es una funcion que devuelve un Item,entonces le pasamos el objeto al RenderItem*/}
      </View>
    </View>
  );
}
