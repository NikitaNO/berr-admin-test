import React from 'react';
import {Row, Col, Card, Button, Tabs} from 'antd';
import DeliveryItem from './DeliveryItem';
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
      marginRight: '5px!important'
    }
    const listWrapper = {
      height: '455px',
      overflowY: 'auto'
    }


    const TabPane = Tabs.TabPane;

    const items = itemsList.map((item,i)=>
      <DeliveryItem
        key={i}
      />
    );

    return(
          <div className="list-wrapper">
            <div style={flexWrapper}>
              <h1>Deliverables Awaiting Conformation (4)</h1>
            </div>
            <div style={listWrapper}>
              {items}
            </div>
          </div>
    )
  }
}
