import React from "react";
import { Carousel } from 'antd';
import { Button } from "antd";


const items = [
    {
      key: '1',
      title: 'Rubick.Ai aims to create a world where people use AI to complete non-intuitive tasks and improve efficiencies in daily life.',
      content: 'Rubick.Ai aims to create a world where people use AI to complete non-intuitive tasks and improve efficiencies in daily life..',
    },
    {
      key: '2',
      title: 'Text Mercato is one of the few companies in the world that helps develop content using a custom-built platform and algorithms to deliver quality work within timelines.  One of our expertise is delivering consistent quality when scaling. ',
      content: 'Text Mercato is one of the few companies in the world that helps develop content using a custom-built platform and algorithms to deliver quality work within timelines.  One of our expertise is delivering consistent quality when scaling. ',
    },
    {
      key: '3',
      title: 'Helping clients build well researched, presented and targeted content. Maintain delivery quality while scaling. ',
      content: 'Helping clients build well researched, presented and targeted content. Maintain delivery quality while scaling. ',
    },
  ]
  

function AppHero() {
    return(
        <div id="hero" className="heroBlock">
    <Carousel>
        {items.map(item => {
            return(
                <div className="container-fluid">
                    <div className="content">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <div className="btnHolder">
                        <Button type="primary" size="large"><a href="https://www.infotelligent.com/company/rubickai/169920999">Learn More</a></Button>
                        <Button size="large"><a href="https://www.youtube.com/watch?v=O41Y-VqVE1w&t=20s"><i className="fas fa-desktop"></i>Watch a Demo</a></Button>
                        </div>
                    </div>
                </div>
            );
        })}
    </Carousel>
</div>
    );
}

export default AppHero;