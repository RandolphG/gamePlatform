import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const SignUpViewModel = () => {
  const [inputType, setInputType] = useState("password");

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  /*TODO change to refs of input elements*/

  const requestBody = {
    query: `
      mutation  {
        createUser(userInput: {
          userName: "${credentials.username}",
          email: "${credentials.email}",
          password: "${credentials.password}"}) {
            _id
            userName
            email
          }
      }
    `,
  };

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log(`test`, credentials);
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error("Failed");
        }
        console.log(`response`, response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  function showPassword() {
    setInputType(inputType === "text" ? "password" : "text");
  }

  return {
    credentials,
    inputType,
    handleChange,
    handleSubmit,
    showPassword,
  };
};
