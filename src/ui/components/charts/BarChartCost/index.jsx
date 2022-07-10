import React, { PureComponent } from "react";
import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Info, Lista, ListaItem } from "./style";

const data = [
  {
    Actual: 5.0,
  },
  {
    Plaining: 3.5,
  },
  {
    Budget: 2.5,
  },
];

export default class BarChartCost extends PureComponent {
  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={200}
            height={300}
            data={data}
            barSize={30}
            margin={{
              top: 0,
              right: 20,
              left: 0,
              bottom: 15,
            }}
          >
            {/* <XAxis dataKey="name" /> */}

            <YAxis />
            <Tooltip />

            <Bar dataKey="Actual" fill="#22C55E" />
            <Bar dataKey="Plaining" fill="#A855F7" />
            <Bar dataKey="Budget" fill="#33BFFF" />
          </BarChart>
        </ResponsiveContainer>

        <Info>
          <Lista sx={{ height: 200 }}>
            <ListaItem sx={{ color: "#22C55E" }}>Actual</ListaItem>
            <ListaItem sx={{ color: "#A855F7" }}>Plaining</ListaItem>
            <ListaItem sx={{ color: "#33BFFF" }}>Budget</ListaItem>
          </Lista>
        </Info>
      </>
    );
  }
}
