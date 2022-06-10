import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { WechatOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";

export default class AntdComponent extends Component {
  render() {
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };

    return (
      <div>
        AntdComponent
        <br />
        <Button type="primary">Primary Button</Button>
        <Button type="link">link Button</Button>
        <br />
        <WechatOutlined />
        <br />
        <DatePicker onChange={onChange} />
      </div>
    );
  }
}
