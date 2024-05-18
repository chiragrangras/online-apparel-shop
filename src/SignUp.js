import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";

function SignUp() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let [nameBlur, setNameBlur] = useState(false);
  let [emailBlur, setEmailBlur] = useState(false);
  let [passwordBlur, setPasswordBlur] = useState(false);

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let isValidationError = false;
    let inputData = { name, email, password };
    if (!inputData.name) {
      // console.log("Entered in branch");
      setNameBlur(true);
      isValidationError = true;
    }

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

    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        const userList = response.data;
        const userFound = userList.find(
          (user) => user.email === inputData.email
        );
        if (userFound) {
          alert(
            `User with email '${inputData.email}' already exists. Please use a different email address.`
          );
        } else {
          axios
            .post("http://localhost:4000/users", inputData, {
              headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
              alert("Sign Up Successful!");
              navigate("/sign-in");
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // fetch("http://localhost:4000/users")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((userList) => {
    //     const userFound = userList.find((user) => user.email === inputData.email);
    //     if (userFound) {
    //       alert(
    //         `User with email '${inputData.email}' already exist. Please use different email address.`
    //       );
    //     } else {
    //       fetch("http://localhost:4000/users", {
    //         method: "post",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(inputData),
    //       }).then((res) => {
    //         if (res) {
    //           alert("Sign Up Successful!");
    //           navigate("./");
    //         }
    //       });
    //     }
    //   });
  };

  return (
    <>
      <Header />
      <div className="signup_box">
        <div className="container w-50 text-start">
          <div className="my-3">
            <h2 className="registration">Registration</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="mb-3">
                <label className="form-label">User Name :&nbsp;</label>
                <input
                  className="my-3"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                    if (e.target.value.length === 0) {
                      setNameBlur(true);
                    } else {
                      setNameBlur(false);
                    }
                  }}
                  placeholder="Enter User Name"
                />
                {nameBlur && (
                  <span className="text-danger"> * Enter User Name</span>
                )}
              </div>
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
              <button className="btn btn-dark">Register</button>
              <br />
              <Link to={"/sign-in"} className="navigate">
                Login
              </Link>
              <p className="signin_">Or, log in with your email</p>
              <div className="google_signin">
                <i className="bx bxl-google"></i> Login in With Google
              </div>
              <div className="google_signin">
                <i className="bx bxl-facebook"></i> Login in With Facebook
              </div>
              <p className="signin_">Don't have an account yet? Register</p>
              <p className="signin_">
                © 2023 Dreams Rent. All Rights Reserved.
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;