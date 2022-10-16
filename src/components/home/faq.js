import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Let's sort it out...</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="How is management perceived at Text Mercato?" key="1">
            <p>The management here is very efficient and responsible..</p>
          </Panel>
          <Panel header="Text Mercato Interview Questions" key="2">
            <p>There were 3 rounds in my interview. The first round was Resume Shortlist, followed by HR round. The final round was Assignment.</p>
          </Panel>
          <Panel header="Catalogue Specialist Interview?" key="3">
            <p>It is very nice and beautiful experience with textmercato solutions pvt LTD , And enjoying my work and everyday tasks in textmercato and very comfortable natural around me. There is nothing to be worry about work.</p>
          </Panel>
          <Panel header="Can I manage multiple task in Text Mercato?" key="4">
            <p> Yes, the tasks are very simply which you can easily manage.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>If you want any quick support so just mail us immediately..</p>
          <Button type="primary" size="large"><a href="https://mail.google.com/"><i className="fas fa-envelope"></i> Email your question </a></Button>
        </div>
      </div>
    </div>  
  );
}

export default AppFaq;