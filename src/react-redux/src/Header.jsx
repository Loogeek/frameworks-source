import React from 'react'
import PropTypes from 'prop-types'
import { connect } from './React-Redux/connect'

class Header extends React.Component {
    static PropTypes = {
        themeColor: PropTypes.string
    }

    render() {
        const { themeColor } = this.props

        return (
            <h1 style={{color: themeColor}}>React.js 头</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(Header)