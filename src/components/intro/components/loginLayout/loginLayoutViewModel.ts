import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { setLogin, setName } from "../../../../app/userInfo";

export const LoginLayoutViewModel = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    reporter: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setName({ credentials }));
    dispatch(setLogin({ isLoggedIn: true }));
    history.push("/app/dashboard");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return {
    handleChange,
    handleSubmit,
    credentials,
  };
};
