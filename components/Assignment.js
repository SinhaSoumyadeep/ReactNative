import React, {Component} from 'react'
import {View, ScrollView, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import {Button} from 'react-native-elements'
import { Icon } from 'react-native-elements'
class Assignment extends Component {



    static navigationOptions = {title: 'Assignment'}
    constructor(props) {
        super(props)
        this.deleteAssignment = this.deleteAssignment.bind(this);
        this.state = {
            assignments: []
        }
        this.fetchAssignment()
    }

    componentWillReceiveProps(newProps){
        newProps.status
        this.fetchAssignment()
    }

    fetchAssignment()
    {
        var fetchUrl = "https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/qwidget/assign/TID".replace('TID',this.props.navigation.getParam("topicId", 1))
        fetch(fetchUrl)
            .then(response => (response.json()))
            .then(assignments => this.setState({assignments}))
    }

    deleteAssignment(id)
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
            (response)=> {this.fetchAssignment()}
        )
    }

    render() {
        return(

            <ScrollView style={{padding: 15}}>


                <Button backgroundColor="green" title="Create Assignment"
                        onPress={() => this.props.navigation
                            .navigate('AssignmentEditor',{topicId: this.props.navigation.getParam("topicId", 1)}) } />

                {this.state.assignments.map(
                    (assignment, index) => (
                        <ListItem
                            onPress={() => this.props.navigation.navigate('AssignmentPreview', {assignment: assignment}) }
                            key={index}
                            leftIcon={{name: 'subject'}}
                            subtitle={assignment.description}
                            title={assignment.title}

                            rightIcon={


                                <View>

                                    <View >

                                        <Icon

                                            reverse
                                            color='red'
                                            name='ios-create'
                                            type='ionicon'
                                            onPress={() => this.props.navigation.navigate('AssignmentEditor', {topicId: this.props.navigation.getParam("topicId", 1),assignment: assignment})}
                                        />


                                    </View>
                                    <View>

                                        <Icon
                                            reverse
                                            color='red'
                                            name='ios-trash'
                                            type='ionicon'
                                            onPress={() => this.deleteAssignment("" + assignment.id)
                                            }
                                        />

                                    </View>





                                </View>
                            }





                        />))}
            </ScrollView>
        )
    }


}
export default Assignment