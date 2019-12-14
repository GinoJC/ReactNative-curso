import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.numero}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#90EE90',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Body;