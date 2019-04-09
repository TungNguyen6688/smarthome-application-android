import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Style from '../style/css'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
export default class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Trò chuyện',
  };
  render() {
    return (
      <View>
        <ImageBackground source={require('../images/bgHome/home.jpg')} style={Style.homeContainer}>
          <View style={Style.fill}>
            <View style={Style.lightTitleContainer}>
              <Text style={Style.lightTitle}> TRÒ CHUYỆN </Text>
            </View>
            <View style={Style.chatContainer}>
              <View style={Style.chat}>
                <View style={Style.a}>
                  <View style={Style.textContainer1}>
                    <Text style={Style.textChat1}>Chào bạn</Text>
                  </View>
                  <View style={Style.textContainer1}>
                    <Text style={Style.textChat1}>Rãnh quá dạ</Text>
                  </View>
                </View>
                <View style={Style.b}>
                  <View style={Style.textContainer2}>
                    <Text style={Style.textChat2}>Chào lại nha</Text>
                  </View>
                  <View style={Style.textContainer2}>
                    <Text style={Style.textChat2}>Ahihi rãnh chứ sao không? </Text>
                  </View>
                </View>
              </View>
              <View style={Style.send}>
                <View style={Style.innerSend}>
                  <Input
                    placeholder='Nhập nội dung gửi'
                    rightIcon={
                      <Icon
                        name='paper-plane'
                        size={28}
                        color='black'
                      />
                    }
                    inputContainerStyle={Style.inputContainerStyle}
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
