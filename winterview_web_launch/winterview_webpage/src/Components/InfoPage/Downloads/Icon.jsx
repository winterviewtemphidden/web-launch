import React from 'react';
import '../../../css/download.css'

const Icon = (props) => {
        return (
            <div className = 'logoIcons'>
                <img src = {props.src}/>
            </div>
        )
}

export default Icon;