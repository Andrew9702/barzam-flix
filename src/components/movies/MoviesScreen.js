import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

class MoviesScreen extends Component {
    
    handlePress = () => {
        console.log("See more", this.props);
        this.props.navigation.navigate('MovieDetail');
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Movies Screen</Text>
                <Pressable style={styles.btn} onPress={this.handlePress}>
                    <Text style={styles.btnText} >See more</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: "gray",
    },
    
    title: {
        color: 'yellow',
        fontSize: 50,
        textAlign: 'center'
    },

    btn: {
       padding: 8,
       backgroundColor: "blue",
       borderRadius: 8,
       margin: 16
    },

    btnText: {
        color: "white",
        textAlign: "center"
    }
});

export default MoviesScreen;