import React from 'react';
import {Row, Col, Card, Button, Upload, Icon} from 'antd';
import { config } from '../../../utils';
import styles from '../assets/styles';
import data from '../assets/data';

export default class DeliveryItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      imgSrc: config.imgDefault
    }
    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  onChange(info) {
    this.setState({imgSrc: window.URL.createObjectURL(info.file.originFileObj)})
  }

  render() {

    let linkStyle;
    if (this.state.hover) {
      linkStyle = styles.titleHover
    } else {
      linkStyle = styles.title
    }

    const props = {
      name: 'file',
      action: '/upload.do',
      headers: {
        authorization: 'authorization-text'
      },
    };

    const tableColumns = data.tableDelivery.map((item,i)=>
      <div style={styles.tabStyle}>
        <span style={styles.leftDelivery}>{item.cat}</span>
        <span style={styles.rightDelivery}>{item.value}</span>
      </div>
    );

    return(
      <div className="order-wrapper" style={styles.wrapper}>
        <div className="header-wrapper" style={styles.headerTabStyle}>
          <div className="title">
            <a onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle}>12</a>
            <span>{data.deliveryDescr}</span>
          </div>
          <div className="buttons-wrapper">
            <Button type="primary">Confirm</Button>
            <Button type="danger">Reject</Button>
            <Button>Details</Button>
          </div>
        </div>
          <div className="delivery-wrapper" style={{display:'flex'}}>
            <div className="input-wrapper" style={{width:'30%'}}>
              <Upload {...props} onChange={event => this.onChange(event)}>
                <p>
                  <img src={this.state.imgSrc} alt="" style={{height: '90px'}}/>
                  <Button type='primary' style={{display: 'block'}}>
                    Download
                  </Button>
                </p>
              </Upload>
            </div>
            <div className="list-delivery" style={{width:'70%'}}>
              {tableColumns}
            </div>
          </div>
        </div>
    )
  }
}
