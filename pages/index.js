import Head from "next/head";
import Script from "next/script";
import Header from "../Component/Header";
import Slider from "../Component/Slider";
import Banner from "../Component/Banner";
import About from "../Component/About";
import Service from "../Component/Service";
import Quatation from "../Component/Quatation";
import Team from "../Component/Team";
import Resume from "../Component/Resume";
import Counter from "../Component/Counter";
import Blog from "../Component/Blog";
import Contact from "../Component/Contact";
import Follow from "../Component/Follow";

export default function Home() {
  return (
    <>
      
      {/* <Header></Header> */}
      <Banner></Banner>
      <About></About>
      <Follow></Follow>
      <Service></Service>
      <Quatation></Quatation>
      
      <Team></Team>
      <Resume></Resume>
      <Counter></Counter>
      <Blog></Blog>
      <Contact></Contact>
      {/* <Slider></Slider> */}
      
    </>
  );
}
