import Head from "next/head";
import Image from "next/image";
import Card from "@mui/material/Card";
import BasicCard from "../../ui/components/Cards";
import MenuLateral from "../../ui/components/menuLateral";
import MenuNav from "../../ui/components/menuNav";
import styles from "../../ui/styles/Home.module.css";
import { Coluna, Container, Linha } from "./style";

export default function Home() {
  return (
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
              <Card sx={{ minHeight: 267, width: 546, bgcolor: "#22C55E" }}>
                Teste
              </Card>
              <Card sx={{ minHeight: 267, width: 546 }}>Teste</Card>
            </Coluna>
            <Coluna>
              <Card sx={{ minHeight: 267, width: 264, bgcolor: "#2563EB" }}>
                Teste
              </Card>
              <Card sx={{ minHeight: 267, width: 264, bgcolor: "#9333EA" }}>
                Teste
              </Card>
            </Coluna>
            <Coluna>
              <Card sx={{ height: 168, width: 264, bgcolor: "#BFEBFF" }}>
                Teste
              </Card>
              <Card sx={{ height: 168, width: 264, bgcolor: "#F3E8FF" }}>
                Teste
              </Card>
              <Card sx={{ height: 168, width: 264, bgcolor: "#DCFCE7" }}>
                Teste
              </Card>
            </Coluna>
          </Linha>
          <Linha>
            <Coluna>
              <Card sx={{ minHeight: 466, width: 360 }}>Teste</Card>
            </Coluna>
            <Coluna>
              <Card sx={{ height: 466, width: 743 }}>Teste</Card>
            </Coluna>
          </Linha>
        </Container>

        {/* 
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
