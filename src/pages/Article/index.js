import img404 from "@/assets/error.png";
import "./index.scss";
import { Link } from "react-router-dom";
// import { observer } from "mobx-react-lite";
import {
  Table,
  // Tag,
  Space,
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  DatePicker,
  Select,
} from "antd";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
// import { http } from "@/utils";
// import { useStore } from "@/store";

const { Option } = Select;
const { RangePicker } = DatePicker;

const Article = () => {
  const [channelList, setChannelList] = useState([]);

  // Card数据
  const data = [
    {
      id: "8218",
      comment_count: 0,
      cover: {
        images: ["http://geek.itheima.net/resources/images/15.jpg"],
      },
      like_count: 0,
      pubdate: "2019-03-11 09:00:00",
      read_count: 2,
      status: 2,
      title: "webview离线化记载h5资源解决方案",
    },
  ];

  const columns = [
    {
      title: "封面",
      dataIndex: "cover",
      width: 120,
      render: (cover) => {
        return (
          <img src={cover.images[0] || img404} width={80} height={60} alt="" />
        );
      },
    },
    {
      title: "标题",
      dataIndex: "title",
      width: 220,
    },
    {
      title: "状态",
      dataIndex: "status",
      // render: (data) => formatStatus(data),
    },
    {
      title: "发布时间",
      dataIndex: "pubdate",
    },
    {
      title: "阅读数",
      dataIndex: "read_count",
    },
    {
      title: "评论数",
      dataIndex: "comment_count",
    },
    {
      title: "点赞数",
      dataIndex: "like_count",
    },
    {
      title: "操作",
      render: (data) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => goPublish(data)}
            />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => delArticle(data)}
            />
          </Space>
        );
      },
      fixed: "right",
    },
  ];

  // 文章列表统一管理
  const [list, setList] = useState({
    list: [], // 文章列表
    count: 0, // 列表数量
  });

  // 文章参数管理
  const [params, setParams] = useState({
    page: 1, // 当前页数
    per_page: 10, // 每页显示个数
  });

  const loadChannelList = async () => {
    // const res = await http.get("/channels");
    // console.log(res);
    // setChannelList(res.data.channels);
  };

  // 提交表单
  const onFinish = (value) => {
    console.log(value);
  };

  const goPublish = (data) => {};
  const delArticle = (data) => {};

  useEffect(() => {
    loadChannelList();
  }, []);

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
            <Select placeholder="请选择文章频道" style={{ width: 120 }}>
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
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
      <Card title={`根据筛选条件共查询到 articleData.count 条结果：`}>
        <Table
          rowKey="id"
          columns={columns}
          // dataSource={articleData.list}
          // pagination={{
          //   pageSize: params.per_page,
          //   total: articleData.count,
          //   onChange: pageChange,
          //   current: params.page,
          // }}
          bordered
        />
      </Card>
    </div>
  );
};

export default Article;
