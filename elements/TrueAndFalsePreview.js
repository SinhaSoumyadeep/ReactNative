import React from 'react'
import {Alert, View, ScrollView, TextInput} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import QuestionList from "../components/QuestionList";

class TrueAndFalsePreview extends React.Component {
    static navigationOptions = { title: "TrueAndFalsePreview"}
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


            this.setState({
                examId: this.props.navigation.getParam("exam", 1).id,
                id: this.props.navigation.getParam("question", 1).id,
                title: this.props.navigation.getParam("question", 1).title,
                subtitle: this.props.navigation.getParam("question", 1). subtitle,
                points:this.props.navigation.getParam("question", 1). points,
                isTrue: this.props.navigation.getParam("question", 1). isTrue



            })


    }





    render() {
        return(
            <ScrollView>

                <View>

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

export default withNavigation(TrueAndFalsePreview);

