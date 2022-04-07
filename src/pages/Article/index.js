import "./index.scss";
import { Link } from "react-router-dom";
import {
  Card,
  Breadcrumb,
  DatePicker,
  Button,
  Form,
  Radio,
  Select,
} from "antd";
import locale from "antd/lib/date-picker/locale/zh_CN";

const { Option } = Select;
const { RangePicker } = DatePicker;

const Article = () => {
  const onFinish = () => {};

  return (
    <div>
      {/* 筛选区域 */}
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <Form onFinish={onFinish} initialValues={{ status: -1 }}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              defaultValue="lucy"
              style={{ width: 120 }}
            >
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* 文章列表区域 */}
      {/* <Card title={`根据筛选条件共查询到 ${articleData.count} 条结果：`}> */}
      {/* <Table
          rowKey="id"
          columns={columns}
          dataSource={articleData.list}
          pagination={{
            pageSize: params.per_page,
            total: articleData.count,
            onChange: pageChange,
            current: params.page,
          }}
          bordered
        />
      </Card> */}
    </div>
  );
};

export default Article;
