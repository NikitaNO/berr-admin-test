import React from 'react';
import {Row, Col, Card, Button} from 'antd';

export default class DeliveryItem extends React.Component {
  render() {
    const tabStyle = {
      display: 'flex',
      justifyContent: 'space-between',
    }
    return(
      <div className="order-wrapper">
        <div className="header-wrapper" style={tabStyle}>
          <div className="title">
            <p>12</p>
            <span>Lorem Ipsum</span>
          </div>
          <div className="buttons-wrapper">
            <Button type="primary">Confirm</Button>
            <Button type="danger">Reject</Button>
            <Button>Details</Button>
          </div>
        </div>
          <div className="delivery-wrapper" style={{display:'flex'}}>
            <div className="input-wrapper" style={{width:'30%'}}>
              <p>Download</p>
            </div>
            <div className="list-delivery" style={{width:'70%'}}>
              <div>
                <span>Type</span>
                <span>Type A</span>
              </div>
              <div>
                <span>Format</span>
                <span>Format A</span>
              </div>
              <div>
                <span>Quality</span>
                <span>Quality A</span>
              </div>
              <div>
                <span>Content</span>
                <span>lorem ipsum</span>
              </div>
              <div>
                <span>Delivered</span>
                <span>MM:DD:hh:mm:ss</span>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
