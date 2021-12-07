import React from "react";
import Layout from "../../components/Layout";
import Equity from "./Equity";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Invested from "./Invested";
import Video from "./Video";
import Vision from "./Vision";

const Index = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Vision />
        <Invested />
        <Equity />
        <Video />
        <HowItWorks/>
      </Layout>
    </div>
  );
};

export default Index;
