import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Taskbar from "@/components/Taskbar/Taskbar";
import Desktop from "@/components/Desktop/Desktop";
import Folder from "@/components/Folder/Folder";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gor Sargsyan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Desktop />
        <Folder />
        <Taskbar />
      </main>
    </>
  );
}
