import React from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => {
    class Connect extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(props) {
            super(props)

            this.state = {
                allProps: {}
            }
        }

        componentWillMount() {
            const { store } = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())            
        }

        _updateProps() {
            const { store } = this.context
            const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}  // 防止 mapStateToProps 没有传入
            const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}  // 防止 mapDispatchToProps 没有传入

            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        render() {
            return <WrapperComponent {...this.state.allProps} />
        }
    }
    
    return Connect
}