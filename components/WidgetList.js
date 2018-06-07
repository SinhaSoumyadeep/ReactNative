import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import {Button} from 'react-native-elements'
import { Icon } from 'react-native-elements'
class WidgetList extends Component {



  static navigationOptions = {title: 'Widgets'}
  constructor(props) {
    super(props)
    this.state = {
      widgets: [],
      courseId: 1,
      moduleId: 1
    }
  }





  render() {
    return(


      <View style={{padding: 15}}>



          <Button backgroundColor="green" style={{margin: 5}} title="Assignment"
                  onPress={() => this.props.navigation.navigate('Assignment', {topicId: this.props.navigation.getParam("topicId", 1)}) } />
          <Button  backgroundColor="green" style={{margin: 5}} title="Quiz"
                  onPress={() => this.props.navigation.navigate('ExamWidget', {topicId: this.props.navigation.getParam("topicId", 1)}) } />
      </View>
    )
  }


}
export default WidgetList