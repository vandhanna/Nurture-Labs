import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import "../src/style.css";
import SearchIcon from "@material-ui/icons/Search";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import axios from "axios";

const Table = () => {
  const [goal, setGoal] = useState("");
  const [keyword, setKeyword] = useState("");
  const [matches, setMatches] = useState("");
  const [searchstatus, setSearchstatus] = useState("");
  const [g, setG] = useState("");
  const [k, setK] = useState("");
  const [m, setM] = useState("");
  const [s, setS] = useState("");
  const [go, setGo] = useState("");
  const [ke, setKe] = useState("");
  const [ma, setMa] = useState("");
  const [se, setSe] = useState("");
  const [goa, setGoa] = useState("");
  const [key, setKey] = useState("");
  const [mat, setMat] = useState("");
  const [sea, setSea] = useState("");

  useEffect(async () => {
    const userInfo = await axios.get(
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard",
      {}
    );

    console.log(userInfo.data.data);
    setGoal(userInfo.data.data[0].goal);
    setKeyword(userInfo.data.data[0].keyword);
    setMatches(userInfo.data.data[0].matches);
    setSearchstatus(userInfo.data.data[0].search_status);
    setG(userInfo.data.data[1].goal);
    setK(userInfo.data.data[1].keyword);
    setM(userInfo.data.data[1].matches);
    setS(userInfo.data.data[1].search_status);
    setGo(userInfo.data.data[2].goal);
    setKe(userInfo.data.data[2].keyword);
    setMa(userInfo.data.data[2].matches);
    setSe(userInfo.data.data[2].search_status);
    setGoa(userInfo.data.data[3].goal);
    setKey(userInfo.data.data[3].keyword);
    setMat(userInfo.data.data[3].matches);
    setSea(userInfo.data.data[3].search_status);
  }, []);
  return (
    <div>
      <Card className="Table">
        <div className="Table-row Table-header">
          <div className="Table-row-item">
            <div
              style={{
                position: "absolute",
                width: "330.86px",
                height: "56px",
                left: "0px",
                top: "0px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "10.02%",
                  right: "67.22%",
                  top: "-25%",
                  bottom: "-25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "24px",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Keywords
              </div>
            </div>
          </div>
          <div className="Table-row-item">
            <div
              style={{
                position: "absolute",
                width: "171.27px",
                height: "56px",
                left: "330.86px",
                top: "0px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "5.02%",
                  right: "67.22%",
                  top: "-25%",
                  bottom: "-25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "24px",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Goal
              </div>
            </div>
          </div>
          <div className="Table-row-item">
            <div
              style={{
                position: "absolute",
                width: "155.7px",
                height: "56px",
                left: "452.13px",
                top: "0px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "50.38%",
                  right: "8.24%",
                  top: "-25%",
                  bottom: "-25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "24px",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Matches
              </div>
            </div>
          </div>
          <div className="Table-row-item">
            <div
              style={{
                position: "absolute",
                width: "181.65px",
                height: "56px",
                left: "657.83px",
                top: "0px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "32.19%",
                  right: "1.45%",
                  top: "49.06%",
                  bottom: "87.34%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "24px",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Search Status
              </div>
            </div>
          </div>
          <div className="Table-row-item">
            <div
              style={{
                position: "absolute",
                width: "198.52px",
                height: "56px",
                left: "839.48px",
                top: "0px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "33.19%",
                  right: "2.45%",
                  top: "49.06%",
                  bottom: "87.34%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "24px",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Delete Keyword
              </div>
            </div>
          </div>
        </div>
        <div className="Table-row">
          <div className="Table-row-item u-Flex-grow2" data-header="Keyword">
            <div className="Table-row-item" data-header="Keyword">
              <div
                style={{
                  position: "absolute",
                  width: "225px",
                  height: "52px",
                  left: "0px",
                  borderTop: "1px solid #D3D3D3	",
                  top: "56px",

                  

                  background: "#FFFFFF",
                }}
                // className="Table-row-item u-Flex-grow2"
              >
                <SearchIcon
                  style={{
                    position: "absolute",
                    left: "83.41%",
                    right: "8.75%",
                    top: "25%",
                    bottom: "37.55%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "18.36%",
                    right: "-18.39%",
                    top: "15%",
                    bottom: "25%",

                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "143%",
                   

                    display: "flex",
                    alignItems: "center",
                    textAlign: "right",
                    letterSpacing: "0.15px",

                    

                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  Chair
                </div>
              </div>
            </div>
            <div className="Table-row-item" data-header="Goal">
              <div
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "52px",
                  left: "220px",
                  borderTop: "1px solid #D3D3D3	",
                  top: "56px",

                  

                  background: "#FFFFFF",
                }}
                // className="Table-row-item u-Flex-grow2"
              >
                <div
                  style={{
                    position: "absolute",
                    left: "46.36%",
                    right: "-18.39%",
                    top: "15%",
                    bottom: "25%",

                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "143%",
                   

                    display: "flex",
                    alignItems: "center",
                    textAlign: "right",
                    letterSpacing: "0.15px",

                    

                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  Lead gen
                </div>
              </div>
            </div>
            <div className="Table-row-item" data-header="Matches">
              <div
                style={{
                  position: "absolute",
                  width: "225px",
                  height: "52px",
                  left: "468px",
                  borderTop: "1px solid #D3D3D3	",
                  top: "56px",

                  

                  background: "#FFFFFF",
                }}
                // className="Table-row-item u-Flex-grow2"
              >
                <div
                  style={{
                    position: "absolute",
                    left: "39.36%",
                    right: "18.39%",
                    top: "15%",
                    bottom: "25%",

                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "143%",
                   

                    display: "flex",
                    alignItems: "center",
                    textAlign: "right",
                    letterSpacing: "0.15px",

                    

                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  6
                </div>
              </div>
            </div>
            <div className="Table-row-item" data-header="Search Status">
              <div
                style={{
                  position: "absolute",
                  width: "157px",
                  height: "52px",
                  left: "693px",
                  borderTop: "1px solid #D3D3D3	",
                  top: "56px",

                  

                  background: "#FFFFFF",
                }}
                // className="Table-row-item u-Flex-grow2"
              >
                <div
                  style={{
                    position: "absolute",
                    left: "45.36%",
                    right: "18.39%",
                    top: "15%",
                    bottom: "25%",

                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "143%",
                   

                    display: "flex",
                    alignItems: "center",
                    textAlign: "right",
                    letterSpacing: "0.15px",

                    

                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  Done
                </div>
              </div>
            </div>
            <div className="Table-row-item" data-header="Delete Keyword">
              <div
                style={{
                  position: "absolute",
                  width: "225px",
                  height: "52px",
                  left: "820px",
                  borderTop: "1px solid #D3D3D3	",
                  top: "56px",

                  

                  background: "#FFFFFF",
                }}
              >
                <FiberManualRecordIcon
                  style={{
                    width: "28px",
                    height: "28px",
                    marginTop: "12px",
                    marginLeft: "25px",
                    color: "#D3D3D3	",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Table-row">
          <div className="Table-row-item u-Flex-grow2" data-header="Keyword">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "0px",
                borderTop: "1px solid #D3D3D3	",
                top: "108px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              {/* <SearchIcon
                style={{
                  position: "absolute",
                  left: "83.41%",
                  right: "8.75%",
                  top: "25%",
                  bottom: "37.55%",
                }}
              /> */}
              <div
                style={{
                  position: "absolute",
                  left: "18.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {keyword}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Goal">
            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "52px",
                left: "220px",
                borderTop: "1px solid #D3D3D3	",
                top: "108px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "46.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {goal}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Matches">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "468px",
                borderTop: "1px solid #D3D3D3	",
                top: "108px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "37.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {matches}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Search Status">
            <div
              style={{
                position: "absolute",
                width: "157px",
                height: "52px",
                left: "693px",
                borderTop: "1px solid #D3D3D3	",
                top: "108px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "46.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {searchstatus}
              </div>
            </div>
          </div>
          <div
            className="Table-row-item u-Flex-grow3"
            data-header="Delete Keyword"
          >
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "820px",
                borderTop: "1px solid #D3D3D3	",
                top: "108px",

                

                background: "#FFFFFF",
              }}
            >
              {/* <FiberManualRecordIcon
                  style={{
                    width: "28px",
                    height: "28px",
                    marginTop: "12px",
                    marginLeft: "25px",
                    color: "#D3D3D3	",
                  }}
                /> */}
            </div>
          </div>
        </div>
        <div className="Table-row">
          <div className="Table-row-item u-Flex-grow2" data-header="Keyword">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "0px",
                borderTop: "1px solid #D3D3D3	",
                top: "160px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "18.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {k}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Goal">
            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "52px",
                left: "220px",
                borderTop: "1px solid #D3D3D3	",
                top: "160px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "46.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {g}
              </div>
            </div>{" "}
          </div>
          <div className="Table-row-item" data-header="Matches">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "468px",
                borderTop: "1px solid #D3D3D3	",
                top: "160px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "38.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {m}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Search Status">
            <div
              style={{
                position: "absolute",
                width: "157px",
                height: "52px",
                left: "693px",
                borderTop: "1px solid #D3D3D3	",
                top: "160px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "45.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {se}
              </div>
            </div>
          </div>
          <div
            className="Table-row-item u-Flex-grow3"
            data-header="Delete Keyword"
          >
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "820px",
                borderTop: "1px solid #D3D3D3	",
                top: "160px",

                

                background: "#FFFFFF",
              }}
            >
              {/* <FiberManualRecordIcon
                  style={{
                    width: "28px",
                    height: "28px",
                    marginTop: "12px",
                    marginLeft: "25px",
                    color: "#D3D3D3	",
                  }}
                /> */}
            </div>
          </div>
        </div>
        <div className="Table-row">
          <div className="Table-row-item u-Flex-grow2" data-header="Keyword">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "0px",
                borderTop: "1px solid #D3D3D3	",
                top: "212px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "18.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {ke}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Goal">
            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "52px",
                left: "220px",
                borderTop: "1px solid #D3D3D3	",
                top: "212px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "46.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {go}
              </div>
            </div>{" "}
          </div>
          <div className="Table-row-item" data-header="Matches">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "468px",
                borderTop: "1px solid #D3D3D3	",
                top: "212px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "39.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {ma}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Search Status">
            <div
              style={{
                position: "absolute",
                width: "157px",
                height: "52px",
                left: "693px",
                borderTop: "1px solid #D3D3D3	",
                top: "212px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "45.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {se}
              </div>
            </div>{" "}
          </div>
          <div
            className="Table-row-item u-Flex-grow3"
            data-header="Delete Keyword"
          >
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "820px",
                borderTop: "1px solid #D3D3D3	",
                top: "212px",

                

                background: "#FFFFFF",
              }}
            >
              {/* <FiberManualRecordIcon
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "12px",
                  marginLeft: "25px",
                  color: "#D3D3D3	",
                }}
              /> */}
            </div>
          </div>
        </div>
        <div className="Table-row">
          <div className="Table-row-item u-Flex-grow2" data-header="Keyword">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "0px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "18.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {key}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Goal">
            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "52px",
                left: "220px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "46.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {goa}
              </div>
            </div>{" "}
          </div>
          <div className="Table-row-item" data-header="Matches">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "468px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "38.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {mat}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Search Status">
            <div
              style={{
                position: "absolute",
                width: "157px",
                height: "52px",
                left: "693px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "45.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {sea}
              </div>
            </div>{" "}
          </div>
          <div
            className="Table-row-item u-Flex-grow3"
            data-header="Delete Keyword"
          >
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "820px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
            >
              {/* <FiberManualRecordIcon
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "12px",
                  marginLeft: "25px",
                  color: "#D3D3D3	",
                }}
              /> */}
            </div>
          </div>
        </div>
        <div className="Table-row">
          <div className="Table-row-item u-Flex-grow2" data-header="Keyword">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "0px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "18.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {key}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Goal">
            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "52px",
                left: "220px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "46.36%",
                  right: "-18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {goa}
              </div>
            </div>{" "}
          </div>
          <div className="Table-row-item" data-header="Matches">
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "468px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "38.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {mat}
              </div>
            </div>
          </div>
          <div className="Table-row-item" data-header="Search Status">
            <div
              style={{
                position: "absolute",
                width: "157px",
                height: "52px",
                left: "693px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
              // className="Table-row-item u-Flex-grow2"
            >
              <div
                style={{
                  position: "absolute",
                  left: "45.36%",
                  right: "18.39%",
                  top: "15%",
                  bottom: "25%",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "143%",
                 

                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  letterSpacing: "0.15px",

                  

                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {sea}
              </div>
            </div>{" "}
          </div>
          <div
            className="Table-row-item u-Flex-grow3"
            data-header="Delete Keyword"
          >
            <div
              style={{
                position: "absolute",
                width: "225px",
                height: "52px",
                left: "820px",
                borderTop: "1px solid #D3D3D3	",
                top: "264px",

                

                background: "#FFFFFF",
              }}
            >
              {/* <FiberManualRecordIcon
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "12px",
                  marginLeft: "25px",
                  color: "#D3D3D3	",
                }}
              /> */}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Table;
