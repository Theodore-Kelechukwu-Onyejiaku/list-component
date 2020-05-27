import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
const style = {
  textAlign: "center",
  fontSize: "300%"
}
const OurServices = ()=>{
  return <div>We offer the following services</div>
}

const ClientServices = () =>{
  return <div>Our customers require the following services</div>
}


const App = () =>{
  const [services, setServices] = useState();
  
  return (

    <div className="App text-danger container">
      <div className="row">
        <div>Welcome to Support Genie</div>
        <div className="col-sm-12 col-md-4">
          <OurServices />
        </div>
        <div className="col-sm-12 col-md-4">
          <ClientServices />
        </div>
      </div>
        
        
        
    </div>
  );
} 

export default App