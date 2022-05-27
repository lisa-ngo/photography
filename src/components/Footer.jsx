import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function Footer () {

  const goToInsta = () => {
    const url = 'https://www.instagram.com/lisa.ngo__/';
    window.open(url, '_blank');
  }

  const goToGithub = () => {
    const url = 'https://github.com/lisa-ngo?tab=repositories';
    window.open(url, '_blank');
  }

  const goToFlickr = () => {
    const url = 'https://www.flickr.com/people/195684894@N07/';
    window.open(url, '_blank');
  }

  return <>
    <div className="footercontainer">
      <div className="footericons">
        <InstagramIcon
          className="footericon"
          fontSize="large"
          onClick={() => {goToInsta()}}/>
        <GitHubIcon 
          className="footericon" 
          fontSize="large"
          onClick={() => {goToGithub()}}/>
        <CameraAltIcon
          className="footericon"
          fontSize="large"
          onClick={() => {goToFlickr()}}/>
      </div>
      <small className="copyright">&copy; Copyright 2022, Lisa Ngo</small>
    </div>
  </>
}