import React, {Component} from 'react'
import {Picker, ScrollView, Alert, View} from 'react-native'
import {Text, Button, ListItem, Icon} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import TrueFalseQuestionEditor from '../elements/TrueFalseQuestionEditor'
import MultipleChoiceQuestionEditor from "../elements/MultipleChoiceQuestionEditor";


class QuestionList extends Component {



    static navigationOptions = {title: 'QuestionList'}


    constructor(props) {
        super(props)
        this.state = {
            questions: []
        }

        this.fetchQuestion()
    }

    componentWillReceiveProps(newProps){
        newProps.status
        this.fetchQuestion()
    }



    fetchQuestion()
    {
        var fetchUrl = "https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/multi/EID".replace('EID',this.props.navigation.getParam("exam", 1).id)
        fetch(fetchUrl)
            .then(response => (response.json()))
            .then(questions => this.setState({questions}))
    }

    deleteQuestion(type, id)
    {

        var deleteUrl= "https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/qwidget/delete/question/QWID".replace('QWID', id).replace('question', type)

        fetch(deleteUrl,
            {
                body: JSON.stringify({id: id}),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }
        ).then(
            (response)=> {this.fetchQuestion()}
        )
    }






    render() {
        return(


            <ScrollView style={{padding: 7}}>


                <Button backgroundColor="green" title="Create Question" onPress={() => this.props.navigation.navigate('QuestionEditor', {exam: this.props.navigation.getParam("exam", 1)}) }/>
                {this.state.questions.map(
                    (question, index) => (
                        <ListItem
                            onPress={() =>{

                                if(question.type == 'MC'){
                                    this.props.navigation.navigate('MultipleChoicePreview', {exam: this.props.navigation.getParam("exam", 1), question: question})
                                }
                                if(question.type == 'FB'){
                                    this.props.navigation.navigate('FillInTheBlanksPreview', {exam: this.props.navigation.getParam("exam", 1), question: question})
                                }
                                if(question.type == 'ES'){
                                    this.props.navigation.navigate('EssayQuestionPreview', {exam: this.props.navigation.getParam("exam", 1), question: question})
                                }
                                if(question.type == 'TF'){
                                    this.props.navigation.navigate('TrueAndFalsePreview', {exam: this.props.navigation.getParam("exam", 1), question: question})
                                }

                            }}
                            key={index}
                            leftIcon={{name: question.icon}}
                            subtitle={question.subtitle}
                            title={question.title}

                            rightIcon={


                                <View>

                                    <View >

                                        <Icon

                                            reverse
                                            color='red'
                                            name='ios-create'
                                            type='ionicon'
                                            onPress={() =>

                                            {
                                                if(question.type == 'MC'){
                                                    this.props.navigation.navigate('MultipleChoiceQuestionEditor', {exam: this.props.navigation.getParam("exam", 1), question: question})
                                                }

                                                if(question.type == 'ES'){
                                                    this.props.navigation.navigate('EssayQuestion', {exam: this.props.navigation.getParam("exam", 1), question: question})
                                                }

                                                if(question.type == 'TF'){
                                                    this.props.navigation.navigate('TrueFalseQuestionEditor', {exam: this.props.navigation.getParam("exam", 1), question: question})
                                                }
                                                if(question.type == 'FB'){
                                                    this.props.navigation.navigate('FillInTheBlanks', {exam: this.props.navigation.getParam("exam", 1), question: question})
                                                }

                                            }





                                            }

                                        />


                                    </View>
                                    <View>

                                        <Icon
                                            reverse
                                            color='red'
                                            name='ios-trash'
                                            type='ionicon'
                                            onPress={() => this.deleteQuestion(""+question.type,"" + question.id)}

                                        />

                                    </View>





                                </View>
                            }





                        />))}



            </ScrollView>
        )
    }


}
export default QuestionList