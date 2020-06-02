import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import genie from "./genie.png";

const OurServices = ({ each }) => {
  return <li className="list-group-item list-group-item-success">{each}</li>;
};

const ClientServices = ({ each }) => {
  return (
    <li
      className="list-group-item"
      style={{ backgroundColor: "rgb(197, 21, 21)", color: "white" }}
    >
      {each}
    </li>
  );
};

const SelectServices = ({ each }) => {
  return <option value={each}> {each}</option>;
};

const DeleteServices = ({ each }) => {
  return <option value={each}>{each}</option>;
};

const App = () => {
  const [services, setServices] = useState([
    "video chat ",
    "live chat",
    "immediate response",
    "improve retailing",
    "increase customer satisfaction",
    "email",
    "chat bots",
    "text",
    "iot devices",
  ]);
  const [customerServices, setCustomerServices] = useState([]);
  const [addServiceValue, setAddServiceValue] = useState("");
  const [deleteServiceValue, setDeleteServiceValue] = useState("");
  const [visibleAdd, setVisibleAdd] = useState(true);
  const [visibleDelete, setVisibleDelete] = useState(true);

  //Changing the select option of the Add Services
  const onChangeAdd = (e) => {
    if (e.target.value === "") {
      setAddServiceValue("");
    } else {
      setAddServiceValue(e.target.value);
    }
  };

  const onDeleteService = (e) => {
    setDeleteServiceValue(e.target.value);
  };

  //Clicking the add Button
  const onAdd = () => {
    setVisibleAdd(!visibleAdd);
    var newServices = customerServices.filter(
      (each) => each !== "" && each !== addServiceValue
    );
    var realServices = [...newServices, addServiceValue];
    setCustomerServices(realServices);
  };

  //Clicking the delete Button
  const onDelete = () => {
    setVisibleDelete(!visibleDelete);
    var newServices = customerServices.filter(
      (each) => each !== deleteServiceValue
    );
    setCustomerServices(newServices);
  };
  return (
    <div className="App text-danger container">
      <div className="heading text-center">
        <h1>Welcome to Support Genie</h1>
        <img
          src={genie}
          className="img-fluid"
          style={{ "max-width": "100%", height: "auto" }}
        />
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <ul
            className="list-group"
            style={{ border: "3px rgb(197, 21, 21) solid" }}
          >
            <p className=" text-white text-center">
              Our Core Services essentil for 21st Century Customer Care Services
            </p>
            {services.map((each, index) => {
              return <OurServices each={each} />;
            })}
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center my-auto">
          <div className="form-group mt-5">
            <select
              className="form-control"
              style={{ display: visibleAdd ? "none" : "block" }}
              onChange={onChangeAdd}
            >
              <option selected>none</option>
              {services.map((each, index) => {
                return <SelectServices key={index} each={each} />;
              })}
            </select>
          </div>
          <div>
            <button className="btn btn-success" onClick={onAdd}>
              Add
            </button>
            <hr />
          </div>

          <div>
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
          <div className="form-group mt-3">
            <select
              className="form-control"
              style={{ display: visibleDelete ? "none" : "block" }}
              onChange={onDeleteService}
            >
              <option selected>none </option>
              {customerServices.map((each, index) => {
                return <DeleteServices each={each} />;
              })}
            </select>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <ul
            className="list-group"
            style={{ border: "3px rgb(197, 21, 21) solid" }}
          >
            <p className="text-white text-center">
              Services Every Customer Service Provider Should Have
            </p>
            {customerServices.map((each) => {
              return <ClientServices each={each} />;
            })}
          </ul>
        </div>
      </div>
      <hr />
      <footer class="footer mt-5">
        <div class="container text-center">
          <span class="text-white">
            Created By Theodore Kelechukwu Onyejiaku
            <br />
            <a href="https://www.linkedin.com/in/theodore20151014166/">
              <i className="fa fa-linkedin text-white"></i>
            </a>{" "}
            |{" "}
            <a href="https://github.com/Theodore-Kelechukwu-Onyejiaku">
              <i className="fa fa-github text-white"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
