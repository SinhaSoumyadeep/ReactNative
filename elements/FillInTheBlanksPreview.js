import React from 'react'
import {Alert, View, ScrollView, TextInput} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import QuestionList from "../components/QuestionList";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'



class FillInTheBlanksPreview extends React.Component {
    static navigationOptions = { title: "FillInTheBlanksPreview"}
    constructor(props) {
        super(props)
        this.state = {
            examId: '',
            title: '',
            subtitle: '',
            points: 0,
            blanks:'2+2=[four=4]\n3+[six=6]=9'

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
            blanks: this.props.navigation.getParam("question", 1).blanks,


        })


    }






    render() {
        return(
            <ScrollView >

                <View>

                    <Text h3>Preview</Text>

                    <View style={{borderWidth: 1, borderColor: "black", margin: 10, padding: 10,backgroundColor: "white"}}>
                        <Text style={{borderWidth: 1, borderColor: "#aaa", marginBottom: 10}} h2>Fill In The Blanks</Text>
                        <Text h4>{this.state.title}</Text><Text h4>Points: {this.state.points}</Text>
                        <Text>Question: {this.state.subtitle}</Text>


                        {this.state.blanks != ''&&this.state.blanks.split("\n").map((option,index)=>{


                            if (option.indexOf("[") >= 0&&option.indexOf("]") >= 0) {
                                var first = option.split("[")
                                var second = first[1].split("]")

                                return (
                                    <View key={index} style={{flexDirection: "row", margin: 2}}>


                                        <View key={1000+index}>

                                            <Text key={index} h5>{first[0]}</Text>
                                        </View>
                                        <View key={2000+index}>
                                            <TextInput
                                                style={{
                                                    borderWidth: 1,
                                                    borderColor: "black",
                                                    height: 3,
                                                    padding: 20

                                                }}
                                                multiline={true}
                                                editable={true}
                                            ></TextInput>
                                        </View>
                                        <View key={3000+index}>
                                            <Text h5>{second[1]}</Text>
                                        </View>




                                    </View>

                                )
                            }



                        })

                        }
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

export default withNavigation(FillInTheBlanksPreview);