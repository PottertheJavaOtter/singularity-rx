import React, { Component } from "react";
import { Row, Col, Table } from "antd";

import "./PatientPage.css";
import meds from "./data/medications";

const columns = [
  {
    title: "Medication",
    dataIndex: "medication"
  },
  {
    title: "Sig",
    dataIndex: "sig"
  },
  {
    title: "Qty",
    dataIndex: "qty"
  },
  {
    title: "Day Supply",
    dataIndex: "days_supply"
  },
  {
    title: "Original RX Date",
    dataIndex: "rx_date"
  },
  {
    title: "Date Picked up",
    dataIndex: "pickup_date"
  },
  {
    title: "Pharmacy",
    dataIndex: "pharmacy",
    render: name => <a href={"/pharmacies/" + name}>{name}</a>
  }
];

class PatientPage extends Component {
  render() {
    return (
      <div className="PatientPage">
        <Row>
          <h1>Patient Profile</h1>
          <p>
            <Row>
              <Col span={12}>
                <b>Name:</b> Max Bennet
              </Col>
              <Col span={12}>
                <b>Date of Birth: </b> 01/01/1957
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <b>Address:</b> 555 Happy Lane, Tucson, AZ 85704
              </Col>
              <Col span={12}>
                <b>Phone: </b> 123-456-7890
              </Col>
            </Row>
            <br />
            <Row>
              <b>Case Summary:</b> The patient is a 57-year-old man with CAD
              (STEMI 3 months ago). Prior to that, he was only diagnosed with
              dyslipidemia, uncontrolled, and HTN, controlled. He presents to
              the pharmacy today to pick up his monthly refills and brings in a
              new prescription for sildenafil
            </Row>
            <br />
          </p>
        </Row>
        <h2>Medications List</h2>
        <Table dataSource={meds} columns={columns} />
      </div>
    );
  }
}

export default PatientPage;
