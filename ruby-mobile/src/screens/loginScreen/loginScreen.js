import React from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import { Form, Button, Item } from 'native-base';
import { login } from '../../../constants/Apis';
import PasswordInputText from 'react-native-hide-show-password-input';
import ValidationComponent from 'react-native-form-validator';




class loginScreen extends ValidationComponent {
    constructor(props) {
        super(props);

        this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.FunctionToSubmitLogins = this.FunctionToSubmitLogins.bind(this);

        this.state = {
            phoneNumber: '',
            password: '',
        }
    }
    onChangephoneNumber(e){
        this.setState({ phoneNumber: e })
    }
    onChangepassword(e){
        this.setState({ password: e })
    }

      async FunctionToSubmitLogins(e) {
          e.preventDefault()


          const userObject = {
              phoneNumber: this.state.phoneNumber,
              password: this.state.password,

          };
          this.validate({
            phoneNumber: {minlength:10, maxlength:12,   keyboardType:'numeric',
            required: true},
            password: {minlength:6, maxlength:10, required: true},

        });
            // calling the api from api.js
            const loguser = await login(userObject);
            this.setState({ phoneNumber: '', password: '' })
            if(loguser.token){
                // @TODO store token and redirect: usign asyncStorage
                this.props.navigation.navigate('Home')
            }else{
                if(loguser.message){
                    Alert.alert(
                        'Something should pop up'
                      );
                }

            }
            console.log(loguser.token);
        }



    render() {

        return (
            <View>
               <View style={{marginTop: 10, alignItems: 'center' }}>
                <Text style={{fontSize: 30}}>Login Here
                </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                 <Form>

                 <Item>
                     <TextInput placeholder="Phone Number" value={this.state.phoneNumber} onChangeText={this.onChangephoneNumber}
                                />
                                 {this.isFieldInError('phoneNumber') && this.getErrorsInField('phoneNumber').map(errorMessage => <Text>{errorMessage}</Text>) }

              </Item>
              <PasswordInputText placeholder="Password" value={this.state.password} onChangeText={this.onChangepassword} />
              {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text>{errorMessage}</Text>) }


                    <View>
                    <Button block danger
                    style={{ marginTop: 50}}

                    onPress = {this.FunctionToSubmitLogins}
                    >
                        <Text>Login</Text>
                    </Button>
                </View>
                 </Form>


             </View>
</View>
        );
        }

    }
export default loginScreen;