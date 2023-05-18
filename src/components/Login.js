import { useState } from "react";

import "./Form.css";
export default function Login() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  async function loginuser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    if (response) {
      const data = await response.json();

      if (data.success === true) {
        localStorage.setItem("token", data.token);
      }

      console.log(data.success);
      console.log(data.token);
      localStorage.setItem("name", data.user.name);
      window.location.href = "/home";
    } else {
      alert("wrong password or username");
    }
  }

  // const loginuser= () => {
  //     Axios({
  //       method: "POST",
  //       data: {
  //         name: name,
  //         password: password,
  //       },
  //       withCredentials: true,
  //       url: "http://localhost:3001/api/login",
  //     }).then((res) => console.log(res));
  //   };
  // async function loginuser (event){
  //     event.preventDefault();
  //     const response=await fetch('http://localhost:3001/api/login',{
  //         method:"POST",
  //         headers:{
  //             'Content-Type':'application/json',
  //         },
  //         body:JSON.stringify({

  //             email,
  //             password,

  //         })
  //     })
  //     const data=await response.json();
  //     if(data.user){
  //         alert('login successfull')
  //         window.location.href='/'
  //     }
  //     else{
  //         alert('login unsuccessfull')
  //         window.location.href='/login'
  //     }
  // }
  return (
    <div className="bg">
      <img src="./cloudy.svg" alt="cloud-svg" className="cloudy" />
      <div className="form">
        <div>
          <span className="Welcome">Welcome to Weather Forecasting app</span>
          <img className=" svg" src="../assets/hot.svg" alt="" />
        </div>
        <h1 className="heading">Sign in</h1>
        <form onSubmit={loginuser} className="mt-6">
          <div className="mb-2">
            <label for="name">name</label>
            <input
              name="name"
              value={name}
              type="text"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label for="password" className="">
              Password
            </label>
            <input
              name="password"
              value={password}
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              className=""
            />
          </div>
          {/* <a href="#" className=""></a> */}
          <div className="">
            <button className="">Log in</button>
          </div>
        </form>

        <p className="account">
          {" "}
          Don't have an account?{" "}
          <a href="#sds" className="sign-up-text">
            Sign up
          </a>
          {/* <button className="sign-up-text"> 
            Sign up
          </button> */}
        </p>
      </div>
    </div>
  );
}
