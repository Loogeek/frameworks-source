import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import { createStore } from './Redux' 
import Provider from './React-Redux/Provider'

function reducer(state, action) {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }

    switch(action.type) {
        case 'CHANG_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default class Index extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index />   
    </Provider>,
    document.getElementById('root')
)

