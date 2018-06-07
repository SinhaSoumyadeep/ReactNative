import React, {Component} from 'react'
import {View, ScrollView, Alert, TextInput} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'


class AssignmentEditor extends Component {



    static navigationOptions = {title: 'AssignmentEditor'}


    constructor(props) {
        super(props)


        this.state = {
            title: 'default Title',
            description: 'default description',
            points: 0,
        }



    }

    componentDidMount()
    {

        if(typeof this.props.navigation.getParam("assignment", 1).id === "undefined")
        {
            this.setState({
                title: 'default Title',
                description: 'default description',
                points: 0,

            })
        }
        else{

            this.setState({
                id: this.props.navigation.getParam("assignment", 1).id,
                title: this.props.navigation.getParam("assignment", 1).title,
                description: this.props.navigation.getParam("assignment", 1).description,
                points: this.props.navigation.getParam("assignment", 1).points

            })

        }





    }

    updateForm(newState) {
        this.setState(newState)

    }

    widgetSave()
    {

        var assign = {id: this.props.navigation.getParam("assignment", 1).id,title: this.state.title, description: this.state.description, points: this.state.points, widgetType: "Assignment"}
        var saveUrl = 'http://10.0.0.89:8080/api/qwidget/save/TID'.replace('TID',this.props.navigation.getParam("topicId", 1))

        fetch(saveUrl, {
            body: JSON.stringify(assign),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(() => this.props.navigation.navigate('Assignment',{status: "saved"}))
    }


    render() {
        return(


            <ScrollView >




                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({title: text})
                }
                value={""+this.state.title}
                />
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>

                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({description: text})
                }
                           value={""+this.state.description}


                />
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>
                <FormLabel>Points</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({points: text})
                }
                           value={""+this.state.points}
                />
                <FormValidationMessage>
                    Points is required
                </FormValidationMessage>

                <Button	backgroundColor="green"
                           color="white"
                           title="Save"
                           onPress={() => {this.widgetSave()}}/>
                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"/>

                <Text h3>Preview</Text>
                <View style={{borderWidth: 1, borderColor: "black", margin: 10, padding: 10, backgroundColor: "white"}}>
                <Text style={{borderWidth: 1, borderColor: "#aaa"}} h2>Assignment</Text>
                    <View>
                        <Text h3>{this.state.title}</Text>
                        <Text h4>Points: {this.state.points}</Text>
                        <Text h6>{this.state.description}</Text>
                    </View>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: "#aaa",
                        height: 134

                    }}
                />
                <Button	backgroundColor="green"
                           color="white"
                           title="Save"
                           onPress={() => {Alert.alert("save")}}/>
                </View>

            </ScrollView>
        )
    }


}
export default AssignmentEditor