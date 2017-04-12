import React from 'react';
import {Row, Col, Card, Button, Tabs} from 'antd';
import DeliveryItem from './DeliveryItem';
import styles from '../assets/styles';
import data from '../assets/data';
export default class WireFrame extends React.Component {
  render() {
    const items = data.itemsDelivery.map((item,i)=>
      <DeliveryItem
        key={i}
      />
    );
    return(
          <div className="list-wrapper">
            <div style={styles.flexWrapper}>
              <h1>{`Deliverables Awaiting Conformation (${data.itemsDelivery.length})`}</h1>
            </div>
            <div style={styles.listWrapper}>
              {items}
            </div>
          </div>
    )
  }
}
