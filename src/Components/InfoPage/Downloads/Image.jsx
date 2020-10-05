import React from 'react';
import '../../../css/download.css';

const curvedImage = {borderRadius: '10%'};
const Image = (props) => {
    if(props.curved == 'true') {
        return (<div className = "appImages">
        <img src = {props.src} style = {curvedImage}/>
    </div>);
    } else {
    return (<div className = "appImages">
        <img src = {props.src}/>
    </div>);
    }
}

export default Image;