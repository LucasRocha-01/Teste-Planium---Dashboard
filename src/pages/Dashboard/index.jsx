import Head from "next/head";
import Card from "@mui/material/Card";
import MenuLateral from "../../ui/components/menuLateral";
import MenuNav from "../../ui/components/menuNav";
import styles from "../../ui/styles/Home.module.css";
import { Coluna, Container, Linha, Main } from "./style";
import {
  LineChartGrenn,
  LineChartRoxo,
} from "../../ui/components/charts/LineChart";
import { BarsChart } from "../../ui/components/charts/BarChart";
import ListaApps from "../../ui/components/ListaApps";
import BarChartCost from "../../ui/components/charts/BarChartCost";
import { BarsChart2c } from "../../ui/components/charts/BarChart2c";
import dynamic from "next/dynamic";

const PieSchart = dynamic(import("../../ui/components/charts/PieChart"), {
  ssr: false,
});

export default function Home() {
  return (
    <Main>
      <div className={styles.container}>
        <Head>
          <title>Dashboard Planium</title>
          <meta name="description" />
        </Head>
        <MenuNav />
        <main className={styles.main}>
          <MenuLateral />

          <Container>
            <Linha>
              <Coluna>
                {/* <Card sx={{ height: 267, width: 546, bgcolor: "#22C55E" }}> */}
                <Card sx={{ maxHeight: 267, height: 267, width: 546 }}>
                  <LineChartGrenn title="Web Statistic" />
                </Card>
                <Card
                  className="BarCostChart"
                  sx={{ padding: 4, height: 267, width: 546 }}
                >
                  <BarChartCost />
                </Card>
              </Coluna>
              <Coluna>
                <Card
                  sx={{
                    padding: 2,
                    height: 267,
                    width: 264,
                    bgcolor: "#2563EB",
                  }}
                >
                  <BarsChart
                    title="Time At Work"
                    hour="2 h 43 min"
                    colors="#60A5FA"
                  />
                </Card>
                <Card sx={{ height: 267, width: 264, bgcolor: "#9333EA" }}>
                  <LineChartRoxo
                    title="Creativity"
                    hour="2 h 32 min"
                    color="#D8B4FE"
                  />
                </Card>
              </Coluna>
              <Coluna>
                <Card
                  className="charts2Columns"
                  sx={{
                    height: 168,
                    width: 264,
                    bgcolor: "#BFEBFF",
                    border: 1,
                    borderColor: "#99DFFF",
                  }}
                >
                  <BarsChart2c
                    title="Communication"
                    percent="+5%"
                    hour="1 h 21 min"
                    colorBars="#33BFFF"
                  />
                </Card>
                <Card
                  className="charts2Columns"
                  sx={{
                    height: 168,
                    width: 264,
                    bgcolor: "#F3E8FF",
                    border: 1,
                    borderColor: "#E9D5FF",
                  }}
                >
                  <BarsChart2c
                    title="Productivity"
                    percent="+5%"
                    hour="1 h 21 min"
                    colorBars="#A855F7"
                  />
                </Card>
                <Card
                  className="charts2Columns"
                  sx={{
                    height: 168,
                    width: 264,
                    bgcolor: "#DCFCE7",
                    border: 1,
                    borderColor: "#BBF7D0",
                  }}
                >
                  <BarsChart2c
                    title="Others"
                    percent="+5%"
                    hour="1 h 21 min"
                    colorBars="#22C55E"
                  />
                </Card>
              </Coluna>
            </Linha>
            <Linha>
              <Coluna>
                <Card className="PieSchart" sx={{ height: 466, width: 360 }}>
                  <PieSchart title="Sales By Referrer" />
                </Card>
              </Coluna>
              <Coluna>
                <Card sx={{ height: 466, width: 743 }}>
                  <ListaApps />
                </Card>
              </Coluna>
            </Linha>
          </Container>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </Main>
  );
}
