import React, { Component } from 'react';
import Header from './components/shared/header'

class App extends Component {

    state = {
        navItems: [
            { type:"routerlink", link:"/test0", title: "title0" },
            { type:"routerlink", link:"/test1", title: "title1" },
            { type:"anchor", link:"/test2", title: "title2" },           
        ]        
    }

    render() {

        return (
            <Header title="Template" navItems={this.state.navItems}/>
        );
    } 
}

export default App;
