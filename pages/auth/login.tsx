import React, { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoginFunc, RegisterFunc } from "./../store/actions/auth.actions";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [formType, setFormType] = useState("login");
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  function onClickFormType() {
    if (formType == "login") {
      setFormType("register");
    } else {
      setFormType("login");
    }
  }
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      beniHatırla: true,
    },
    onSubmit: () => {
      dispatch(LoginFunc(loginForm.values) as any);
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .max(20, "Password is too long - should be 20 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .matches(/[0-9]/, "Password can only contain number letters."),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
    }),
  });
  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      name: "",
      phone: "",
    },
    onSubmit: () => {
      dispatch(
        RegisterFunc({
          email: registerForm.values.email,
          password: registerForm.values.password,
          name: registerForm.values.name,
        }) as any
      );
      setMessage("Kayıt olundu");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .max(20, "Password is too long - should be 20 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .matches(/[0-9]/, "Password can only contain number letters."),
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      name: yup.string().required("Name is required"),
    }),
  });
  return (
    <>
      <div className="row">
        {submitted ? <h4 className="text-success">{message}</h4> : <></>}
      </div>
      {formType == "login" ? (
        <>
          <div className="row">
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-10">
              <form className="w-50" onSubmit={loginForm.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="example@mail.com"
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                  />
                  {loginForm.errors.email && (
                    <div className="text-danger">{loginForm.errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder=""
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                  />
                  {loginForm.errors.password && (
                    <div className="text-danger">
                      {loginForm.errors.password}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Beni Hatırla
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={() =>
                      loginForm.setValues({
                        ...loginForm.values,
                        beniHatırla: !loginForm.values.beniHatırla,
                      })
                    }
                    id="beniHatırla"
                    checked={loginForm.values.beniHatırla}
                  />
                </div>
                <button className="btn btn-info mr-1" type="submit">
                  Login
                </button>
                <a onClick={() => onClickFormType()} className="btn btn-link">
                  Hesabım Yok
                </a>
              </form>
            </div>
            <div className="col-12 col-md-1"></div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-10">
              <form className="w-50" onSubmit={registerForm.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="example@mail.com"
                    value={registerForm.values.email}
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                  />
                  {registerForm.errors.email && (
                    <div className="text-danger">
                      {registerForm.errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="example"
                    value={registerForm.values.name}
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                  />
                  {registerForm.errors.name && (
                    <div className="text-danger">
                      {registerForm.errors.name}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder=""
                    value={registerForm.values.password}
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                  />
                  {registerForm.errors.password && (
                    <div className="text-danger">
                      {registerForm.errors.password}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Password Confirmation
                  </label>
                  <input
                    type="password"
                    name="passwordConfirmation"
                    className="form-control"
                    placeholder=""
                    value={registerForm.values.passwordConfirmation}
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                  />
                  {registerForm.errors.passwordConfirmation && (
                    <div className="text-danger">
                      {registerForm.errors.passwordConfirmation}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    placeholder=""
                    value={registerForm.values.phone}
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                  />
                  {registerForm.errors.phone && (
                    <div className="text-danger">
                      {registerForm.errors.phone}
                    </div>
                  )}
                </div>
                <button className="btn btn-info" type="submit">
                  Register
                </button>
                <a onClick={() => onClickFormType()} className="btn btn-link">
                  Hesabım var
                </a>
              </form>
            </div>
            <div className="col-12 col-md-1"></div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
