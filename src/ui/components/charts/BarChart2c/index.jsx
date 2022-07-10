import React, { PureComponent } from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
import { Container, Hora, Infos, Percent, Title } from "./style";

const data = [
  {
    name: "Page A",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page B",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page C",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page D",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page E",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page F",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    pv: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    pv: Math.floor(Math.random() * 10),
  },
];
export class BarsChart2c extends PureComponent {
  render() {
    return (
      <>
        <Infos sx={{ color: this.props.colorBars }}>
          <Title>{this.props.title}</Title>
          <Percent>{this.props.percent}</Percent>
          <Hora>{this.props.hour}</Hora>
        </Infos>
        <ResponsiveContainer width="55%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <Tooltip />

            <Bar dataKey="pv" fill={this.props.colorBars} />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}

// export function d(props) {
//   return (
//     <>
//       <Container></Container>
//       <Bars />
//     </>
//   );
// }
