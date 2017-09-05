import React from 'react'
import PropTypes from 'prop-types'
import { connect } from './React-Redux/connect'

class ThemeSwitch extends React.Component {
    static PropTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onSwitchColor.bind(this, 'red')}>Red</button>
                <button onClick={this.props.onSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({type: 'CHANG_COLOR', themeColor: color})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

