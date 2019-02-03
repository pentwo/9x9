import React, { Component } from "react";
import styled from "styled-components";

const Grid = styled.div`
  height: 366px;
  width: 350px;

  padding: 64px 40px;
  font-size: 24px;

  border-radius: 100px 0px 30px 0px;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px #d8d8d8;

  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 8px 30px;
  /* justify-items: center; */

  h1 {
    font-size: 128px;
    font-weight: Bold;
    grid-row: span 3;

    text-align: center;
    text-shadow: 4px 3px 0 #f0f0f0;
  }
`;

export default class Table extends Component {
  render() {
    const num = this.props.num;

    return (
      <Grid>
        <h1>{num}</h1>
        <MultiplyLine num={num} multi={1} />
        <MultiplyLine num={num} multi={2} />
        <MultiplyLine num={num} multi={3} />
        <MultiplyLine num={num} multi={4} />
        <MultiplyLine num={num} multi={5} />
        <MultiplyLine num={num} multi={6} />
        <MultiplyLine num={num} multi={7} />
        <MultiplyLine num={num} multi={8} />
        <MultiplyLine num={num} multi={9} />
      </Grid>
    );
  }
}

const Line = styled.div`
  font-weight: normal;
`;

const MultiplyLine = props => {
  const { num, multi } = props;
  return (
    <Line>
      {num} × {multi} ＝ {num * multi}
    </Line>
  );
};
