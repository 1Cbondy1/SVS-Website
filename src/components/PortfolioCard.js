import React from 'react';

function PortfolioCard(props) {
  return (
    <span>
      <img className="portfolio-images" src={props.image} alt="portfolio" />
    </span>
  );
}

export default PortfolioCard;
