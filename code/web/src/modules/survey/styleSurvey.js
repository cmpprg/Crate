import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import CategoryCards from './CategoryCards'
import { APP_URL } from '../../setup/config/env'

import { determineStyle } from './api/actions'


class StyleSurvey extends Component {

  constructor(props) {
    super(props)


//potentially simplify categories to array of strings for backend??
//potentially add style to state
    this.state = {
      categories: ['tops', 'bottoms', 'dresses', 'shoes', 'accessories']
      // tops: '',
      // bottoms: '',
      // dresses: '',
      // shoes: '',
      // accessories: '',
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {

    const categoryCards = this.state.categories.map((cat, index) => {
      return (
        <CategoryCards
          key={index}
          index={index}
          category={cat}
        />
      )
    })

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
          <GridCell
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              }}
          >
            { categoryCards }
            <Button
              theme="primary"
              style={{
                margin: '2em 0',
              }}
            >
              Submit
            </Button>
          </GridCell>
        </Grid>

      </div>
    )
  }

}



// const mapDispatchToProps = (dispatch) => {
//   return {
//     // addStyle: (category, style) => dispatch(addStyle(category, style)),
//     determineStyle: () => dispatch(determineStyle())
//   }
// }

// const mapStateToProps = (state) => {
//   // you should return a specific chunk of state, not just the entirety of the redux state object
//   return state;
// }

export default StyleSurvey;
