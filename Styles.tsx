import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#6f6f6f',
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f',
  },
  textTaskDone: {
    fontSize: 16,
    color: '#6f6f6f',
    textDecorationLine: 'line-through', //AGREGA EL RAYADO AL TEXTO
    textDecorationColor: '#6f6f6f', //COLOR DEL RAYADO
  },
  whiteText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#6f6f6f',
    width: Dimensions.get('screen').width * 0.6,//ESTO DEVUELVE EL TAMAÑO TOTAL DEL DISPOSITIVO, y con el *0.7 devuelve solo el 70%
    borderRadius: 20,
    paddingLeft: 15,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchableOpacityButton: {
    backgroundColor: '#3C83D1',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.25,//ESTO DEVUELVE EL TAMAÑO TOTAL DEL DISPOSITIVO
    borderRadius: 10,
  },
  deleteTaskBtn: {
    backgroundColor: '#f80000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  scrollContainer: {
    marginTop: 20,
  },
  itemContainer: {
    paddingVertical: 20, //REACT TIENE ESTA FUNCION QUE AÑADE EL PADDING TANTO ARRIBA COMO ABAJO
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
