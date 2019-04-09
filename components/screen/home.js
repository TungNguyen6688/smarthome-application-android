import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Style from '../style/css'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Trang chủ',
  };
  render() {
    return (
      <View>
        <ImageBackground source={require('../images/bgHome/home.jpg')} style={Style.homeContainer}>
          <View style={Style.fill}>
            <View style={Style.homeTitleContainer}>
              <Text style={Style.homeTitle}> NHÀ THÔNG MINH </Text>
            </View>
            <View style={Style.homeGeneralInfo}>
              <View style={Style.homeLogoContainer}>
                <View style={Style.homeLogo}>
                  <Icon
                    name='md-home'
                    size={40}
                    color='white'
                  />
                  <Text style={Style.homeLogoTitle}>tientran</Text>
                </View>
                <View style={Style.homeLogoTextContainer}>
                  <Text style={Style.homeLogoText}>* Báo cháy: không có </Text>
                  <Text style={Style.homeLogoText}>* Đèn bật: 2 đèn </Text>
                  <Text style={Style.homeLogoText}>* Máy lạnh: Bật/Tắt  28°C </Text>
                  <Text style={Style.homeLogoText}>* Thời tiết: Cần Thơ 31°C</Text>
                </View>
              </View>
            </View>
            <View style={Style.sensorContainer1}>
              <View style={Style.sensorNameContainer}>
                <Text style={Style.sensorName}>NHIỆT ĐỘ</Text>
              </View>
              <View style={Style.sensorInfo}>
                <View style={Style.sensor1}>
                  <Text style={Style.sensorText}>P.Ngủ 1: 23°C</Text>
                  <Text style={Style.sensorText}>P.Ngủ 2: 28°C</Text>
                </View>
                <View style={Style.sensor2}>
                  <Text style={Style.sensorText}>Bếp: 32°C</Text>
                  <Text style={Style.sensorText}>Phòng khách: 31°C</Text>
                </View>
              </View>
            </View>
            <View style={Style.sensorContainer2}>
              <View style={Style.sensorNameContainer}>
                <Text style={Style.sensorName}>ĐỘ ẨM</Text>
              </View>
              <View style={Style.sensorInfo}>
                <View style={Style.sensor1}>
                  <Text style={Style.sensorText}>P.Ngủ 1: 80%</Text>
                  <Text style={Style.sensorText}>P.Ngủ 2: 77%</Text>
                </View>
                <View style={Style.sensor2}>
                  <Text style={Style.sensorText}>Bếp: 83%</Text>
                  <Text style={Style.sensorText}>Phòng khách: 75%</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
