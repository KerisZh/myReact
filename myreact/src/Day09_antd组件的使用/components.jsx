import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Rate,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const UseAntd = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Orange"];
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [value, setValue] = useState(3);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 12,
      }}
      layout="horizontal"
      initialValues={{
        disabled: componentDisabled,
      }}
      onValuesChange={onFormLayoutChange}
      disabled={componentDisabled}
    >
      <Form.Item label="Rate">
        <span>
          <Rate tooltips={desc} onChange={setValue} value={value} />
          {value ? (
            <span className="ant-rate-text">{desc[value - 1]}</span>
          ) : (
            ""
          )}
        </span>
      </Form.Item>
      <Form.Item label="Checkbox">
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          全选
        </Checkbox>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </Form.Item>

      <Form.Item label="Form disabled" name="disabled" valuePropName="checked">
        <Checkbox>disabled</Checkbox>
      </Form.Item>
      <Form.Item label="Radio">
        <Radio.Group>
          <Radio value="apple"> Apple </Radio>
          <Radio value="pear"> Pear </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
          <Select.Option value="demo2">Demo2</Select.Option>
          <Select.Option value="demo3">Demo3</Select.Option>
          <Select.Option value="demo4">Demo4</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: "Light",
              value: "light",
              children: [
                {
                  title: "Bamboo",
                  value: "bamboo",
                },
                {
                  title: "Zoo",
                  value: "zoo",
                },
                {
                  title: "Panda",
                  value: "panda",
                },
              ],
            },
            {
              title: "Heavy",
              value: "heavy",
              children: [
                {
                  title: "Black",
                  value: "black",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: "zhejiang",
              label: "浙江",
              children: [
                {
                  value: "hangzhou",
                  label: "杭州",
                },
                {
                  value: "jiaxing",
                  label: "嘉兴",
                },
              ],
            },
            {
              value: "guangdong",
              label: "广东",
              children: [
                {
                  value: "Gunagzhou",
                  label: "广州",
                },
                {
                  value: "Shenzhen",
                  label: "深圳",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="TextArea">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};

export default () => <UseAntd />;
