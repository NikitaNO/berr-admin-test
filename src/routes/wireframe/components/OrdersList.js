import React from 'react';
import {Row, Col, Card, Button, Tabs} from 'antd';
import OrderItem from './OrderItem';
import styles from '../assets/styles';
import data from '../assets/data';

export default class WireFrame extends React.Component {
  render() {
    const TabPane = Tabs.TabPane;

    const items = data.itemsOrder.map((item,i)=>
      <OrderItem
        key={i}
        title={item.title}
        style={item.style}
      />
    );

    return(
          <div className="list-wrapper">
            <div style={styles.flexWrapper}>
              <h1>My orders</h1>
              <Button type="primary">+ CREATE ORDER</Button>
            </div>
            <div className="tabs-wrapper">
              <Tabs defaultActiveKey="1">
                <TabPane style = {styles.tabStyleOrder} tab="New/Pending (5)" key="1">
                  <div style={styles.listWrapperOrder}>
                    {items}
                  </div>
                </TabPane>
                <TabPane style = {styles.tabStyleOrder} tab="Accepted (4)" key="2">
                  Accepted
                </TabPane>
                <TabPane style = {styles.tabStyleOrder} tab="Rejected (3)" key="3">
                  Rejected
                </TabPane>
                <TabPane style = {styles.tabStyleOrder} tab="In Progress (2)" key="4">
                  In Progress
                </TabPane>
              </Tabs>
              </div>
          </div>
    )
  }
}
