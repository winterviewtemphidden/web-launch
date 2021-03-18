import React from 'react';
import '../../css/contact.css';
import Footer from '../Footer';

class Contact extends React.Component {
    componentDidMount() {
        document.getElementsByClassName('info_tag')[3].style.color = "#11d44b";
    }
    componentWillUnmount() {
        document.getElementsByClassName('info_tag')[3].style.color = "white";
    }
    render() {
        return (
            <div className="contact">
                <table className="contactTable">
                        <div className="top">
                            <tr className="heading"><span>General</span></tr>
                            <tr className="email">welcome@winterview.ca</tr>
                        </div>
                        <div className="top">
                            <tr className="heading"><span>Billing & Payments</span></tr>
                            <tr className="email">billing@winterview.ca</tr>
                        </div>
                        <div className="top">
                            <tr className="heading"><span>Press/Media</span></tr>
                            <tr className="email">press@winterview.ca</tr>
                        </div>
                        <div className="top">
                            <tr className="heading"><span>Jobs & Careers</span></tr>
                            <tr className="email">careers@winterview.ca</tr>
                        </div>
                            <div className="top">
                                <tr className="heading"><span>Inquiries</span></tr>
                                <tr className="email">inquiries@winterview.ca</tr>
                            </div>
                            <div className="top">
                                <tr className="heading"><span>Support</span></tr>
                                <tr className="email">support@winterview.ca</tr>
                            </div>
                </table>
                <Footer />
            </div>
        )
    }
}

export default Contact;
