import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const style = {
  textAlign: "center",
  fontSize: "300%",
};
const OurServices = ({ each }) => {
  return <li className="list-group-item list-group-item-success">{each}</li>;
};

const ClientServices = ({ each }) => {
  return <li className="list-group-item list-group-item-danger">{each}</li>;
};

const SelectServices = () => {
  return <option value="service1"> Service1</option>;
};

const AddButton = () => {
  return (
    <div>
      <button className="btn btn-success mt-5">Add</button>
      <hr />
    </div>
  );
};

const DeleteButton = () => {
  return (
    <div>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

const App = () => {
  const [services, setServices] = useState([
    "video chat ",
    "live chat",
    "immediate response",
    "improve retailing",
    "increase customer satisfaction",
    "email",
    "text",
  ]);
  const [customerServices, setCustomerServices] = useState([]);
  return (
    <div className="App text-danger container">
      <div className="heading text-center">
        <h1>Welcome to Support Genie</h1>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <ul className="list-group">
            <p className="text-center text-danger">
              Our Core Services essentil for 21st Century Customer Care Services
            </p>
            {services.map((each, index) => {
              return <OurServices each={each} />;
            })}
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="form-group">
            <select className="form-control">
              <SelectServices />
            </select>
          </div>
          <AddButton />
          <DeleteButton />
          <div className="form-group mt-5">
            <select className="form-control"></select>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <ul className="list-group">
            <p className="text-center text-danger">
              Services Every Customer Service Provider Should Have
            </p>
            {customerServices.map((each) => {
              return <ClientServices each={each} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
