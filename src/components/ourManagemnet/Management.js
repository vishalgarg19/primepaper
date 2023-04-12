import React from "react";
import "./Management.css";
import Director from "../../assets/Director.jpg";

const Management = () => {
  return (
    <div className="management">
      <div>
        <img src={Director} alt="director" />
      </div>
      <div>
        <h2>Management Experiance</h2>
        <p>
          There are two well qualified and knowledgeable directors who are
          having experience in the field of corrugation Industry line.
        </p>
        <p>
          <strong>Mr. ANKUR PASARI</strong>&nbsp;is an MBA and have experience
          of 16 years in the industry. He has good knowledge of operation and
          plant machinery.
        </p>
        <p>
          <strong>Mrs. ADITI JAIN PASARI</strong>&nbsp; is a Commerce Graduate
          and have 16 years’ experience in the industry. She has good knowledge
          of operations, accounts and finance.
        </p>
        <div>
          <p>
            There are also well qualified and experience management staffs in
            company:
          </p>
          <ul>
            <li key="1">
              <strong>Mr. Mahesh Sharma </strong>&nbsp;(Commercial Manager) is
              commerce graduate having 15 years’ experience.
            </li>
            <li key="2">
              <strong>Mr. Shekhar Gupta</strong>&nbsp; (Production in-charge) is
              graduate having 10 years’ experience.
            </li>
            <li key="3">
              <strong>Mr. Aakash Sharma</strong>&nbsp; (Quality Officer) is BE –
              Mechanical having 6 years’ experience.
            </li>
            <li key="4">
              <strong>Mr. Akshay Kumar</strong>&nbsp; (Commercial and Accounts
              Executive), M. Com with 7+ years of experience.
            </li>
            <li key="5">
              <strong>Mr. Sukhveer Singh Baghel</strong>&nbsp; (Production,
              Sales and Marketing Incharge) , M.A. with 10+ years of experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Management;
