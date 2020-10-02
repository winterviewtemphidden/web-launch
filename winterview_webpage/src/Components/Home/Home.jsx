import React from 'react';
import homePage from '../../WebAssets/Images/Backgrounds/homePageBG.png'
import logo from '../../WebAssets/Logos/whiteFullNew@3x.png'
import InfoTag from '../InfoTag';
import '../../css/home.css'

export const infoTags = ['Screenshots', 'Learn More', 'Downloads', 'Contact']
class Home extends React.Component {
    renderList() {
        return infoTags.map(infoTag => {
            return (
            <InfoTag name={infoTag} />
            );
        });
    }
    render() {
        return (
            <div id = 'home'>
            <img src={logo} className='logo' />
            {this.renderList()}
            <footer>
            © WInterview 2020
            </footer>
            </div>
            
        )
    }
}

export default Home;