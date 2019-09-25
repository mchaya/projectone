import React, { createElement, Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//coffee component
import Coffee from './Components/Coffeeimage';

//coffee JSON LIST
import coffeeMachine from './coffeemachine.json';


export default class App extends React.Component {


  state = { coffee: []}

  componentDidMount(){
    setTimeout(() =>this.setState({coffee: coffeeMachine}))
  }


  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {
        coffeeMachine.map((coffee, index) =>
        <Coffee 
       key= {index}
       leftbutton={coffee.leftbutton}
       middlebutton={coffee.middlebutton}
       rightbutton={coffee.rightbutton}
       shine={coffee.shine}></Coffee>
        )
      }
      <Text style={styles.h1}>This App is under construction!</Text>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     backgroundColor: 'gray'
//   },
//   h1: {
//     fontSize: 24,
//     color: 'red',
//     fontWeight: 'bold'
//   }
// });
  

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        backgroundColor: 'purple'
      },
      h1: {
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold'
      }
    });
