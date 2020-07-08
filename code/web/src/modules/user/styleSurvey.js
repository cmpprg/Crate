import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'
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

  componentDidMount() {
    console.log(this.props)
  }



  render() {
    return (
      <div>
      {/* SEO */}
      <Helmet>
        <title>Style Survey</title>
      </Helmet>
      {/* Top title bar */}
      <Grid style={{ backgroundColor: grey }}>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H3 font="secondary">Style Survey</H3>
        </GridCell>
      </Grid>

      <Grid>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H4 style={{ marginBottom: '0.5em' }}>Tops</H4>
        </GridCell>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H4 style={{ marginBottom: '0.5em' }}>Bottoms</H4>
        </GridCell>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H4 style={{ marginBottom: '0.5em' }}>Dresses</H4>
        </GridCell>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H4 style={{ marginBottom: '0.5em' }}>Shoes</H4>
        </GridCell>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H4 style={{ marginBottom: '0.5em' }}>Accessories</H4>
        </GridCell>
      </Grid>

      </div>
    )
  }

}

export default StyleSurvey
