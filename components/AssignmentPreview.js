import React, {Component} from 'react'
import {ScrollView, View, Alert, TextInput} from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import {Button} from 'react-native-elements'
import { Icon } from 'react-native-elements'
class AssignmentPreview extends Component {



    static navigationOptions = {title: 'AssignmentPreview'}

    render() {
        return(

            <ScrollView>
                <View>

                    <Text h3>Preview</Text>
                    <View style={{borderWidth: 1, borderColor: "black", margin: 10, padding: 10,backgroundColor: "white"}}>
                <Text style={{borderWidth: 1, borderColor: "#aaa", marginBottom: 10}} h2>Assignment</Text>
                <Text h3>{this.props.navigation.getParam("assignment", 1).title}</Text>
                <Text h4>Points: {this.props.navigation.getParam("assignment", 1).points}</Text>
                <Text h6>{this.props.navigation.getParam("assignment", 1).description}</Text>
                <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: "black",
                    height: 134,
                    backgroundColor: "white",
                    margin: 7,
                    padding: 4
                }}
                />
                        <View style={{marginTop: 10}}>
                            <Button	backgroundColor="green"
                                       color="white"
                                       title="Save"

                            />
                            <Button	backgroundColor="red"
                                       color="white"
                                       title="Cancel"/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }


}
export default AssignmentPreview