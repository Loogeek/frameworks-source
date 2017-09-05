import React from 'react'
import PropTypes from 'prop-types'

export default class Provider extends React.Component {
    static PropTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return { 
            store: this.props.store 
        }
    } 

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}