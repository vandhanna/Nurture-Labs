import "./App.css";
import Table from "./table";
import "./style.css";
import axios from "axios";
import img from "./img/img-1.png";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import PaymentIcon from "@material-ui/icons/Payment";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Card } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

function App() {  
    return (
      <div className="App">
        <div className="main">
          <div className="col">
            <div className="upper">
              <img src={img} />
              <div className="monitorr">TermMonitor</div>
            </div>

            <div className="list">
              <HomeIcon style={{ color: "white", marginLeft: "11.68%" }} />
              <div className="keywords">Add keywords</div>
            </div>

            <div className="list list-other">
              <SupervisorAccountIcon
                style={{ color: "gray", marginLeft: "11.68%" }}
              />
              <div className="keywords-other">Matches</div>
            </div>

            <div className="list list-other">
              <PaymentIcon style={{ color: "gray", marginLeft: "11.68%" }} />
              <div className="keywords-other">Manage sources</div>
            </div>

            <div className="list list-other">
              <PaymentIcon style={{ color: "gray", marginLeft: "11.68%" }} />
              <div className="keywords-other">Integration</div>
            </div>

            <div className="list list-other">
              <PaymentIcon style={{ color: "gray", marginLeft: "11.68%" }} />
              <div className="keywords-other">Alerts</div>
            </div>

            <div className="list list-other">
              <StarIcon style={{ color: "gray", marginLeft: "11.68%" }} />
              <div className="keywords-other">Settings</div>
              <ArrowDropDownIcon
                style={{ color: "gray", marginLeft: "29.17%" }}
              />
            </div>
            <div>Billing</div>
          </div>

          <div className="right-col">
            <div className="upper-col">
              <div className="title-1">KEYWORDS</div>

              <div className="inputs">
                <input
                  type="text"
                  placeholder="SUBMIT ➜  "
                  className="inp"
                ></input>
                <div className="icon">A</div>
              </div>
            </div>

            <div className="inner-1">
              <div className="inner-2">
                <div className="a-1">Add Another Keyword</div>
                <div className="a-2">1/3</div>
                <div className="a-3">upgrade</div>
              </div>

              <div className="ad-search">Advance Search</div>
            </div>

            <div className="inner-3">
              <SearchIcon style={{}} />
              <input
                placeholder="Enter your filters here"
                className="in"
              ></input>
              <button className="in-btn">save Filters</button>
            </div>

            <div className="inner-4">
              <div className="tex-1">The terms you are tracking</div>
              <div className="tex-2">The data will refresh every 5 minutes</div>
            </div>
          </div>

          <div>
           <Table  />;
          </div>
          <button className="Btn"> VIEW RESULTS</button>
        </div>
      </div>
    );
}

export default App;
