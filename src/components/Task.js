import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground} from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

export default props => {
    return(
        <view style={Styles.container}>
            <text style={styles.desc}>Descrição da tarefa</text>
            <text style={styles.date}>Data estimada conclusão</text>
            <text style={styles.date}>Data conclusão</text>
        </view>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    desc:{
        fontFamily: 'Arial',
        fontSize: 20
    },
    date:{
        fontFamily: 'Arial'
    }
})