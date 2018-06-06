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
        var fetchUrl = "http://10.0.0.89:8080/api/multi/EID".replace('EID',this.props.navigation.getParam("exam", 1).id)
        fetch(fetchUrl)
            .then(response => (response.json()))
            .then(questions => this.setState({questions}))
    }







    render() {
        return(


            <ScrollView style={{padding: 15}}>

                <Text h1>THIS IS "Question" THE Exam ID:{this.props.navigation.getParam("exam", 1).id}</Text>
                <Button title="Create Question" onPress={() => this.props.navigation.navigate('QuestionEditor', {exam: this.props.navigation.getParam("exam", 1)}) }/>
                {this.state.questions.map(
                    (question, index) => (
                        <ListItem

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
                                            onPress={() => this.props.navigation.navigate('MultipleChoiceQuestionEditor', {exam: this.props.navigation.getParam("exam", 1), question: question})}

                                        />


                                    </View>
                                    <View>

                                        <Icon
                                            reverse
                                            color='red'
                                            name='ios-trash'
                                            type='ionicon'

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