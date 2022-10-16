import React from "react";

import { Row, Col } from 'antd';


const items = [
    {
      key: '1',
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'PRODUCT-OWNER',
      content: 'Arjun Das',
    },
    {
      key: '2',
      icon: <i className="fas fa-desktop"></i>,
      title: 'CEO-FOUNDER',
      content: 'Kiran Ramakrishna'
    },
    {
      key: '3',
      icon: <i className="fas fa-database"></i>,
      title: 'CO-FOUNDER',
      content: 'Subhajit Mukherjee',
    },
  ]

function AppAbout() {
    return(
        <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
            <h2>About Us</h2>
            <p>Who We Are</p>
            </div>
        <div className="contentHolder"></div>
        <p>Text Mercato is run by a team of professionals who have extensive experience in the content writing industry.
             They have been successfully delivering their services to leading global brands across the travel, retail, fashion, 
             realty sectors (among others) for the last 8 years.Text Mercato was founded by Kiran and Subhajit who were based in 
             London and Paris, working for international brands when they realised the growing need for good content services in 
             the Indian market. This persuaded them to bring their experience and expertise to India. They have put together a 
             group of (writers/people/professionals) who love nothing better than to spot that errant comma, translate that 
             difficult foreign phrase and write that tone-perfect sentence.</p>
        
            </div>
            <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
        </div>
    );
}

export default AppAbout;