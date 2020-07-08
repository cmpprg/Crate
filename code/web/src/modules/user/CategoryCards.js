// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import Form from '../../ui/form/Form'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

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
      isLoading: false
    }
  }

  render() {
    const { category } = this.props

    return (
      <Form style={{ width: '75em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          {/* <img src={`${ APP_URL }/images/crate.png`} alt={'text'} style={{ width: '100%' }}/> */}
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{category}</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>Heeey</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <Button>
              <Icon size={1.2} style={{ color: white }}>add</Icon> Subscribe
            </Button>
          </p>
        </div>
      </Form>
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