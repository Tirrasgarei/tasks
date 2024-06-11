import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground} from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

import today_Image from "../../assets/imgs/today.jpg"

export default class TaskList extends Component{
    render(){
        const today = moment().locale(pt-br).format('ddd, D [de] MMMM')
        return(
            <View style={styles.container}>

                <ImageBackground source={today_Image} style={styles.background}>
                <view style={styles.titleBar}>
                    <text style={styles.title}>Hoje</text>
                    <text style={styles.subTitle}>{today}</text>
                </view>

                </ImageBackground>
                <View style={styles.taskList}>
                    <text>Lista de tarefas</text>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background:{
        flex: 3
    },
    taskList:{
        flex:7
    },
    titleBar:{
        flex: 1,
        justifycontent: 'flex-end'
    },
    title:{
        fontFamily: 'arial',
        fontsize: 50,
        color: '#fff',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle:{
        fontFamily: 'arial',
        fontsize: 20,
        color: '#fff',
        marginLeft: 20,
        marginBottom: 30
    }


})