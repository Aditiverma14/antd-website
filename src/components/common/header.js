import React, { useState } from 'react';
// import {Menu} from 'antd';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {  
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i class="fas fa-bolt"></i>
                    <a href="http://www.google.com">Rubick.ai</a>
                </div>
                <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
                {/* <Menu mode="horizontal" defaultSelectedKeys={['home']}> */}
        {/* // items={new Array(3).fill(null).map((_, index) => { */}
        {/* //   const key = index + 1;
        //   return { */}
        {/* //     key,
        //     label: `nav ${key}`,
        //   };
        // })} */}
        {/* <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="About">About</Menu.Item>
        <Menu.Item key="features">Features</Menu.Item>
        <Menu.Item key="howitworks">How it works</Menu.Item>
        <Menu.Item key="faq">FAQ</Menu.Item>
        <Menu.Item key="pricing">Pricing</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
        </Menu> */}
            </div>
        </div>
    );
}

export default AppHeader;