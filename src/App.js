import React, { Component } from "react";
import styled from "styled-components";

import Table from "./Table";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 30px;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 14px auto 14px;
  grid-template-rows: 28px auto auto 28px;
  grid-column-gap: 20px;
  /* min-height: 100%; */
  /* justify-content: center; */
  align-items: center;
  text-align: center;

  h1 {
    grid-column: span 3;
    font-family: "PingFang TC";
    font-weight: normal;
    font-size: 56px;
    align-self: end;
  }
  h2 {
    grid-column: span 3;
    font-family: "Helvetica Neue";
    font-size: 24px;
    font-weight: lighter;
    align-self: start;
  }
  hr {
    border-top: 1px solid #2eb738;
  }
`;

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Title>
          {/* <div> */}
          <span>×</span>
          <hr />
          <span>×</span>
          <h1>九九乘法表</h1>
          <h2>MULTIPLICATION CHART</h2>
          <span>×</span>
          <hr />
          <span>×</span>
          {/* </div> */}
        </Title>
        <Table num="2" />
        <Table num="3" />
        <Table num="4" />
        <Table num="5" />
        <Table num="6" />
        <Table num="7" />
        <Table num="8" />
        <Table num="9" />
      </Layout>
    );
  }
}
