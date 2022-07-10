import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Info, Lista, ListaItem, Title } from "./style";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#F3E8FF", "#7E22CE", "#D8B4FE"];

export default class PieSchart extends PureComponent {
  render() {
    return (
      <>
        <Title>{this.props.title}</Title>
        <Info>$56,356.00</Info>
        <PieChart width={360} height={300}>
          <Pie
            data={data}
            innerRadius={100}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Lista>
          <ListaItem sx={{ color: "#F3E8FF" }}>
            <span>Direct</span>
          </ListaItem>
          <ListaItem sx={{ color: "#7E22CE" }}>
            <span>Google</span>
          </ListaItem>
          <ListaItem sx={{ color: "#D8B4FE" }}>
            <span>Apple</span>
          </ListaItem>
        </Lista>
      </>
    );
  }
}
