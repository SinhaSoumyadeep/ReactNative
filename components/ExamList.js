import React, {Component} from 'react'
import {View, ScrollView, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import {Button} from 'react-native-elements'
import { Icon } from 'react-native-elements'
class ExamList extends Component {



    static navigationOptions = {title: 'ExamList'}
    constructor(props) {
        super(props)


    }







    render() {
        return(

            <ScrollView style={{padding: 15}}>


                <Button title="Add Questions"
                        onPress={() => this.props.navigation
                            .navigate('QuestionList')}/>


            </ScrollView>
        )
    }


}
export default ExamList