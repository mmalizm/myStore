/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, FlatList, Image, ScrollView, I18nManager,Dimensions} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            application: null,
        }
    }

    getAppCategory() {

        fetch('http://androidsupport.ir/market/getCategories.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({application: responseJson})
            })
            .catch((error) => {
                console.log(error)
            })

    }

    componentDidMount() {
        this.getAppCategory();
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView >

                    <FlatList
                        style={{flex: 1, flexDirection: 'column',}}
                        vertical={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.application}

                        renderItem={({item}) => <View style={styles.card}>

                            <Text style={styles.text}>{item.title}</Text>

                            <View style={styles.imagecard}>
                                <Image
                                    source={{uri: "http://androidsupport.ir/market/images/" + item.icon}}
                                    style={styles.image}/>
                            </View>


                        </View>}
                    />

                </ScrollView>

            </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({

    container: {

    },

    card: {
        alignItems: 'center',
        justifyContent:'flex-end',
        flex:1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginBottom: 1,
        height: responsiveHeight(20), // 50% of screen height

    },

    text: {
        marginRight:15,
        fontSize: responsiveFontSize(2), // 2% of total screen size
        //textAlignVertical: 'center'
    },

    imagecard: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#E5E5E5',
        width: 96,
        height: 96,
        margin: 0,
        padding: 0,
    },

    image: {
        alignItems: 'center',
        justifyContent:'center',
        width: 64,
        height: 64,
    },

});
