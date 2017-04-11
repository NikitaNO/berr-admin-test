import React from 'react';
import {Row, Col, Card, Button, Tabs} from 'antd';
import OrderItem from './OrderItem';
export default class WireFrame extends React.Component {
  render() {

    const itemsList = [
      {
        title:'A1',
        style: ''
      },
      {
        title:'A2',
        style: ''
      },
      {
        title:'A3',
        style: ''
      },
      {
        title:'A4',
        style: ''
      },
      {
        title:'A5',
        style: ''
      }
    ]

    const flexWrapper = {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px'
    }

    const tabStyle = {
      marginRight: '5px!important',
    }

    const listWrapper = {
      height: '400px',
      overflowY: 'auto'
    }

    const TabPane = Tabs.TabPane;

    const items = itemsList.map((item,i)=>
      <OrderItem
        key={i}
        title={item.title}
        style={item.style}
      />
    );

    return(
          <div className="list-wrapper">
            <div style={flexWrapper}>
              <h1>My orders</h1>
              <Button type="primary">+ CREATE ORDER</Button>
            </div>
            <div className="tabs-wrapper">
              <Tabs defaultActiveKey="1">
                <TabPane style = {tabStyle} tab="New/Pending (5)" key="1">
                  <div style={listWrapper}>
                    {items}
                  </div>
                </TabPane>
                <TabPane style = {tabStyle} tab="Accepted (4)" key="2">
                  Accepted
                </TabPane>
                <TabPane style = {tabStyle} tab="Rejected (3)" key="3">
                  Rejected
                </TabPane>
                <TabPane style = {tabStyle} tab="In Progress (2)" key="4">
                  In Progress
                </TabPane>
              </Tabs>
              </div>
          </div>
    )
  }
}
