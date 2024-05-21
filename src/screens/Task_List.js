import React, {Component} from "react"
import { StyleSheet, View, Text } from "react-native"

export default class TaskList extends Component{
    render(){
        return(
            <View>
                <text>Lista de tarefas</text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }

})