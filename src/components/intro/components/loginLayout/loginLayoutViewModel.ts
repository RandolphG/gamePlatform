import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { setLogin, setName } from "../../../../app/userInfo";

export const LoginLayoutViewModel = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputType, setInputType] = useState("password");

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  /*TODO change to refs of input elements*/

  const requestBody = {
    query: `
      query  {
        login(
          userName: "${credentials.userName}",
          email: "${credentials.email}",
          password: "${credentials.password}") {
            userId
            token
            tokenExpiration
          }
      }
    `,
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`\ncredentials`, credentials);
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          console.log(`\nresponse`, response);
          throw new Error("Failed");
        }
        console.log(`\nresponse`, response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));

    // dispatch(setName({ credentials }));
    // dispatch(setLogin({ isLoggedIn: true }));
    // history.push("/app/dashboard");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

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
