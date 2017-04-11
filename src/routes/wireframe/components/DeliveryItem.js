import React from 'react';
import {Row, Col, Card, Button, Upload, Icon} from 'antd';
import { config } from '../../../utils'
export default class DeliveryItem extends React.Component {
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
    const icon = {
      fontSize: '25px',
      marginTop: '10px',
      marginBottom: '10px',
      display: 'block'
    }
    const wrapper = {
      borderWidth: '1px',
      borderColor: '#ddd',
      borderStyle: 'solid',
      background:'#fff',
      padding: '20px'
    }
    const props = {
      name: 'file',
      action: '/upload.do',
      headers: {
        authorization: 'authorization-text'
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return(
      <div className="order-wrapper" style={wrapper}>
        <div className="header-wrapper" style={tabStyle}>
          <div className="title">
            <a style={title}>12</a>
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
              <Upload {...props}>
                <p>
                  <img src={config.imgDefault} alt="" style={{height: '90px'}}/>
                  <Button type='primary' style={{display: 'block'}}>
                    Download
                  </Button>
                </p>
              </Upload>
            </div>
            <div className="list-delivery" style={{width:'70%'}}>
              <div style={tabStyle}>
                <span style={{width:'20%', color: '#aaa'}}>Type</span>
                <span style={{width:'80%'}}>Type A</span>
              </div>
              <div style={tabStyle}>
                <span style={{width:'20%', color: '#aaa'}}>Format</span>
                <span style={{width:'80%'}}>Format A</span>
              </div>
              <div style={tabStyle}>
                <span style={{width:'20%', color: '#aaa'}}>Quality</span>
                <span style={{width:'80%'}}>Quality A</span>
              </div>
              <div style={tabStyle}>
                <span style={{width:'20%', color: '#aaa'}}>Content</span>
                <span style={{width:'80%'}}>lorem ipsum</span>
              </div>
              <div style={tabStyle}>
                <span style={{width:'20%', color: '#aaa'}}>Delivered</span>
                <span style={{width:'80%'}}>MM:DD:hh:mm:ss</span>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
