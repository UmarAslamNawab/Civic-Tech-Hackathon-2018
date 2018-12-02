import React, { Component } from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import CameraExample from './camra'

export default class Complain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            camra: false
        }
    }
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View>

                <KeyboardAvoidingView>
                <Text style={{ backgroundColor: '#000', textAlign: 'center', color: '#fff', padding: 10, fontSize: 20 }} >GOVIC SERVICES</Text>

                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <View>
                                <Text style={styles.logoText}>Complain</Text>
                                <TextInput placeholder="Full Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <TextInput placeholder="Phone Number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <TextInput placeholder="Complain" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <Button
                                    title='Upload Image'
                                    onPress={() => this.props.navigation.navigate('Camra')}
                                />
                                <Button
                                    buttonStyle={styles.loginButton}
                                    onPress={() => this.onLoginPress()}
                                    title="Submit"
                                />

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>

                <CameraExample />



            </View>
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onLoginPress() {

    }

    register() {

    }
}