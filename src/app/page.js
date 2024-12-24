import Header from "@/components/header";
import MainHero from "@/components/mainHero.";
import Cards from "@/components/cards";
import WhoAreWe from "@/components/whoAreWe";
import WhatWeProvide from "@/components/whatWeProvide";
import Form from "@/components/form";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
    <Header/>
    <MainHero/>
    <Cards/>
    <WhoAreWe/>
    <WhatWeProvide/>
    <Form/>
    <Footer/>
    </>
  );
}
