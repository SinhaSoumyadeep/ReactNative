import React from 'react'
import {Alert, View, ScrollView, TextInput} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import QuestionList from "../components/QuestionList";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'



class MultipleChoicePreview extends React.Component {
    static navigationOptions = { title: "MultipleChoicePreview"}
    constructor(props) {
        super(props)
        this.state = {
            examId: '',
            title: '',
            subtitle: '',
            points: 0,
            options:'option1\noption2\noption3',
            correctOption: 0
        }

    }


    componentDidMount()
    {



            this.setState({
                examId: this.props.navigation.getParam("exam", 1).id,
                id: this.props.navigation.getParam("question", 1).id,
                title: this.props.navigation.getParam("question", 1).title,
                subtitle: this.props.navigation.getParam("question", 1). subtitle,
                points:this.props.navigation.getParam("question", 1). points,
                options: this.props.navigation.getParam("question", 1).options,
                correctOption: this.props.navigation.getParam("question", 1).correctOption

            })


    }






    render() {
        return(
            <ScrollView >

                <View>

                    <Text h3>Preview</Text>
                    <View style={{borderWidth: 1, borderColor: "black", margin: 10, padding: 10, backgroundColor: "white"}}>
                        <Text style={{borderWidth: 1, borderColor: "#aaa", marginBottom: 10}} h2>Multiple Choice</Text>
                        <Text h4>{this.state.title}</Text><Text h4>Points: {this.state.points}</Text>
                        <Text >Question: {this.state.subtitle}</Text>

                        <RadioGroup

                        >

                            {this.state.options != null&&this.state.options.split("\n").map((option,index)=>(

                                    <RadioButton key={index} value={index} >
                                        <Text>{option}</Text>
                                    </RadioButton>


                                )
                            )}


                        </RadioGroup>
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

export default withNavigation(MultipleChoicePreview);