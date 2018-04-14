import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'

class About extends Component {
  render () {
    return (
      <Card>
        <CardHeader
          title='Implementation of Web User Interface using NBP API.'
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          Feel free to contact me by github in case of any questions.
        </CardText>
        <CardActions expandable>
          <FlatButton
            href='https://github.com/jakgajtk'
            target='_blank'
            label='GitHub'
            secondary
          />
          <FlatButton
            href='https://www.linkedin.com/in/jakub-gajtkowski-37031077/'
            target='_blank'
            label='Linkedin'
            secondary
          />
        </CardActions>
      </Card>
    )
  }
}

export default About
