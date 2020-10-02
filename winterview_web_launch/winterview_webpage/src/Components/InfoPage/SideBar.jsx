import React from 'react';
import logo from '../../WebAssets/Logos/whiteSmallLogoTransparent.png'
import InfoTag from '../InfoTag';
import { infoTags } from '../Home/Home'
import { Link } from 'react-router-dom';
import '../../css/sidebar.css'


class SideBar extends React.Component {
    renderList() {
        return infoTags.map(infoTag => {
            return (<InfoTag
                name={infoTag}
                active = ''
            />
            );
        });
    }
    render() {
        return (
            <div id='sidebar'>
                <Link>
                    <img src={logo} className='logo_icon' />
                </Link>
                <div className="infoTags">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default SideBar;