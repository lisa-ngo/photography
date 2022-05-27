import React from 'react';
import { goldensundowncombined } from '../data/goldensundowncombined';

export default function Home () {
  const [miniFeatures, setMiniFeatures] = React.useState([]);
  const [isMiniEmpty, setIsMiniEmpty] = React.useState(true);

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

  // first features set on render
  React.useEffect(() => {
    setMiniFeatures([]);
    setIsMiniEmpty(true);
  }, [])

  // change features every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      // reset mini features and add new using a loop
      setMiniFeatures([]);
      setIsMiniEmpty(true);
    }, 10000);
    return () => clearInterval(interval);
  }, [])

  React.useEffect(() => {
    if (isMiniEmpty === true) {
      // check if picture is already selected or not as mini feature
      let mini = [];
      let i = 0;
      while (i < 8) {
        let index = getRandomInt(36);
        // if index is already selected choose another random int
        while (mini.includes(index)) {
          index = getRandomInt(36);
        }
        mini.push(index);
        setMiniFeatures((miniFeatures) => [
          ...miniFeatures, goldensundowncombined[index],
        ]);
        i++;
      }
      setIsMiniEmpty(false);
    }
  }, [isMiniEmpty])

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
        </div>)
      : (<div className="mobilehomecontainer">mobile</div>)
      }
    </div>
  </>
}
