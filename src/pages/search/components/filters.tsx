import React, { useEffect, useState } from 'react';

import { Tabs, Select, Form } from 'antd';

import { login } from '@/services/search';

const { TabPane } = Tabs;
const { Option } = Select;
const { Item } = Form;

interface OptionProps {
  name: string;
  count?: number;
}

function Filters() {
  const [data, setData] = useState<any[]>([]);
  const [foxrm, setForm] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    login().then(res => {
      setData(res.data);
      let a = {};
      res.data.forEach((item: any) => {
        a[item.typeId] = '';
      });
      setForm(a);
    });
  }, []);

  const callback = (key: string) => {
    console.log(key);
  };

  const onFinish = (x, values) => {
    console.log(values);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="受试者" key="1">
        {Object.keys(foxrm).length && (
          <Form
            name="basic"
            layout="vertical"
            onValuesChange={onFinish}
            form={form}
            initialValues={foxrm}
          >
            {data.map((item, index) => {
              return (
                <Item label={item.typeName} name={item.typeId} key={index}>
                  <Select placeholder="请选择">
                    {item.children.map((child: OptionProps, index: number) => {
                      return (
                        <Option value={child.name} key={index}>
                          {child.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Item>
              );
            })}
          </Form>
        )}
      </TabPane>
      <TabPane tab="基因" key="2">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  );
}

export default Filters;
