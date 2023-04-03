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
    console.log(data);

    const response = await signin({
      email: data.email,
      password: data.password,
    });
    console.log("response", response);

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

      navigate(`/dashboard`);
    } else {
      alert(response.error.response.data.message);
    }

    // setState({
    //   ...state,
    //   invalidEmail: false,
    //   invalidPassword: false,
    // });
  };

  return (
    <div className="login-page-container">
      <div className="form-login-page-container">
        <h1>CMS Shoes Shop</h1>
        <Form
          propsData={loginFormProps}
          abilitatePictures={false}
          buttonTitle={t("login")}
          isFromLogin={true}
          onSubmit={onSubmit}
          buttonColor="primary"
        />
      </div>
    </div>
  );
}

export default Login;
