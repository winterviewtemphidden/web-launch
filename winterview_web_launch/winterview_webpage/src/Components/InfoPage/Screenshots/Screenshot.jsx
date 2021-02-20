import React from 'react';
import '../../../css/screenshot.css';

const Screenshot = (props) => {
    return (
        <div class = "screenshot">
            <img src = {props.src}/>
        </div>
    )
}

export default Screenshot;