import React, { Component } from 'react'

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        name: 'BASIC STATE'
    }

    componentDidMount () {
        let _name = 'boy';

        this.setState({
            name: _name
        })
    }

    render () {
        return (
            <AppContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

const AppConsumer = AppContext.Consumer

export {
    AppContext,
    AppProvider,
    AppConsumer
}
