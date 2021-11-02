import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css"

import Button from "@material-ui/core/Button";

const Profile = () => {
  const { time } = useParams();
  const todo = useSelector((state) => state.frame);
  const dispatch = useDispatch();
  const currentData = todo[+(time - 1)];
  const [fName, setFname] = useState();
  const [lName, setLname] = useState();
  const [phone, setPhone] = useState();
  const history = useHistory();

  const savingDetails = () => {
    todo[+(time - 1)] = {
      active: true,
      firstName: fName,
      secondName: lName,
      phoneNumber: phone,
    };
    dispatch({ type: "UPDATE_ONE", data: todo });
    history.goBack();
  };

  const settingFname = (e) => {
    setFname(e.target.value);
  };
  const settingLname = (e) => {
    setLname(e.target.value);
  };
  const settingPhone = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div>
      <div class="form">
        <div class="title">Welcome</div>

        <div class="input-container ic1">
        <label for="firstname" >
            First name
          </label>
          <input
            id="firstname"
            class="input"
            type="text"
            placeholder={currentData.firstName}
            onChange={settingFname}
          />
       
        </div>

        <div class="input-container ic2">
        <label for="lastname" >
            Last name
          </label>
          <input
            id="lastname"
            class="input"
            type="text"
            placeholder={currentData.secondName}
            onChange={settingLname}
          />
   
        
        </div>

        <div class="input-container ic2">
        <label for="lastname" >
            Phone Number
          </label>
          <input
            id="lastname"
            class="input"
            type="tel"
            placeholder={currentData.phoneNumber}
            onChange={settingPhone}
          />

          
        </div>

        {/* <label>First Name: </label>
        <input
          type="text"
          placeholder={currentData.firstName}
          onChange={settingFname}
        />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder={currentData.secondName}
          onChange={settingLname}
        />
        <label>Mobile Number: </label>
        <input
          type="tel"
          placeholder={currentData.phoneNumber}
          onChange={settingPhone}
        />
        <br></br> */}
        <Button class="submit" onClick={savingDetails}>
          Save
        </Button>
        <Button
          class="cancle"
          onClick={() => {
            history.goBack();
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Profile;
