import React from 'react';
import { goldensundowncombined } from '../data/goldensundowncombined';

import Button from '@mui/material/Button';

export default function Home () {
  const [miniFeatures, setMiniFeatures] = React.useState([]);
  const [prevMiniFeatures, setPrevMiniFeatures] = React.useState([]);

  // window resize management 
  const [isDesktop, setIsDesktop] = React.useState(true);

  const updateWidth = () => {
    if (window.innerWidth > 1100) {
      setIsDesktop(true);
      regenerateFeatured();
    }
    else {
      setIsDesktop(false);
      regenerateFeatured();
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

  const regenerateFeatured = () => {
    setMiniFeatures([]);
    let mini = [];
    let i = 0;
    let numpics = 0;
    if (window.innerWidth > 1100) {
      numpics = 8;
    }
    else {
      numpics = 4;
    }
    while (i < numpics) {
      let index = getRandomInt(36);
      // if index is already selected choose another random int
      while (mini.includes(index) || prevMiniFeatures.includes(index)) {
        index = getRandomInt(36);
      }
      mini.push(index);
      setMiniFeatures((miniFeatures) => [
        ...miniFeatures, goldensundowncombined[index],
      ]);
      i++;
    }
    setPrevMiniFeatures(mini);
  }

  // first features set on render
  React.useEffect(() => {
    regenerateFeatured();
  }, [])

  return <>
    <h1>Home</h1>
    <div className="pagecontainer">
      {isDesktop === true
      ? (<div className="desktophomecontainer">
          <div className="homefeaturecontainer">
            { miniFeatures.map((thumbnail) => (
                <div key={thumbnail.id} >
                  <img className="minifeaturethumbnails" 
                    src={thumbnail.url} 
                    alt={thumbnail.alt}/>
                </div>
            )) }
          </div>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {regenerateFeatured()}}
            >Regenerate Featured Photos</Button>
        </div>)
      : (<div className="mobilehomecontainer">
          <div className="mobilefeaturecontainer">
            { miniFeatures.map((thumbnail) => (
                <div key={thumbnail.id} >
                  <img className="mobilefeatureimg" 
                    src={thumbnail.url} 
                    alt={thumbnail.alt}/>
                </div>
            )) }
          </div>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {regenerateFeatured()}}
            >Regenerate Featured Photos</Button>
        </div>)}
    </div>
  </>
}
