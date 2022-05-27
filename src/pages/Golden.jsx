import React from 'react';

import GoldenSetSwitch from '../components/GoldenSetSwitch';
import {goldendesktop} from '../data/goldendesktop';
import {sundowndesktop} from '../data/sundowndesktop';
import {goldenmobile} from '../data/goldenmobile';
import {sundownmobile} from '../data/sundownmobile';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';

export default function Golden () {

  const [pictures, setPictures] = React.useState(goldendesktop);
  const [selectedImg, setSelectedImg] = React.useState(goldendesktop[0]);
  const [selectedTime, setSelectedTime] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedLocation, setSelectedLocation] = React.useState('');
  const [am, setAm] = React.useState('');
  const  [golden, setGolden] = React.useState(true);
  
  // window resize management
  const [isDesktop, setIsDesktop] = React.useState(true);

  const updateWidth = () => {
    if (window.innerWidth > 1100) {
      setIsDesktop(true);
    }
    else {
      setIsDesktop(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [])

  // random int generator to get selected image display
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // get the selected img data and create a caption
  // fires each time the selected img changes
  React.useEffect(() => {
    setSelectedTime(selectedImg.time);
    setSelectedDate(selectedImg.date);
    setSelectedLocation(selectedImg.location);

    if (selectedImg.sun === "set") {
      setAm("pm");
    }
    else {
      setAm("am")
    }

  }, [selectedImg])

  // if set golden is false --> change pictures to sundown
  React.useEffect(() => {
    if (isDesktop === true) {
      if (golden === true) {
        setPictures(goldendesktop);
        setSelectedImg(goldendesktop[getRandomInt(18)])
      }
      else {
        setPictures(sundowndesktop);
        setSelectedImg(sundowndesktop[getRandomInt(18)]);
      }
    }
    else {
      if (golden === true) {
        setPictures(goldenmobile);
      }
      else {
        setPictures(sundownmobile);
      }
    }
  }, [golden, isDesktop])

  return <>
    <div className="pagecontainer">
      {golden === true
      ? (<h1>Golden</h1>)
      : (<h1>Sundown</h1>) }
      <GoldenSetSwitch setGolden={setGolden} golden={golden}/>
      {isDesktop === true
      ? (<div>
          <div className="desktopphotocontainer">
            <div className="desktopleft">
              <img src={selectedImg.url} alt={selectedImg.alt}/>
            </div>
            <div className="desktopright">
              { pictures.map((thumbnail) => (
                <div key={thumbnail.id} className="desktopthumbnail">
                  <img className="thumbnailimg" 
                    onClick={() => { setSelectedImg(thumbnail) }}
                    src={thumbnail.url} 
                    alt={thumbnail.alt}/>
                </div>
              )) }
            </div>
          </div>
          <div className="desktopcaption">
            <div className="captionleft">
              {am === "am"
              ? (<LightModeOutlinedIcon/>)
              : (<NightsStayOutlinedIcon/>)}
              <div className="captiondatetime">
                {selectedDate} · {selectedTime}{am}
              </div>
              <div>{selectedLocation}</div>
            </div>
            <div className="captionright">scroll for more</div>
          </div>
        </div>)
      : (<div className="mobilecontainer">
          <div className="mobileimgcontainer">
            { pictures.map((thumbnail) => (
              <div key={thumbnail.id} >
                <img className="mobilethumbnailimg" 
                  src={thumbnail.url} 
                  alt={thumbnail.alt}/>
              </div>
            )) }
          </div>
        </div>)}
    </div>
  </>
}