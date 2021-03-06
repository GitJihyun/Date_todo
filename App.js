import React from 'react';
import { StyleSheet, Text, View, Statusbar, TextInput, Dimensions,Platform, ScrollView} from 'react-native';
import ToDo from "./ToDo"
const { height, width} = Dimensions.get("window")
export default class App extends React.Component {
  state = {
    newToDo: ""
  }
  render() {
    const {newToDo}=this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>수안 지현 위시리스트</Text>
        <View style={styles.card}>
          <TextInput 
          style = {styles.input}
          placeholder ={"새로 할것"}
          value={newToDo}
          onChangeText={this._controllNewToDo}
          placeholderTextColor={"#999"}
          returnKeyTupe={"done"}
          autoCorrect={false}
          ></TextInput>
          <ScrollView><ToDo></ToDo></ScrollView>
        </View>
      </View>
    );
  }
  _controllNewToDo = text=>{
    this.setState({
      newToDo: text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',

  },
  title:{
    color: "white",
    fontSize: 30,
    marginTop: 100,
    fontWeight:"400",
    marginBottom: 30  
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width-25,
    borderTopLeftRadius :10,
    borderTopRightRadius : 10,
    ...Platform.select({
      ios: {
        shadowColor:"rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius:  10,
        shadowOffset:{
          height: -1,
          width: 0
        }
      },
      android:{
        elevation: 3
      }
    })
  },
  input:{
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  }
});
