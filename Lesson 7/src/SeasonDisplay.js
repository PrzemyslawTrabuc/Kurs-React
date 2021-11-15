import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        seasonIcon: 'sun'
    },
    winter: {
        text: "Burr, It's cold",
        seasonIcon: 'snowflake'
    }
}

const GetSeason = (latitude, month) => {
if(month > 2 && month < 9){
  return latitude > 0 ? 'summer' : 'winter';
}else{
  return latitude > 0 ? 'winter' : 'summer'
}
}

const SeasonDisplay = (props) => {
  const season = GetSeason(props.latitude, new Date().getMonth());
  const {text, seasonIcon} = seasonConfig[season];
  document.body.classList.add(season);
  return(
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${seasonIcon} icon`} />
          <h1>{text}</h1>
        <i className={`icon-right massive ${seasonIcon} icon`} />
      </div>
  );
};

export default SeasonDisplay;
