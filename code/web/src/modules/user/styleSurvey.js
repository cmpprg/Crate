import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import CategoryCards from './CategoryCards';


class StyleSurvey extends Component {

  constructor(props) {
    super(props)


//potentially simplify categories to array of strings for backend??
//potentially add style to state
    this.state = {
      categories: ['tops', 'bottoms', 'dresses', 'shoes', 'accessories'],
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

    const categoryCards = this.state.categories.map(category => (
      <div style={{ margin: '5em', float: 'left' }}>
        <CategoryCards category={category}/>
      </div>
    ))

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

          <p style={{ marginTop: '1em', color: grey2 }}>Scroll through each category and select one option which defines your personal style.</p>
        </GridCell>
      </Grid>

      <Grid>
          <GridCell>
            { categoryCards }
          </GridCell>
        </Grid>

      </div>
    )
  }

}

export default StyleSurvey
