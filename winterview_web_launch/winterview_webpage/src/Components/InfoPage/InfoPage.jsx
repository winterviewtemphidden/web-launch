import React from 'react';
import SideBar from './SideBar';
import Contact from './Contact';
import Download from './Download';
import LearnMore from './LearnMore'
import ScreenshotPage from './ScreenshotPage'
import '../../css/app.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class InfoPage extends React.Component {
    render () {
        return <div>
            <Router>
            <Route path = "/explore" component = {SideBar}/>
            <Route path = "/explore/contact" component = {Contact}/>
            <Route path = "/explore/downloads" component = {Download}/>
            <Route path = "/explore/learn" component = {LearnMore}/>
            <Route path = "/explore/screenshots" component = {ScreenshotPage}/>
            </Router>
        </div>
    }
}

export default InfoPage;