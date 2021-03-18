import React from 'react';
import Screenshot from './Screenshots/Screenshot';
import Footer from '../Footer';
import calendar from '../../WebAssets/Images/Screenshots/CalendarLG.png';
import home from '../../WebAssets/Images/Screenshots/HomeREG.png';
import indicators from '../../WebAssets/Images/Screenshots/IndicatorsSM.png';
import insights from '../../WebAssets/Images/Screenshots/InsightsSM.png';
import progress from '../../WebAssets/Images/Screenshots/ProgressLG.png';
import summary from '../../WebAssets/Images/Screenshots/SummaryLG.png';
import '../../css/screenshot.css';
import '../../css/sidebar.css';

class ScreenshotPage extends React.Component {
    componentDidMount() {
        document.getElementsByClassName('info_tag')[0].style.color = "#11d44b";
    }
    componentWillUnmount() {
        document.getElementsByClassName('info_tag')[0].style.color = "white";
    }
    render() {
        return (
            <div>
            <div className = "screenshots">
                <Screenshot src={home} />
                <Screenshot src={calendar} />
                <Screenshot src={indicators} />
                <Screenshot src={insights} />
                <Screenshot src={progress} />
                <Screenshot src={summary} />
            </div>
            <div className = "screenshotFooter">
            <Footer/>
            </div>
            </div>
        );
    }
}

export default ScreenshotPage;
