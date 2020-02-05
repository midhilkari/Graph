import React, { Component } from "react";
import "./App.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area
} from "recharts";

let PortfolioValue = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      test: "hgahgd"
    };
  }
  Invest = () => {
    PortfolioValue += 50;
    this.setState(function(state, props) {
      let data = state.data;
      console.log(data);
      data.push({ name: "April", Portfolio_Value: PortfolioValue });
      return {
        data: data,
        test: "rajesh"
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Portfolio Value</h1>
        <button onClick={this.Invest}>Invest 50</button>
        <div>{this.state.test}</div>
        <div>{this.state.data.toString()}</div>
        <LineChart
          width={900}
          height={300}
          data={this.state.data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="Portfolio_Value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}
export default App;
