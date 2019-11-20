import './SeasonDisplay.css';

import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const currentSeason = getSeason(props.lat, new Date().getMonth());

  console.log(`User's latitude: ${props.lat}`);
  console.log(`Current season: ${currentSeason}`);

  const { text, iconName } = seasonConfig[currentSeason];

  return (
    <div className={`season-display ${currentSeason}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
