import React from 'react';
import Icon from './Downloads/Icon';
import Footer from '../Footer';
import Image from './Downloads/Image';
import Version from './Downloads/Version'
import iosImage from '../../WebAssets/Images/DownloadsIcons/AppIcons/iOS.png';
import androidImage from '../../WebAssets/Images/DownloadsIcons/AppIcons/Android.png';
import windowsImage from '../../WebAssets/Images/DownloadsIcons/AppIcons/Windows.png';
import iosLogo from '../../WebAssets/Images/DownloadsIcons/PlatformIcons/apple_logo_black.svg';
import androidLogo from '../../WebAssets/Images/DownloadsIcons/PlatformIcons/android_logo_black.svg';
import windowsLogo from '../../WebAssets/Images/DownloadsIcons/PlatformIcons/windows_logo_black.svg';
import '../../css/download.css';

class Download extends React.Component {
    componentDidMount() {
        document.getElementsByClassName('info_tag')[2].style.color = "#11d44b";
    }
    componentWillUnmount() {
        document.getElementsByClassName('info_tag')[2].style.color = "white";
    }
    render() {
        return (
        <div className = 'download'>
        <div className = 'icons logoIcons'>
            <a href = "http://winterview.ca/iOS" target = "_blank">
            <Icon src = {iosLogo} />
            </a>
            <Icon src = {androidLogo} />
            <Icon src = {windowsLogo} />
        </div>
        <div className = "icons appImages">
            <div className = "shadow">
            <a href = "http://winterview.ca/iOS" target = "_blank">
            <Image src = {iosImage}/>
            </a>
            </div>
            <div className = "shadow"> 
            <Image src = {androidImage}/> 
            </div>
            <Image src = {windowsImage} curved = 'true'/> 
        </div>
        <div className = "icons versions">
            <a href = "http://winterview.ca/iOS" target = "_blank" className = "downloadLink">
            <Version header = 'Download Link' subheader = 'Version 1.0.2'/>
            </a>
            <Version header = 'Coming Soon' subheader = 'Stay tuned...'/>
            <Version header = 'Coming Soon' subheader = 'Stay tuned...'/>
        </div>
        <div className = "downloadFooter">
        <Footer/>
        </div>
        </div>
        );
    }
}

export default Download;