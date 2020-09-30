import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading"
import * as Location from "expo-location"
import axios from "axios"

// npm install " " Error => npm update

// live reload : state render라 생각하자 (자동 F5), 실시간 수정사항 반영

// live reload : 화면 전체 새로고침
// hot reload  : 변경 사항 새로고침

const API_KEY = "21c123f9cdcf68dbb1075c371cedd33d"

export default class extends React.Component {


  state = {
    isLoading : true
  }

  getWeather = async(latitude, longitude)=> {
    // axios는 data를 줌
    // weather api의 url에 lat, long, apikey 삽입시 나오는 데이터 끌고 옴
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    )
    console.log(data)
    console.log("end")
  }

  getLocation = async ()=> {
    try{
      // 허가
      await Location.requestPermissionsAsync()
      
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync()
      console.log(`https://www.google.co.kr/maps/place/${latitude},${longitude}?hl=ko`)

      this.getWeather(latitude,longitude)
      this.setState({isLoading : false})
      // Send to API and get weather
    }catch(error){
      Alert.alert("Can`t find you.", "It`s Javascript Error.")
    }  
  }

  componentDidMount(){
    this.getLocation()
  }
 
  render(){
    const { isLoading } = this.state 
    return isLoading ? <Loading /> : null
  }
}