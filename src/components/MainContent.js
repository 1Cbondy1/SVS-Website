import React from 'react';
import Container from 'react-bootstrap/Container';

import PortfolioCard from './PortfolioCard';
import ChartCard from './ChartCard';

class MainContent extends React.Component {
  render() {
    return (
      <div className="extra">
      
        <img id="main-image" src="./images/main-image.jpg" alt="main" />
  
        <Container >
  
          <hr />
  
          <div className="group-margin section1">
            <p><strong>WHAT IS SLICE VISUAL STUDIO?</strong></p>
            <p>Slice is a dynamic team of professionals experienced in architectural visualization, 3D modeling, and rendering.</p>
          </div>
  
          <hr />
  
          <div className="group-margin section2">
            <p><strong>2D AND 3D VISUALIZATION SERVICES</strong></p>
            <img className="viz-images" src="./images/services-01.jpg" alt="viz" />
            <img className="viz-images" src="./images/services-00.jpg" alt="viz" />
            <p>We create high quality 2D and 3D marketing floor plans for real estate agents, property managers, and developers.</p>
          </div>
  
          <hr />
  
          <div className="group-margin section3">
            <p><strong>PORTFOLIO</strong></p>
            <PortfolioCard image="./images/evolve-A-plan-sq.jpg" />
            <PortfolioCard image="./images/evolve-A-00-sq.jpg" />
            <PortfolioCard image="./images/evolve-A-01-sq.jpg" />
            <PortfolioCard image="./images/evolve-B-plan-sq.jpg" />
            <PortfolioCard image="./images/evolve-B-00-sq.jpg" />
            <PortfolioCard image="./images/evolve-B-01-sq.jpg" />
          </div>
  
          <hr />
  
          <div className="group-margin section4">
            <p><strong>PRICING CHART</strong></p>
            <ChartCard id="chart" image="./images/price-chart.jpg" />
          </div>
  
        </Container>
  
      </div>
    );
  }
}

export default MainContent;
