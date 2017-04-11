import React from 'react';
import {Row, Col, Card, Button} from 'antd';

export default class OrderItem extends React.Component {
  render() {
    const tabStyle = {
      display: 'flex',
      justifyContent: 'space-between',
    }
    const title = {
      color: '#0e77ca',
      textTransform: 'uppercase',
      fontSize: '16px',
      marginBottom: '5px'
    }
    const wrapper = {
      borderWidth: '1px',
      borderColor: '#ddd',
      borderStyle: 'solid'
    }
    return(
      <div className="order-wrapper" style={wrapper}>
        <div className="header-wrapper" style={tabStyle}>
          <div className="title">
            <p style={title}>{this.props.title}</p>
            <span>Lorem Ipsum</span>
          </div>
          <div className="buttons-wrapper">
            <Button>Details</Button>
            <Button type="danger">Delete</Button>
            <Button type="primary">Primary</Button>
          </div>
        </div>
        <div className="table-wrapper" style={tabStyle}>
          <div className="my-column">
            <div className="my-row">
              <p>Service Provider</p>
              <span>Lorem ipsum</span>
            </div>
            <div className="my-row">
              <p>Service Category</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className="my-column">
            <div className="my-row">
              <p>Service Period</p>
              <span>Lorem ipsum</span>
            </div>
            <div className="my-row">
              <p>Location</p>
              <span>Lorem ipsum sada</span>
            </div>
          </div>
          <div className="my-column">
            <div className="my-row">
              <p>Payment</p>
              <span>$999</span>
            </div>
          </div>
          <div className="my-column">
            <div className="my-row">
              <p>Status</p>
              <span>Draft</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
