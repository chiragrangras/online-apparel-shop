import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { UserLogin } from "./App";
import { toast } from 'react-toastify';

function SignIn() {
  const { setLoginUser } = useContext(UserLogin);
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [emailBlur, setEmailBlur] = useState(false);
  const [passwordBlur, setPasswordBlur] = useState(false);

  const navigate = useNavigate();

  const notifyLoginSuccess = (username) => {
    toast.success(`Login successful. Welcome ${username}!`, {position: "top-center"});
  }

  const notifyLoginFailure = () => {
    const content = 'Login failed. Invalid credentials, please try again.';
    const options = {position: "top-center", hideProgressBar: false};
    toast.error(content, options);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidationError = false;

    let inputData = { email, password };

    if (!inputData.email) {
      setEmailBlur(true);
      isValidationError = true;
    }

    if (!inputData.password) {
      setPasswordBlur(true);
      isValidationError = true;
    }
    if (isValidationError) {
      return;
    }
    if (validateerrors()) {
      console.log("proceed");
      axios
        .get("http://localhost:4000/users")
        .then((response) => {
          const userList = response.data;
          console.log(userList);
          const userFound = userList.find(
            (user) => user.email === inputData.email
          );
          console.log(`User found: ${userFound}`);
          if (userFound?.password === inputData.password) {
            console.log("Login successful");
            notifyLoginSuccess(userFound.name);
            setLoginUser(userFound.name);
            localStorage.setItem("loggedInUser", userFound.name);
          } else {
            notifyLoginFailure();
            console.log("Login failed. Invalid credentials");
          }
          navigate("/");
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });

      // fetch("http://localhost:4000/users")
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((userList) => {
      //     console.log(userList);
      //     const userFound = userList.find(
      //       (user) => user.email === inputData.email
      //     );
      //     console.log(`User found: ${userFound}`);
      //     if (userFound?.password === inputData.password) {
      //       console.log("Login succesfull");
      //       setLoginUser(userFound.name);
      //     } else {
      //       console.log("Login failed. Invalid credentials");
      //     }
      //     navigate("/");
      //   });
    }
  };

  let validateerrors = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      
    }
    if (password === "" || password === null) {
      result = false;
      
    }
    return result;
  };
  return (
    <>
      <Header />
      <div className="signIn_box">
        <div className="container w-50 text-start">
          <div className="my-3">
            <h2 className="login">Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="mb-3">
                <label className="form-label">User Email :&nbsp;</label>
                <input
                  className="my-3"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                    if (e.target.value.length === 0) {
                      setEmailBlur(true);
                    } else {
                      setEmailBlur(false);
                    }
                  }}
                  placeholder="Enter User Email"
                />
                {emailBlur && (
                  <span className="text-danger"> * Enter User Email</span>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Password :&nbsp;</label>
                <input
                  className="my-3"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                    if (e.target.value.length === 0) {
                      setPasswordBlur(true);
                    } else {
                      setPasswordBlur(false);
                    }
                  }}
                  placeholder="Enter User Password"
                />
                {passwordBlur && (
                  <span className="text-danger"> * Enter User Password</span>
                )}
              </div>
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignIn;
