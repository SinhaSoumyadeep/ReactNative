import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import FixedHeader from './elements/FixedHeader'
import TextHeadings from './elements/TextHeadings'
import Icons from './elements/Icons'
import Exam from './elements/Exam'
import QuestionTypeButtonGroupChooser from './elements/QuestionTypeButtonGroupChooser'
import QuestionTypePicker from './elements/QuestionTypePicker'


import { createStackNavigator } from 'react-navigation'
import {Button} from 'react-native-elements'
import ScreenX from './elements/ScreenX'
import CourseList from './components/CourseList'
import ModuleList from './components/ModuleList'
import LessonList from './components/LessonList'
import WidgetList from './components/WidgetList'
import TopicList from './components/TopicList'
import Assignment from './components/Assignment'
import AssignmentEditor from './components/AssignmentEditor'
import AssignmentPreview from './components/AssignmentPreview'
import ExamWidget from './components/ExamWidget'
import QuestionEditor from './components/QuestionEditor'
import ExamList from './components/ExamList'
import QuestionList from './components/QuestionList'
import ExamEditor from './components/ExamEditor'
import MultipleChoiceQuestionEditor from './elements/MultipleChoiceQuestionEditor'
import EssayQuestion from './elements/EssayQuestion'
import TrueFalseQuestionEditor from './elements/TrueFalseQuestionEditor'
import FillInTheBlanks from './elements/FillInTheBlanks'



class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <ScrollView>
          <FixedHeader/>
        <StatusBar />


        <Button title="Courses"
                onPress={() => this.props.navigation
                  .navigate('CourseList') } />

      </ScrollView>
    )
  }
}

class ScreenA extends React.Component {
  static navigationOptions = {title: "Screen A"}
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text h1>Screen A</Text>
        <Button title="Go Home"
                onPress={() =>this.props
                  .navigation
                  .goBack()} />
      </View>
    )
  }
}

const ScreenB = () => (
  <View>
    <Text h1>Screen B</Text>
  </View>
)

const App = createStackNavigator({
  Home,
  CourseList,
  ModuleList,
  LessonList,
    TopicList,
  WidgetList,
    QuestionEditor,
  TrueFalseQuestionEditor,
  MultipleChoiceQuestionEditor,
  ScreenA,
  ScreenB,
  ScreenX,
    Assignment,
    AssignmentEditor,
    AssignmentPreview,
    ExamWidget,
    ExamList,
    QuestionList,
    ExamEditor,
    EssayQuestion,
    FillInTheBlanks

});

export default App;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
