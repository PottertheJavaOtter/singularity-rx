import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Input } from "antd";
import PatientPage from "../PatientPage";
import MainContext from "./MainContext";
import "./DashboardPage.css";
const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;

class DashboardPage extends Component {
  state = {
    page: "patient"
  };

  onMenu = page => this.setState({ page });

  render() {
    const { page } = this.state;
    return (
      <div className="DashboardPage">
        <div>
          <Layout>
            <Header style={{ padding: "0 0 " }}>
              <div className="DashboardPage__logo">SingularityRx</div>
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
                    <Icon type="dashboard" />
                    <span>Dashboard</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="user" />
                    <span>Patients</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Messages</span>
                  </Menu.Item>
                  <Menu.Item key="4">
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
                  {page === "main" && <MainContext />}
                  {page === "patient" && <PatientPage />}
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
