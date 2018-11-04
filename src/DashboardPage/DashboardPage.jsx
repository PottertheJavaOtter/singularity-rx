import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class DashboardPage extends Component {
  render() {
    return (
      <div className="DashboardPage">
        <div>
          <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <div className="DashboardPage__logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1">
                    <Icon type="user" />
                    <span>Patients</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                  </Menu.Item>
                </Menu>
              </Sider>{" "}
              <Content>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  style={{ background: "#fff", padding: 24, minHeight: 280 }}
                >
                  Content
                </div>
              </Content>
            </Layout>
            <Footer style={{ textAlign: "center" }}>
              Copyright @ 2018 SingularityRx
            </Footer>{" "}
          </Layout>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
