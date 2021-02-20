import React from 'react';
import Footer from '../Footer';
import '../../css/textbox.css';

class LearnMore extends React.Component {
    componentDidMount() {
        document.getElementsByClassName('info_tag')[1].style.color = "#11d44b";
    }
    componentWillUnmount() {
        document.getElementsByClassName('info_tag')[1].style.color = "white";
    }
    render() {
        return (
            <div className="screen">
                <div className="textbox">
                    <p><strong>The best new way to prepare for your interview.</strong></p>
                    <ul>
                        <li>Training with WInterview is powerful and rewarding.</li>
                        <li>Get instant feedback on practice interviews and analyze insights unique to your performance.</li>
                        <li>Track your progress in every skill over time, and level up your interviewing expertise.</li>
                    </ul>
                    <p><strong>Practice Anytime, Anywhere</strong></p>
                    <ul>
                        <li>Make the most of your valuable free time.</li>
                        <li>Quick practice interviews fit perfectly into busy schedules and allow you to improve your skills whenever you want.</li>
                    </ul>
                    <p><strong><b> Master Your Environment </b></strong></p>
                    <ul>
                        <li>Adjusting your lighting, establishing a proper camera angle, and tweaking microphone settings before an interview opens the door to your success.</li>
                        <li>WInterview lets you familiarize yourself with your own meeting space, making you more comfortable and confident for when the real interview rolls around.</li>
                    </ul>
                    <p><strong>Real Interview Questions</strong></p>
                    <ul>
                    <li>With a database of over 650 interview questions that have been asked by real hiring managers in real interviews, WInterview gets you ready for anything your interviewer throws at you.</li>
                    </ul>
                </div>
                <div className="textboxFooter">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default LearnMore;