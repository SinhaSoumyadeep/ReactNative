import React, {Component} from 'react'
import {ScrollView, Alert, TextInput} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'


class ExamEditor extends Component {



    static navigationOptions = {title: 'ExamEditor'}


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

        if(typeof this.props.navigation.getParam("exam", 1).id === "undefined")
        {
            this.setState({
                title: 'default Title',
                description: 'default description',
                points: 0,

            })
        }
        else{

            this.setState({
                id: this.props.navigation.getParam("exam", 1).id,
                title: this.props.navigation.getParam("exam", 1).title,
                description: this.props.navigation.getParam("exam", 1).description,
                points: this.props.navigation.getParam("exam", 1).points

            })

        }





    }

    updateForm(newState) {
        this.setState(newState)

    }

    widgetSave()
    {

        var exxam = {id: this.state.id,title: this.state.title, description: this.state.description, points: this.state.points, widgetType: "Quiz"}
        var saveUrl = 'http://10.0.0.89:8080/api/qwidget/save/exam/TID'.replace('TID',this.props.navigation.getParam("topicId", 1))

        fetch(saveUrl, {
            body: JSON.stringify(exxam),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(() => this.props.navigation.navigate('ExamWidget',{status: "saved"}))

    }


    render() {
        return(


            <ScrollView>


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

            </ScrollView>
        )
    }


}
export default ExamEditor