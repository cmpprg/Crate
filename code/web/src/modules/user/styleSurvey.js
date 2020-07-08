import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


class StyleSurvey extends Component {

  constructor(props) {
    super(props)


//potentially simplify categories to array of strings for backend??
//potentially add style to state
    this.state = {
      tops: '',
      bottoms: '',
      dresses: '',
      shoes: '',
      accessories: ''


    }
  }

  render() {
    return (
      <div>
      <h1>Did this work?</h1>

      </div>
    )
  }

}

export default StyleSurvey
