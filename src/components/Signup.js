import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function registeruser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    console.log(name + email + password);
    if (response) {
      window.location.href = "/login";
    } else {
      alert("user already exists try with other password");
    }
  }
  // const registeruser = () => {
  //     Axios({
  //       method: "POST",
  //       data: {
  //         name: name,
  //         email:email,
  //         password: password,
  //       },
  //       withCredentials: true,
  //       url: "http://localhost:3001/api/register",
  //     }).then((res) => console.log(res));
  //   };
  // async function registeruser (event){
  //     event.preventDefault();
  //     const response=await fetch('http://localhost:3001/api/register',{
  //         method:"POST",
  //         headers:{
  //             'Content-Type':'application/json',
  //         },
  //         body:JSON.stringify({
  //             name,
  //             email,
  //             password,

  //         })
  //     })
  //     const data=await response.json();
  //     if(data.success){
  //         window.location.href='/login'
  //     }
  //     else{
  //         alert('not valid')

  //     }
  // }

  return (
    <div className="bg">
      <img src="./cloudy-day-1.svg" alt="cloud-svg" className="cloud-svg" />
      <div className="form">
        <div>
          <span className="Welcome">Welcome to Weather forecasting app</span>
          <img src="../assets/hot.svg" alt="" />
        </div>
        <h1 className="heading ">Sign Up</h1>
        <form onSubmit={registeruser} className="mt-6">
          <div className="mb-2">
            <label for="lname" className="">
              Name
            </label>
            <input
              name="lname"
              value={name}
              type="text"
              onChange={(e) => setname(e.target.value)}
              className=""
            />
          </div>
          <div className="mb-2">
            <label for="email" className="">
              Email
            </label>
            <input
              name="email"
              value={email}
              type="email"
              onChange={(e) => setemail(e.target.value)}
              className=""
            />
          </div>
          <div className="mb-2">
            <label for="password">Password</label>
            <input
              name="password"
              value={password}
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          {/* <a href="#"></a> */}
          <div className="mt-6">
            <button>Register</button>
          </div>
        </form>

        <p className="account">
          {" "}
          Already have an account?{" "}
          <Link className="sign-up-text" Link to={"/login"}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
