import React from 'react';
import Container from 'react-bootstrap/Container';

function MainContent() {
  return (
    <div>
      <img id="main-image" src="./images/main-image.jpg" alt="main" />

      <Container>

        <hr />

        <div className="group-margin">
          <p><strong>WHAT IS SLICE VISUAL STUDIO?</strong></p>
          <p>Slice is a dynamic team of professionals experienced in architectural visualization, 3D modeling, and rendering.</p>
          <p>We create high quality 2D and 3D marketing floor plans for real estate agents, property managers, and developers.</p>
        </div>

        <hr />

        <div className="group-margin">
          <p><strong>2D AND 3D VISUALIZATION SERVICES</strong></p>
          <img className="viz-images" src="./images/evolve-A-plan-sq.jpg" alt="viz" />
          <img className="viz-images" src="./images/evolve-A-00-sq.jpg" alt="viz" />
        </div>

        <hr />

        <div className="group-margin">
          <p><strong>PORTFOLIO</strong></p>
          <img className="portfolio-images" src="./images/evolve-A-plan-sq.jpg" alt="portfolio" />
          <img className="portfolio-images" src="./images/evolve-A-00-sq.jpg" alt="portfolio" />
          <img className="portfolio-images" src="./images/evolve-A-01-sq.jpg" alt="portfolio" />
          <img className="portfolio-images" src="./images/evolve-B-plan-sq.jpg" alt="portfolio" />
          <img className="portfolio-images" src="./images/evolve-B-00-sq.jpg" alt="portfolio" />
          <img className="portfolio-images" src="./images/evolve-B-01-sq.jpg" alt="portfolio" />
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

export default MainContent;
