import React, { } from 'react';
import{View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {Task} from './App';
//TARJETA TAREAS

interface ItemProps{
    item: Task //TIPAMOS PARA OBLIGAR A TENER LOS COMPONENTES DE Task, title,date etc
    markDone: () => void; //FUNCION QUE DETERMINA SI LA TAREA ESTÁ COMPLETA O
    deleteFunction: () => void;//FUNCION UTILIZADA PARA BORRAR LA TARJETA AL PULSAR BOTÓN
  }
export default function RenderItem({
  item,
  markDone,
  deleteFunction,
}: ItemProps){ //LE DECIMOS QUE ITEM VA A ASER UN ITEM TIPO TASK Y markDone
    return (//METEMOS EL TEXT EN UN VIEW PARA PODER DARLE UN ESTILO, SI TIENE DONE TRUE LE AGREGA EL SUBRAYADO, SI NO SE LO QUITA, ES UNA CONDICIONAL.
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={markDone}>
            <Text style={item.done ? styles.textTaskDone : styles.text}>
              {item.title}
            </Text>
            <Text style={item.done ? styles.textTaskDone : styles.text}>
              {item.date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {//BOTON ELIMINAR TASK
            item.done && ( //ESTO ES OTRO CONDICIONAL CON UN DOBLE AND, SI EL ITEM ES TRUE, MUESTRA EL BOTON, SI ES FALSE LO OCULTA.
              <TouchableOpacity style={styles.deleteTaskBtn} onPress={deleteFunction}>
                <Text style={styles.whiteText}>Eliminar</Text>
              </TouchableOpacity>
            )
          }
        </View>
      );
}
