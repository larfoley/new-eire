import React from 'react';
import './styles.css';

const SocialIcon = (props) => {
  const socialIconClasses = {
    facebook: "fa fa-facebook fa-2x",
    twitter: "fa fa-twitter fa-2x",
    instagram: "fa fa-instagram fa-2x"
  }
  const socialIconClass = socialIconClasses[props.type];

  return (
    <div className="SocialIcon">
      <a className="SocialIcon__link" href={props.link} target="_blank" rel="noopener noreferrer">
        <i className={socialIconClass}></i>
      </a>
    </div>
  )
}

export default SocialIcon;
