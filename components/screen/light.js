import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import Style from '../style/css'
import SwitchToggle from 'react-native-switch-toggle';


export default class LightScreen extends Component {
  static navigationOptions = {
    title: 'Đèn',
  };
  // chỉ test nếu dùng nên kết hợp redux để quản lý các state
  constructor(props) {
    super(props)
    this.state = {
      btnState0: false,
      btnState1: false,
      btnState2: false,
      btnState3: false,
      btnState4: false,
      btnState5: false,
    }
  }
  render() {
    return (
      <View>
        <ImageBackground source={require('../images/bgHome/home.jpg')} style={Style.homeContainer}>
          <View style={Style.fill}>
            <View style={Style.lightTitleContainer}>
              <Text style={Style.lightTitle}> HỆ THỐNG ĐÈN </Text>
            </View>

            <View style={Style.lightControlContainer}>

              <View style={Style.lightBtnName}>
                <TouchableOpacity style={Style.eachLightControl} >
                  <Text style={Style.textLight}>Sân</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.eachLightControl}>
                  <Text style={Style.textLight}>Nhà tắm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.eachLightControl}>
                  <Text style={Style.textLight}>Phòng ngủ 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.eachLightControl}>
                  <Text style={Style.textLight}>Phòng ngủ 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.eachLightControl}>
                  <Text style={Style.textLight}>Phòng ngủ 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.eachLightControl}>
                  <Text style={Style.textLight}>Phòng khách</Text>
                </TouchableOpacity>
              </View>

              <View style={Style.switchBtnName}>
                <SwitchToggle
                  switchOn={this.state.btnState0}
                  onPress={() => { this.setState({ btnState0: !this.state.btnState0 }) }}
                  containerStyle={Style.switchContainer}
                  circleStyle={Style.switchCircle}
                  circleColorOff='white'
                  circleColorOn='white'
                  backgroundColorOn='#29954A'
                  backgroundColorOff='#7A8A7F'
                />
                <SwitchToggle
                  switchOn={this.state.btnState1}
                  onPress={() => { this.setState({ btnState1: !this.state.btnState1 }) }}
                  containerStyle={Style.switchContainer}
                  circleStyle={Style.switchCircle}
                  circleColorOff='white'
                  circleColorOn='white'
                  backgroundColorOn='#29954A'
                  backgroundColorOff='#7A8A7F'
                />
                <SwitchToggle
                  switchOn={this.state.btnState2}
                  onPress={() => { this.setState({ btnState2: !this.state.btnState2 }) }}
                  containerStyle={Style.switchContainer}
                  circleStyle={Style.switchCircle}
                  circleColorOff='white'
                  circleColorOn='white'
                  backgroundColorOn='#29954A'
                  backgroundColorOff='#7A8A7F'
                />
                <SwitchToggle
                  switchOn={this.state.btnState3}
                  onPress={() => { this.setState({ btnState3: !this.state.btnState3 }) }}
                  containerStyle={Style.switchContainer}
                  circleStyle={Style.switchCircle}
                  circleColorOff='white'
                  circleColorOn='white'
                  backgroundColorOn='#29954A'
                  backgroundColorOff='#7A8A7F'
                />
                <SwitchToggle
                  switchOn={this.state.btnState4}
                  onPress={() => { this.setState({ btnState4: !this.state.btnState4 }) }}
                  containerStyle={Style.switchContainer}
                  circleStyle={Style.switchCircle}
                  circleColorOff='white'
                  circleColorOn='white'
                  backgroundColorOn='#29954A'
                  backgroundColorOff='#7A8A7F'
                />
                <SwitchToggle
                  switchOn={this.state.btnState5}
                  onPress={() => { this.setState({ btnState5: !this.state.btnState5 }) }}
                  containerStyle={Style.switchContainer}
                  circleStyle={Style.switchCircle}
                  circleColorOff='white'
                  circleColorOn='white'
                  backgroundColorOn='#29954A'
                  backgroundColorOff='#7A8A7F'
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
