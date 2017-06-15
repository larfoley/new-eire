import React from 'react';
import config from '../../config';
import SocialIcon from '../SocialIcon/index'

const Header = () => {
  return (
    <div className="App-header">
      <img src="/img/logo.jpg" className="App-logo" alt="new eire logo" />
      <h1 className="big-title">NEW EÍRE</h1>
      <div className="u-text-center">
        <SocialIcon type="facebook" link={config.neweire.facebook}/>
        <SocialIcon type="instagram" link={config.neweire.instagram}/>
        <SocialIcon type="twitter" link={config.neweire.twitter}/>
      </div>
    </div>
  )
}

export default Header;
