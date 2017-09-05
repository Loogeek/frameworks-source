import React from 'react'
import PropTypes from 'prop-types'
import { connect } from './React-Redux/connect'
import ThemeSwitch from './ThemeSwitch'

class Content extends React.Component {
    static PropTypes = {
        themeColor: PropTypes.string
    }

    render() {
        const { themeColor } = this.props

        return (
            <div>            
                <p style={{color: themeColor}}>React.js 内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(Content)