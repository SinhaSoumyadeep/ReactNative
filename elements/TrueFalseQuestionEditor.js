import React from 'react'
import {Alert, View, ScrollView, TextInput} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import QuestionList from "../components/QuestionList";

class TrueFalseQuestionEditor extends React.Component {
    static navigationOptions = { title: "TrueFalseQuestionEditor"}
    constructor(props) {
        super(props)
        this.state = {
            examId: '',
            title: '',
            subtitle: '',
            points: 0,
            isTrue: false

        }

    }
    updateForm(newState) {
        this.setState(newState)
    }


    componentDidMount()
    {


        if(typeof this.props.navigation.getParam("question", 1).id === "undefined")
        {
            this.setState({
                examId: this.props.examId,
                title: 'default Title',
                subtitle: 'default description',
                points: 0,

            })
        }
        else{

            this.setState({
                examId: this.props.navigation.getParam("exam", 1).id,
                id: this.props.navigation.getParam("question", 1).id,
                title: this.props.navigation.getParam("question", 1).title,
                subtitle: this.props.navigation.getParam("question", 1). subtitle,
                points:this.props.navigation.getParam("question", 1). points,
                isTrue: this.props.navigation.getParam("question", 1). isTrue



            })

        }





    }


    widgetSave()
    {

        var essayQuiz = {id: this.state.id,title: this.state.title, subtitle: this.state.subtitle, points: this.state.points, options: this.state.options,isTrue: this.state.isTrue,icon: 'check', type: "TF"}
        var saveUrl = 'https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/qwidget/save/tfquestion/EID'.replace('EID',this.state.examId)

        fetch(saveUrl, {
            body: JSON.stringify(essayQuiz),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(() => this.props.navigation.navigate('QuestionList',{status: "saved"}))
    }




    render() {
        return(
            <ScrollView>
                <Text style={{borderWidth: 1, borderColor: "black"}} h4>True False Editor</Text>

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
                    text => this.updateForm({subtitle: text})
                }

                           value={""+this.state.subtitle}
                />
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>

                <FormLabel>Points</FormLabel>
                <FormInput
                    keyboardType = 'numeric'
                    onChangeText={
                        text => this.updateForm({points: text})
                    }

                    value={""+this.state.points}
                />
                <FormValidationMessage>
                    Point is required
                </FormValidationMessage>
                <CheckBox onPress={() => this.updateForm({isTrue: !this.state.isTrue})}
                          checked={this.state.isTrue} title='The answer is true'
                />



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

                <Text h3>Preview</Text>
                <View style={{borderWidth: 1, borderColor: "black", margin: 10, padding: 10,backgroundColor: "white"}}>
                    <Text style={{borderWidth: 1, borderColor: "#aaa", marginBottom: 10}} h2>True Or False</Text>
                <Text h4>{this.state.title}</Text><Text h4>Points: {this.state.points}</Text>
                <Text>Question: {this.state.subtitle}</Text>
                    <CheckBox checked={true} title='The answer is true'
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

export default withNavigation(TrueFalseQuestionEditor);

