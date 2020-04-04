import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import PortfolioCard from './PortfolioCard';
// import ChartCard from './ChartCard';
import { CLIENTS } from '../constants/enums'

class MainContent extends React.Component {
  render() {
    return (
      <div className="extra">

        <img id="main-image" src="./images/main-image.png" alt="main" />
  
        <Container >

        <hr />

        <div className="group-margin section1">
            <p><strong>WHAT IS SLICE VISUAL STUDIO?</strong></p>
            <p className="text-box">Slice is a visualization studio based in Austin, Texas. We translate scenic and architectural designs into captivating and engaging imagery. Our dynamic team is skilled in 3D rendering, animation, and 360° VR rendering and photography.</p>
        </div>

        <hr />

        <div className="group-margin section3">
            <p><strong>PORTFOLIO</strong></p>
            <PortfolioCard image="./images/web_seven-apts-bremond-01.jpg" />
            <PortfolioCard image="./images/web_seven-apts-bremond-00.jpg" />
            <PortfolioCard image="./images/BMB-01.jpg" credit={CLIENTS.CSD}/>
            <PortfolioCard image="./images/BMB-02.jpg" credit={CLIENTS.CSD}/>
            <PortfolioCard image="./images/web_evolve-A-01.jpg" />
            <PortfolioCard image="./images/web_evolve-A-00.jpg" />
            <PortfolioCard image="./images/web_evolve-A-plan.jpg" />
            <PortfolioCard image="./images/Walmart-02.jpg" credit={CLIENTS.YD}/>
            <PortfolioCard image="./images/Walmart-01.jpg" credit={CLIENTS.YD}/>
            <PortfolioCard image="./images/web_evolve-B-01.jpg" />
            <PortfolioCard image="./images/web_evolve-B-00.jpg" />
            <PortfolioCard image="./images/web_evolve-B-plan.jpg" />
            <PortfolioCard image="./images/NCL-Laser-Tag-03.jpg" credit={CLIENTS.YD}/>
            <PortfolioCard image="./images/NCL-Laser-Tag-02.jpg" credit={CLIENTS.YD}/>
        </div>

        <hr />

        <div className="group-margin section2">
            <p><strong>2D AND 3D FLOOR PLAN SERVICES</strong></p>
            <img className="viz-images" src="./images/services-01.png" alt="viz" />
            <img className="viz-images" src="./images/services-00.png" alt="viz" />
            <p className="text-box"> We specialize in creating high quality 2D and 3D marketing floor plans for real estate agents, property managers, and developers.</p>
        </div>

        <hr />

        <div className="group-margin section4">
            <Accordion>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <p><strong>FLOOR PLAN PRICING ▼</strong></p>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                    <img id="chart" src="./images/price-chart.jpg" alt="pricing-chart" />
                </Accordion.Collapse>
            </Accordion>
        </div>

    </Container>
  
      </div>
    );
  }
}

export default MainContent;
