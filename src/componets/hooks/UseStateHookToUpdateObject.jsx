import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UseStateHookToUpdateObject = () => {
  var a = 100;
  const [count, setCount] = useState(200);
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
  });

  // handle input changes
  const handleChangeValue = (event, type) => {
    const obj = { ...userDetails };
    obj[type] = event.target.value;
    setUserDetails(obj);
  };

  // simulate sending data
  const sendDataToServer = () => {
    console.log("Sending data to server...");
    console.log(userDetails);
    alert("User details sent to server!");
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4 text-primary">User Registration Form</h3>

      <div className="card shadow p-4">
        <p>
          <b>Value of a:</b> {a}
        </p>
        <p>
          <b>Value of count:</b> {count}
        </p>

        <ul className="list-unstyled">
          <li className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              value={userDetails.name}
              onChange={(event) => handleChangeValue(event, "name")}
            />
          </li>
          <li className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              value={userDetails.age}
              onChange={(event) => handleChangeValue(event, "age")}
            />
          </li>
          <li className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              value={userDetails.gender}
              onChange={(event) => handleChangeValue(event, "gender")}
            />
          </li>
          <li className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={userDetails.location}
              onChange={(event) => handleChangeValue(event, "location")}
            />
          </li>
          <li>
            <button className="btn btn-primary w-100" onClick={sendDataToServer}>
              Save Details
            </button>
          </li>
        </ul>
      </div>

      <div className="card mt-4 p-4 shadow-sm">
        <h5 className="text-success">User Details Preview:</h5>
        <ul>
          <li>
            Name: <b>{userDetails.name}</b>
          </li>
          <li>
            Age: <b>{userDetails.age}</b>
          </li>
          <li>
            Gender: <b>{userDetails.gender}</b>
          </li>
          <li>
            Location: <b>{userDetails.location}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseStateHookToUpdateObject;
