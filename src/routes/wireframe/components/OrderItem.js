import React from 'react';
import {Row, Col, Card, Button} from 'antd';
import styles from '../assets/styles';
import data from '../assets/data';

export default class OrderItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {

    let linkStyle;
    if (this.state.hover) {
      linkStyle = styles.titleHover
    } else {
      linkStyle = styles.title
    }
    const firstColumn = data.orderTableFirst.map((item,i)=>
      <div className="my-row">
        <p style={{color: '#aaa'}}>{item.cat}</p>
        <span>{item.value}</span>
      </div>
    );

    const secondColumn = data.orderTableSecond.map((item,i)=>
      <div className="my-row">
        <p style={{color: '#aaa'}}>{item.cat}</p>
        <span>{item.value}</span>
      </div>
    );

    return(
      <div className="order-wrapper" style={styles.wrapperOrders}>
        <div className="header-wrapper" style={styles.headerTabStyle}>
          <div className="title">
            <a onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle}>{this.props.title}</a>
            <span>Lorem Ipsum</span>
          </div>
          <div className="buttons-wrapper">
            <Button>Details</Button>
            <Button type="danger">Delete</Button>
            <Button type="primary">Primary</Button>
          </div>
        </div>
        <div className="table-wrapper" style={styles.tabStyle}>
          <div className="my-column">
            {firstColumn}
          </div>
          <div className="my-column">
            {secondColumn}
          </div>
          <div className="my-column">
            <div className="my-row">
              <p style={{color: '#aaa'}}>{data.orderTableThird.cat}</p>
              <span>{data.orderTableThird.value}</span>
            </div>
          </div>
          <div className="my-column">
            <div className="my-row">
              <p style={{color: '#aaa'}}>{data.orderTableFourth.cat}</p>
              <span>{data.orderTableFourth.value}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
