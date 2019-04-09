import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Style from '../style/css'
import allShadow from '../style/shadow'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { BoxShadow } from 'react-native-shadow'
export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.form}>
                    <View style={Style.titleContainer}>
                        <Text style={Style.title}> NHÀ THÔNG MINH </Text>
                    </View>
                    <View style={Style.input}>
                        <BoxShadow setting={allShadow.shadowInput}>
                            <Input
                                containerStyle={Style.containerStyle}
                                inputContainerStyle={Style.inputContainerStyle}
                                inputStyle={Style.inputStyle}
                                placeholder='Tài khoản'
                                leftIcon={
                                    <Icon
                                        name='user'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />
                        </BoxShadow>
                        <BoxShadow setting={allShadow.shadowInput}>
                            <Input
                                containerStyle={Style.containerStyle}
                                inputContainerStyle={Style.inputContainerStyle}
                                inputStyle={Style.inputStyle}
                                placeholder='Mật khẩu'
                                secureTextEntry={true}
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />
                        </BoxShadow>
                    </View>
                    <View style={Style.btnContainer} >
                        <TouchableOpacity
                            style={Style.btnTouch}
                            onPress={()=>{this.props.navigation.navigate('TabHome')}}
                        >
                            <Text style={Style.btnText}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
