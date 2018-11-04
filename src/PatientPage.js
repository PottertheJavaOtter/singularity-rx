import React, { Component } from "react";
import { Row, Col, Table } from "antd";

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
      <div>
        <Row>
          <Col className="patient-info" span={10}>
            <h1>Patient Profile</h1>
            <p>
              <b>Name:</b> Max Bennet<br />
              <b>Case Summary:</b> The patient is a 57-year-old man with CAD
              (STEMI 3 months ago).  Prior to that, he was only diagnosed with
              dyslipidemia, uncontrolled, and HTN, controlled. He presents to
              the pharmacy today to pick up his monthly refills and brings in a
              new prescription for sildenafil
            </p>
          </Col>
        </Row>
        <h2>Patient</h2>
        <Table dataSource={meds} columns={columns} />
      </div>
    );
  }
}

export default PatientPage;
