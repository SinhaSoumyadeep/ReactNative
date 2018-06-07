import React, {Component} from 'react'
import {ScrollView, View, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import {Button} from 'react-native-elements'
import { Icon } from 'react-native-elements'
class ExamWidget extends Component {



    static navigationOptions = {title: 'ExamWidget'}
    constructor(props) {
        super(props)
        this.state = {
            exams: []
        }
        this.fetchExams()

    }

    componentWillReceiveProps(newProps){
        newProps.status
        this.fetchExams()
    }

    fetchExams()
    {
        var fetchUrl = "https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/qwidget/exam/TID".replace('TID',this.props.navigation.getParam("topicId", 1))
        fetch(fetchUrl)
            .then(response => (response.json()))
            .then(exams => this.setState({exams}))
    }

    widgetSave()
    {

        var exxam = {title: "DEFAULT_EXAM", description: "DEFAULT_DESCRIPTION", points: "0", widgetType: "Quiz"}
        var saveUrl = 'https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/qwidget/save/exam/TID'.replace('TID',this.props.navigation.getParam("topicId", 1))

        fetch(saveUrl, {
            body: JSON.stringify(exxam),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(
            (response)=> {this.fetchExams()}
        )
    }


    deleteExam(id)
    {

        var deleteUrl= "https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/qwidget/delete/QWID".replace('QWID', id)
        fetch(deleteUrl,
            {
                body: JSON.stringify({id: id}),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }
        ).then(
            (response)=> {this.fetchExams()}
        )
    }




    render() {
        return(


            <ScrollView style={{padding: 15}}>


                <Button backgroundColor="green" title="Create Quiz"
                        onPress={() => {this.widgetSave()}} />
                {this.state.exams.map(
                    (exam, index) => (
                        <ListItem
                            onPress={() => this.props.navigation.navigate('QuestionList', {exam: exam}) }
                            key={index}
                            leftIcon={{name: 'subject'}}
                            subtitle={exam.description}
                            title={exam.title}

                            rightIcon={


                                <View>

                                    <View >

                                        <Icon

                                            reverse
                                            color='red'
                                            name='ios-create'
                                            type='ionicon'
                                            onPress={() => this.props.navigation.navigate('ExamEditor', {topicId: this.props.navigation.getParam("topicId", 1),exam: exam})}
                                        />


                                    </View>
                                    <View>

                                        <Icon
                                            reverse
                                            color='red'
                                            name='ios-trash'
                                            type='ionicon'
                                            onPress={() => this.deleteExam("" + exam.id)}
                                        />

                                    </View>





                                </View>
                            }





                        />))}

            </ScrollView>
        )
    }


}
export default ExamWidget