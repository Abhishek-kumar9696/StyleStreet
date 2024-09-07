import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Policyy = () => {
  return (
    <Layout title={'Privacy Policy' }>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">

          <p>
            policy 1
          </p>
          <p>
            policy 1
          </p>
          <p>
            policy 1
          </p>
          <p>
            policy 1
          </p>
          <p>
            policy 1
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policyy;