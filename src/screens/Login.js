import React from "react";
import Form from "../components/hookComponents/form/Form";
import { loginFormProps } from "../utils/formUtils";
import { useTranslation } from "react-i18next";
import { getLocalStorage, setLocalStorage } from "../utils/localStorageUtils";
import { signin, getUser, getUserAuth } from "../services/servicesAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "../redux/duck/user/userDuck";

import "../styles/login/login.css";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log("Success");
    console.log(data);

    const response = await signin({
      email: data.email,
      password: data.password,
    });

    if (response.status === 200) {
      const user = await getUser(response.data.token);
      console.log("user", user);

      dispatch(
        setUserCredentials({
          name: user.data.name,
          surname: user.data.surname,
          authorities: response.data.permission,
          email: user.data.email,
          isLogged: true,
        })
      );

      setLocalStorage("token", response.data.token);
      setLocalStorage("refreshToken", response.data.refreshToken);

      navigate(`/`);
    }

    console.log(response);

    // setState({
    //   ...state,
    //   invalidEmail: false,
    //   invalidPassword: false,
    // });
  };

  return (
    <div className="flex flex-center screen-bg w-100 login-page-container">
      <Form
        propsData={loginFormProps}
        abilitatePictures={false}
        buttonTitle={t("login")}
        isFromLogin={true}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Login;
