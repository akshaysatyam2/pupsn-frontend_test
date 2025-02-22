import Head from "next/head";
import Header from "../components/Header.mjs";
import Hero from "../components/Hero.mjs";
import Footer from "../components/Footer.mjs";

export default function Home() {
  return (
    <>
      <Head>
        <title>PupsN - Your Pet's Lifelong Companion</title>
        <meta name="description" content="Monitor your pet’s health and connect with other pet owners." />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
