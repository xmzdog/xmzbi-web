import {
  genChartByAiUsingPOST,
  listChartVOByPageUsingPOST,
} from '@/services/xmzbi/chartController';
import { UploadOutlined } from '@ant-design/icons';
import { Form, message, Select, Space, Upload ,Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect } from 'react';


/**
 * 添加图表页面
 */
const addChart: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    listChartVOByPageUsingPOST({}).then((res) => {
      console.error('用户输入', res);
    });
  });

  const onFinish = async (values: any) => {
    //todo 对接后端，上传数据
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const res = await genChartByAiUsingPOST(params, {}, values.file.file.originFileObj);
      console.log(res);
      message.success('分析成功');
    } catch (e: any) {
      message.error('分析失败：' + e.message);
    }
    console.log('Received values of form: ', values);
  };

  return (
    <div className="add-chart">
      <Form name="addChart" onFinish={onFinish} initialValues={{}}>
        <Form.Item
          name="goal"
          label="分析目标"
          rules={[{ required: true, message: '请输入分析目标' }]}
        >
          <TextArea placeholder="请输入你的分析需求：比如：分析网站用户的增长情况"></TextArea>
        </Form.Item>
        <Form.Item name="name" label="图表名称">
          <TextArea placeholder="请输入图表名称"></TextArea>
        </Form.Item>
        <Form.Item name="chartType" label="图表类型">
          <Select
            options={[
              { value: '折线图', label: '折线图' },
              { value: '柱状图', label: '柱状图' },
              { value: '堆叠图', label: '堆叠图' },
              { value: '饼图', label: '饼图' },
              { value: '雷达图', label: '雷达图' },
            ]}
          ></Select>
        </Form.Item>

        <Form.Item name="file" label="原始数据">
          <Upload name="file" action="/upload.do">
            <Button icon={<UploadOutlined />}>上传 CSV 文件</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default addChart;
