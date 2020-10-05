import React from 'react';
import '../../../css/download.css';

const Version = (props) => {
 return (<div className = "versionDiv">
     <h2>{props.header}</h2>
    <h4 className = "subheader">{props.subheader}</h4>
 </div>)
}

export default Version;