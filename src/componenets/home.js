import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import "./homeStyle.css"

import Button from "@material-ui/core/Button";

const Home = () => {
  const history = useHistory();
  const todo = useSelector((state) => state.frame);
  const statusAll = todo.map((data) => data.active);

  const styleObj = {
    marginRight: "5px",
    // marginTop:"18rem"
    
  };

  return (
    <div className='home' style={{display:'flex', textAlign:"center", justifyContent:"center"}}>
      <div style={styleObj} className="click">
        <Button
          variant="contained"
          onClick={() => {
            history.push("/profile/1");
          }}
          style={
            statusAll[0]
              ? {
                  backgroundColor: "red",
                }
              : null
          }
        >
          9 AM - 10 AM
        </Button>
      </div>

      <div style={styleObj} className="click">
        <Button
          variant="contained"
          onClick={() => {
            history.push("/profile/2");
          }}
          style={
            statusAll[1]
              ? {
                  backgroundColor: "red",
                }
              : null
          }
        >
          9 AM - 10 AM
        </Button>
      </div>

      <div style={styleObj} className="click">
        <Button
          variant="contained"
          onClick={() => {
            history.push("/profile/3");
          }}
          style={
            statusAll[2]
              ? {
                  backgroundColor: "red",
                }
              : null
          }
        >
          9 AM - 10 AM
        </Button>
      </div>

      <div style={styleObj} className="click">
        <Button
          variant="contained"
          onClick={() => {
            history.push("/profile/4");
          }}
          style={
            statusAll[3]
              ? {
                  backgroundColor: "red",
                }
              : null
          }
        >
          9 AM - 10 AM
        </Button>
        </div>

        <div style={styleObj} className="click">

        <Button
          variant="contained"
          onClick={() => {
            history.push("/profile/5");
          }}
          style={
            statusAll[4]
              ? {
                  backgroundColor: "red",
                }
              : null
          }
        >
          9 AM - 10 AM
        </Button>
        </div>
 

      <div style={styleObj} className="click">
        <Button
          variant="contained"
          onClick={() => {
            history.push("/profile/6");
          }}
          style={
            statusAll[5]
              ? {
                  backgroundColor: "red",
                }
              : null
          }
        >
          9 AM - 10 AM
        </Button>
      </div>
      <div style={styleObj} className="click">
        <Button
          variant="contained"
          onClick={() => {
            history.push("/profile/7");
          }}
          style={
            statusAll[6]
              ? {
                  backgroundColor: "red",
                }
              : null
          }
        >
          9 AM - 10 AM
        </Button>
      </div>

      <div style={styleObj} className="click">
        <Button
          variant="contained"
          onClick={() => {
            history.push("/profile/8");
          }}
          style={
            statusAll[7]
              ? {
                  backgroundColor: "red",
                }
              : null
          }
        >
          9 AM - 10 AM
        </Button>
      </div>
    </div>
  );
};

export default Home;
