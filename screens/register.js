import React, { Component } from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';


export default class RegisterScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>GOVIC</Text>
                            <TextInput placeholder="Full Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                            <TextInput placeholder="CNIC Number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                            <TextInput placeholder="Phone Number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                            <Button
                                buttonStyle={styles.loginButton}
                                onPress={() => this.onLoginPress()}
                                title="Register"
                            />
                            <Button
                                buttonStyle={styles.fbLoginButton}
                                onPress={() => this.props.navigation.navigate("Login")}
                                title="Login"
                                color="#3897f1"
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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