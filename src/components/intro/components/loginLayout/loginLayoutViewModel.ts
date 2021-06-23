import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
          console.log(`\nFailure!`, response);
          throw new Error("Failed");
        }
        console.log(`\nSuccess!`, response);
        return response.json();
      })
      .then(({ data }) => {
        const { login } = data;
        console.log(`\nlogin`, login);

        if (login.token) {
          dispatch(setName({ credentials }));
          dispatch(
            setLogin({
              isLoggedIn: {
                userId: login.userId,
                status: true,
                token: login.token,
              },
            })
          );
          history.push("/app/dashboard");
        }
      })
      .catch((err) => {
        console.log(`\nError Signing In: -->`, err);
      });
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
