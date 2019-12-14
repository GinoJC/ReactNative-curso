import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Inicio from './Inicio';
import Body from './Body';
import Final from './Final';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      numero: 3
    }
  }

  aumentar = () => {
    this.setState({
      numero: this.state.numero + 1 
    })
  }

  restar = () => {
    this.setState({
      numero: this.state.numero - 1 
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Inicio name="Calculador"/>
        <Body numero={this.state.numero}/>
        {/*<View style={styles.cajaTres}>
          <Button title="Aumentar" onPress={() => {this.aumentar();}}/>
          <Button title="Restar" onPress={() => {this.restar();}}/>
        </View>*/}
        <Final sumar={this.aumentar} restar={this.restar}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cajaUno:{
    flex: 1,
    backgroundColor: '#00ff00',
    justifyContent:'center',
    alignItems:'center'
  },
  cajaDos:{
    flex: 3,
    backgroundColor: '#90EE90',
    justifyContent:'center',
    alignItems:'center'
  },
  cajaTres:{
    flex: 1,
    backgroundColor: '#006400',
  }
});

export default App;