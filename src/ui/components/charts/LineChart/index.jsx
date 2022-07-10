import React, { PureComponent } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { Hora, Infos, Title } from "./style";

const data = [
  {
    name: "Page A",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page B",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page C",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page D",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page E",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page F",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    hr: Math.floor(Math.random() * 10),
  },
];
const data1 = [
  {
    name: "Page A",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page B",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page C",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page D",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page E",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page F",
    hr: Math.floor(Math.random() * 10),
  },
  {
    name: "Page G",
    hr: Math.floor(Math.random() * 10),
  },
];

export class LineChartGrenn extends PureComponent {
  render() {
    return (
      <>
        <Infos sx={{ padding: 4 }}>
          <Title>{this.props.title}</Title>
        </Infos>
        <ResponsiveContainer width="100%" height="70%">
          <AreaChart
            width={200}
            height={60}
            data={data1}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 50,
            }}
          >
            <defs>
              <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Tooltip />
            <Area
              type="monotone"
              dataKey="hr"
              stroke="#22C55E"
              fill="url(#green)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export class LineChartRoxo extends PureComponent {
  render() {
    return (
      <>
        <Infos sx={{ color: this.props.color, padding: 2 }}>
          <Title>{this.props.title}</Title>
          <Hora>{this.props.hour}</Hora>
        </Infos>
        <ResponsiveContainer width="100%" height="70%">
          <AreaChart
            width={200}
            height={60}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 50,
            }}
          >
            <defs>
              <linearGradient id="roxo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a355f7" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#751DC8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="hr"
              stroke="#C084FC"
              fill="url(#roxo)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </>
    );
  }
}
