import React, {Component} from 'react'
import {ScrollView, Alert, TextInput} from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import {Button} from 'react-native-elements'
import { Icon } from 'react-native-elements'
class AssignmentPreview extends Component {



    static navigationOptions = {title: 'AssignmentPreview'}

    render() {
        return(

            <ScrollView style={{padding: 15}}>
                <Text h2>Assignment</Text>
                <Text h3>{this.props.navigation.getParam("assignment", 1).title}</Text>
                <Text h4>Points: {this.props.navigation.getParam("assignment", 1).points}</Text>
                <Text h6>{this.props.navigation.getParam("assignment", 1).description}</Text>
                <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: "black",
                    height: 134

                }}
                />
                <Button	backgroundColor="green"
                           color="white"
                           title="Save"
                           onPress={() => {Alert.alert("save")}}/>
            </ScrollView>
        )
    }


}
export default AssignmentPreview