// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import Button from '../../ui/button/Button'
import H2 from '../../ui/typography/H2'
import Card from '../../ui/card/Card'

// App Imports
import { APP_URL } from '../../setup/config/env'
import { messageShow, messageHide } from '../common/api/actions'
import { addStyle } from './api/actions'



// Component
class CategoryCards extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      styles: ['preppy', 'edgy', 'sporty']
    }
  }

  render() {
    const styles = this.state.styles
    const { index, category } = this.props;

    const styleCard = styles.map(style => {
        let cardImg = `${ APP_URL }/images/survey/${style}${index}.png`;
        return (
          <div
            style={{
              backgroundImage: `url(${cardImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '27em',
              margin: '1em',
              height: '27em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              id={style}
              style={{ height: '2.7em' }}
              theme="primary"
              onClick={() => {this.props.addStyle(category, style)}}
            >
              Select
            </Button>
          </div>
        )
      })

    return (
      <Card
        style={{
          width: '75em',
          marginTop: '5em',
          boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.10)'
          }}
      >
        <div style={{ width: '75em' }}>
          <H2
            font="secondary"
            style={{
              color: 'black',
              paddingTop: '.5em',
              textAlign: 'center',
              textTransform: 'capitalize',
              }}
            >
              {category}
            </H2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '.5em 1.2em'
            }}
          >
            {styleCard}
          </div>
        </div>
      </Card>
    )
  }
}

// Component Properties
// Item.propTypes = {
//   crate: PropTypes.object.isRequired,
//   user: PropTypes.object.isRequired,
//   messageShow: PropTypes.func.isRequired,
//   messageHide: PropTypes.func.isRequired
// }

// Component State
const mapStateToProps = (state) => {
  // you should return a specific chunk of state, not just the entirety of the redux state object
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStyle: (category, style) => dispatch(addStyle(category, style)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryCards);
