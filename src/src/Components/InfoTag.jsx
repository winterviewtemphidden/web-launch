import React from 'react';
import '../css/home.css';
import {Link} from 'react-router-dom';

let style = {
    textDecoration: 'none',
};
class InfoTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'white'};
    }
    determineComponent () {
        switch(this.props.name) {
            case 'Screenshots':
                return 'screenshots'
            case 'Learn More':
                return 'learn'
            case 'Downloads':
                return 'downloads'
            case 'Contact':
                return 'contact'
        }
    }
    
    handleClick = (event) => {
        this.setState({color: '#11d44b'});
    }

    component = this.determineComponent();
    render() {
        return (
            <div className='info'>
                <Link style = {style} to = {`/explore/${this.component}`}>
                 <p className = "info_tag" style = {{color: this.state.color}} onClick = {this.handleClick}>{this.props.name}</p>
                </Link>
            </div>
        )
    }
}

export default InfoTag;
