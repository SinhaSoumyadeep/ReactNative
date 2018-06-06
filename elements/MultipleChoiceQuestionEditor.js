import React from 'react'
import {Alert, View, ScrollView, TextInput} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import QuestionList from "../components/QuestionList";

class MultipleChoiceQuestionEditor extends React.Component {
  static navigationOptions = { title: "Multiple Choice"}
  constructor(props) {
    super(props)
    this.state = {
        examId: '',
      title: '',
        subtitle: '',
      points: 0,
      options:''
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
                examId: this.props.exam.id,
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
                options: this.props.navigation.getParam("question", 1).options

            })

        }





    }


    widgetSave()
    {

        var mulQuiz = {id: this.state.id,title: this.state.title, subtitle: this.state.subtitle, points: this.state.points, options: this.state.options, icon: 'list', type: "MC"}
        var saveUrl = 'http://10.0.0.89:8080/api/qwidget/save/question/EID'.replace('EID',this.state.examId)
        Alert.alert(saveUrl)
        fetch(saveUrl, {
            body: JSON.stringify(mulQuiz),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(() => this.props.navigation.navigate('QuestionList',{status: "saved"}))
    }




  render() {
    return(
      <ScrollView>
          <Text h1>the topic id oos : {this.state.examId}</Text>
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

        <FormLabel>Choices</FormLabel>
          <TextInput
              style={{
                  borderWidth: 1,
                  borderColor: "black",
                  height: 134

              }}
              multiline={true}
              editable={true}
              onChangeText={
                  text => this.updateForm({options: text})}
              value={""+this.state.options}
          />


        <Button	backgroundColor="green"
                 color="white"
                 title="Save"
                   onPress={() => {this.widgetSave()}}/>

        />
        <Button	backgroundColor="red"
                 color="white"
                 title="Cancel"/>

        <Text h3>Preview</Text>
        <Text h2>{this.state.title}</Text><Text h2>{this.state.points}</Text>
        <Text>{this.state.subtitle}</Text>
          {this.state.options != ''&&this.state.options.split('\n').map((option,index)=>
              {

                  return(

                      <View key={index}>

                      <Button
                          key={index}
                          backgroundColor="green"
                                 color="white"
                                 title={option}
                          style={{margin: 3}}
                      />
                      </View>

                  )
              }





          )}


      </ScrollView>
    )
  }
}

export default withNavigation(MultipleChoiceQuestionEditor);