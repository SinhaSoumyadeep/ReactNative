import React, {Component} from 'react'
import {Picker, ScrollView, Alert} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

import MultipleChoiceQuestionEditor from "../elements/MultipleChoiceQuestionEditor";
import EssayQuestion from "../elements/EssayQuestion";
import TrueFalseQuestionEditor from '../elements/TrueFalseQuestionEditor';
import FillInTheBlanks from '../elements/FillInTheBlanks'


class QuestionEditor extends Component {



    static navigationOptions = {title: 'QuestionEditor'}


    constructor(props) {
        super(props)
        this.state = {
            questionType: 0,
            title: '',
            description: '',
            points: 0,
        }

    }



    updateForm(newState) {
        this.setState(newState)

    }




    render() {
        return(


            <ScrollView style={{padding: 15}}>




                <Picker
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({questionType: itemValue})}
                    selectedValue={this.state.questionType}>
                    <Picker.Item value="#" label="Select" />
                    <Picker.Item value="MC" label="Multiple choice" />
                    <Picker.Item value="ES" label="Essay" />
                    <Picker.Item value="TF" label="True or false" />
                    <Picker.Item value="FB" label="Fill in the blanks" />
                </Picker>

                {this.state.questionType==='MC' && <MultipleChoiceQuestionEditor exam={this.props.navigation.getParam("exam", 1)}/>}
                {this.state.questionType==='ES' && <EssayQuestion  exam={this.props.navigation.getParam("exam", 1)}/>}
                {this.state.questionType==='TF' && <TrueFalseQuestionEditor examId={this.props.navigation.getParam("exam", 1).id}/>}
                {this.state.questionType==='FB' && <FillInTheBlanks exam={this.props.navigation.getParam("exam", 1)}/>}


            </ScrollView>
        )
    }


}
export default QuestionEditor