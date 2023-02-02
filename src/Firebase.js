import { React, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
// import { Image } from "react-bootstrap";

function App() {
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { Firstname, Lastname, Email, Password } = user;

    if (Firstname && Lastname && Email && Password){
     
      const res = await fetch(
        "https://fir-ec947-default-rtdb.firebaseio.com/youtubeform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Firstname,
            Lastname,
            Email,
            Password,
          }),
        }
      );
  
      if (res) 
      {
        setUser({
       Firstname: "",
       Lastname: "",
       Email: "",
       Password: "",
      });
      alert("Data Stored Successfully");
    }

    } else {
      
    alert("fill data first");

    }
    
  };

  return (
    <MDBContainer fluid>
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
          height: "250px",
          width: "100%",
          size: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <form
        method="POST"
        className="mx-5 mb-5 p-5 shadow-10"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          backgroundColor: "#c9cbcc",
          borderRadius: "10px",
          boxShadow:"10px 10px 20px 2px"
        }}
      >
        <img className="p-4 text-center" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uMtEkAj6T3TsRjXlr6E5uU5pXhX0Vdr2pg&usqp=CAU"}  alt="..." style={{backgroundRepeat:'no-repeat',width:"100%", size:"100%",zIndex:0}}/>
          <h2 className="fw-bold mb-5" style={{color:"black"}}>Sign up now</h2>

          <MDBRow>
            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                name="Firstname"
                onChange={getUserData}
                value={user.Firstname}
                placeholder="First name"
                id="form1"
                type="text"
                required
                style={{borderColor:"yellow"}}
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                name="Lastname"
                onChange={getUserData}
                value={user.Lastname}
                placeholder="Last name"
                id="form1"
                type="text"
                required
                style={{borderColor:"yellow"}}
              />
            </MDBCol>
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            name="Email"
            onChange={getUserData}
            value={user.Email}
            placeholder="Email"
            id="form1"
            type="email"
            required
            style={{borderColor:"yellow"}}
          />
          <MDBInput
            wrapperClass="mb-4"
            name="Password"
            onChange={getUserData}
            value={user.Password}
            placeholder="Password"
            id="form1"
            type="password"
            required
            style={{borderColor:"yellow"}}
          />

          <button  onClick={postData} style={{borderColor:"yellow" , backgroundColor:"gray"}}>
            Submit
          </button>

          <div className="text-center">
            {/* <p>or sign up with:</p> */}

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        {/* </img> */}
      </form>
    </MDBContainer>
  );
}

export default App;
