import React from 'react';
import '../css/app.css'
import Home from './Home/Home';
import InfoPage from './InfoPage/InfoPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path = '/' component = {Home}/>
                    <Route path = '/explore' component = {InfoPage}/>
                </div>
            </Router>
        );
    }
}

export default App;