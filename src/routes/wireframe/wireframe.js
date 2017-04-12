import React from 'react';
import {Row, Col, Card, Button} from 'antd';
import OrderList from './components/OrdersList';
import DeliveryList from './components/DeliveryList';
import styles from './assets/styles';

export default class WireFrame extends React.Component {
  render() {
    return(
      <Row>
        <Col lg={11} md={11} style={styles.leftGrid}>
          <OrderList />
        </Col>
        <Col lg={12} md={12}>
          <DeliveryList />
        </Col>
      </Row>
    )
  }
}
