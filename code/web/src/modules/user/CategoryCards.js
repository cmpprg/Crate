// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import Button from '../../ui/button/Button'
import H2 from '../../ui/typography/H2'
import { white, grey2, black } from '../../ui/common/colors'
import Card from '../../ui/card/Card'

// App Imports
import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { messageShow, messageHide } from '../common/api/actions'
import { create } from '../subscription/api/actions'

// Component
class CategoryCards extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      styles: ['preppy', 'edgy', 'sporty'],
    }
  }

  render() {    
    console.log('woo', this.props);
    
    const { index, category } = this.props;

    const style = this.state.styles.map(style => {
      let cardImg = '';
      if(style === 'preppy') {
        cardImg = `${ APP_URL }/images/survey/Preppy${index}.png`
        return(
          <div style={{ backgroundImage: `url(${cardImg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '27em', margin: '1em', height: '25em' }}>
            <Button theme="primary" >Select</Button>
          </div>
          )
      } else if (style === 'edgy') {
        cardImg = `${ APP_URL }/images/survey/Edgy${index}.png`
        return(
          <div style={{ backgroundImage: `url(${cardImg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '27em', margin: '1em', height: '25em' }}>
            <Button theme="primary" >Select</Button>
          </div>
          )
      } else if (style === 'sporty') {
        cardImg = `${ APP_URL }/images/survey/Sporty${index}.png`
        return(
          <div style={{ backgroundImage: `url(${cardImg})`, backgroundSize: 'cover', backgroundPosition: 'center center', width: '27em', margin: '1em', height: '25em' }}>
            <Button theme="primary" >Select</Button>
          </div>
          )
      }
    })

    return (
      <Card style={{ width: '75em', backgroundColor: white }}>
        <div style={{ padding: '1em 1.2em' }}>
          <H2 font="secondary" style={{ color: black }}>{category}</H2>

          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '1em 1.2em' }}>
            {style}
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
// function itemState(state) {
//   return {
//     user: state.user
//   }
// }

export default CategoryCards