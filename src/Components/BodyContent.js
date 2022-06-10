import React from "react";
import MediaQuery from "react-responsive";
import "../App.css";
import office_desk from "./office_desk.jpg";
import {
  Layout,
  Button,
  Space,
  Col,
  Row,
  Checkbox,
  Form,
  Input,
  Image,
  Typography,
} from "antd";
import { Content } from "antd/lib/layout/layout";
const { Header } = Layout;
const { Title, Text } = Typography;

const BodyContent = () => {
  //Api call function
  const onFinish = async (values) => {
    delete values.remember;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    let Url = "https://reqres.in/api/login";
    const response = await fetch(Url, requestOptions);
    const data = await response.json();
    if (response.ok) {
      document.getElementById("Msg").style.color = "green";
      document.getElementById("Msg").innerHTML = "Login successful";
    } else {
      document.getElementById("Msg").style.color = "red";
      document.getElementById("Msg").innerHTML = data.error;
    }
    console.log(data);
  };

  return (
    <div>
      <Layout>
        <Layout>
          {/* Top Navigation */}
          <Header id="NavbarTop">
            <Row>
              {/* Logo */}
              <Col span={10}>
                <div className="logo">
                  <Text>ATools</Text>
                  <span id="dot">.</span>
                </div>
              </Col>
              {/* Empty Column */}
              <Col span={8}></Col>
              <Col span={6}>
                {/* Navigation Buttons */}
                <MediaQuery minWidth={768}>
                  <div id="btnGroup">
                    <Space>
                      <Button className="btn">Start Free Trial</Button>
                      <Button className="btn" id="btn-logIn">
                        Login
                      </Button>
                    </Space>
                  </div>
                </MediaQuery>
              </Col>
            </Row>
          </Header>
        </Layout>
        <Layout >
          <Layout>
            {/* body content */}

            <Content>
              <Row justify="center" align="middle" >
                {/* Login Form */}
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} id="Column">
                  <div className="container">
                    <div className="loginFormHeading">
                      <Title>Welcome Back</Title>
                    </div>
                    <p>Sub-title text goes here</p>
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      layout="vertical"
                      onFinish={onFinish}
                    >
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            type: "email",

                            message: "Please input your email!",
                          },
                          {
                            required: true,

                            message: "Please input your E-mail",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Email Address *"
                          autoComplete="email"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            message: "Please input your Password!",
                          },
                        ]}
                      >
                        <Input
                          type="password"
                          placeholder="Password *"
                          autoComplete="current-password"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          className="btn login-form-button"
                        >
                          Login
                        </Button>
                      </Form.Item>
                      <Form.Item>
                        <Form.Item
                          name="remember"
                          valuePropName="checked"
                          noStyle
                        >
                          <Checkbox className="checkbox">
                            Remember Password
                          </Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="/">
                          Forgot password?
                        </a>
                      </Form.Item>
                      {/* Empty div to show message */}
                      <div id="Msg"></div>
                    </Form>
                  </div>
                </Col>
                {/* illustration image */}
                <Col span={15}>
                  <MediaQuery minWidth={768}>
                    <Image src={office_desk}></Image>
                  </MediaQuery>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};
export default BodyContent;
