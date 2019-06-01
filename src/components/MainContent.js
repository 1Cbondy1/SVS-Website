import React from 'react';
import Container from 'react-bootstrap/Container';

import PortfolioCard from './PortfolioCard';

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <img id="main-image" src="./images/main-image.jpg" alt="main" />
  
        <Container>
  
          <hr />
  
          <div className="group-margin">
            <p><strong>WHAT IS SLICE VISUAL STUDIO?</strong></p>
            <p>Slice is a dynamic team of professionals experienced in architectural visualization, 3D modeling, and rendering.</p>
          </div>
  
          <hr />
  
          <div className="group-margin">
            <p><strong>2D AND 3D VISUALIZATION SERVICES</strong></p>
            <img className="viz-images" src="./images/evolve-A-plan-sq.jpg" alt="viz" />
            <img className="viz-images" src="./images/evolve-A-00-sq.jpg" alt="viz" />
            <p>We create high quality 2D and 3D marketing floor plans for real estate agents, property managers, and developers.</p>
          </div>
  
          <hr />
  
          <div className="group-margin">
            <p><strong>PORTFOLIO</strong></p>
            <PortfolioCard image="./images/evolve-A-plan-sq.jpg" />
            <PortfolioCard image="./images/evolve-A-00-sq.jpg" />
            <PortfolioCard image="./images/evolve-A-01-sq.jpg" />
            <PortfolioCard image="./images/evolve-B-plan-sq.jpg" />
            <PortfolioCard image="./images/evolve-B-00-sq.jpg" />
            <PortfolioCard image="./images/evolve-B-01-sq.jpg" />
          </div>
  
          <hr />
  
          <div className="group-margin">
            <p><strong>PRICING CHART</strong></p>
            <img id="chart" src="./images/price-chart.jpg" alt="chart" />
          </div>
  
        </Container>
  
      </div>
    );
  }
}

export default MainContent;
