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
        var saveUrl = 'https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/qwidget/save/TID'.replace('TID',this.props.navigation.getParam("topicId", 1))

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

                <View style={{marginTop: 10}}>
                    <Button	backgroundColor="green"
                               color="white"
                               title="Save"
                               onPress={() => {this.widgetSave()}}

                    />
                    <Button	backgroundColor="red"
                               color="white"
                               title="Cancel"
                               onPress={()=>{this.props.navigation.goBack()}}
                    />
                </View>

                <View style={{marginTop: 50}}>

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
                </View>

            </ScrollView>
        )
    }


}
export default AssignmentEditor