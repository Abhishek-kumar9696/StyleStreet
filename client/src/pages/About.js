import React from "react";
import Layout from "../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <Layout title={'About Us -Ecommerce App' }>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-1">
            this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us this is about us 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;