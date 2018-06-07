import React from 'react'
import {Alert, View, ScrollView, TextInput} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import QuestionList from "../components/QuestionList";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'



class MultipleChoiceQuestionEditor extends React.Component {
  static navigationOptions = { title: "Multiple Choice"}
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
                options: this.props.navigation.getParam("question", 1).options,
                correctOption: this.props.navigation.getParam("question", 1).correctOption

            })

        }





    }


    widgetSave()
    {

        var mulQuiz = {id: this.state.id,title: this.state.title, subtitle: this.state.subtitle, points: this.state.points, options: this.state.options, icon: 'list', type: "MC", correctOption: this.state.correctOption}
        var saveUrl = 'http://10.0.0.89:8080/api/qwidget/save/question/EID'.replace('EID',this.state.examId)
        fetch(saveUrl, {
            body: JSON.stringify(mulQuiz),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(() => this.props.navigation.navigate('QuestionList',{status: "saved"}))
    }

    onSelect(index, value){
        this.setState({
            correctOption: value
        })
    }




  render() {
    return(
      <ScrollView>

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
          <View style={{borderWidth: 1, borderColor: "black", margin: 10, padding: 10, backgroundColor: "white"}}>
              <Text style={{borderWidth: 1, borderColor: "#aaa"}} h2>Multiple Choice</Text>
        <Text h4>{this.state.title}</Text><Text h4>Points: {this.state.points}</Text>
        <Text >Question: {this.state.subtitle}</Text>

          <RadioGroup
              onSelect = {(index, value) => this.onSelect(index, value)}
              selectedIndex={this.state.correctOption}
          >

              {this.state.options != ''&&this.state.options.split("\n").map((option,index)=>(

                  <RadioButton key={index} value={index} >
                      <Text>{option}</Text>
                  </RadioButton>


                  )
              )}


          </RadioGroup>
              <Button	backgroundColor="green"
                         color="white"
                         title="Save"


              />
              <Button	backgroundColor="red"
                         color="white"
                         title="Cancel"/>
          </View>






      </ScrollView>
    )
  }
}

export default withNavigation(MultipleChoiceQuestionEditor);