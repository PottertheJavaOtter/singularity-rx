import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Input } from "antd";
import PatientPage from "../PatientPage";
import "./DashboardPage.css";
const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;

class DashboardPage extends Component {
  render() {
    return (
      <div className="DashboardPage">
        <div>
          <Layout>
            <Header>
              <Search
                placeholder="Search Patients"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </Header>
            <Layout>
              <Sider>
                <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1">
                    <Icon type="user" />
                    <span>Patients</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="calendar" />
                    <span>Schedule</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Messages</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="file-text" />
                    <span>Reports</span>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content className="DashboardPage__Content">
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>Patients</Breadcrumb.Item>
                  <Breadcrumb.Item>Max Bennet</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  style={{ background: "#fff", padding: 24, minHeight: 280 }}
                >
                  <PatientPage />
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
