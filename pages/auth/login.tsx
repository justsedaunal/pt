import Head from "next/head";
import { useState } from "react";
import Layout from "../../layout/layout";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {
  const [activeRoute, setActiveRoute] = useState("login");
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      beniHatirla: false,
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 8 chars minimum.") .max(20, "Password is too short - should be 20 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.").matches(/[0-9]/, "Password can only contain number letters."),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });
  function onClickDegister() {
    if (activeRoute == "login") {
      setActiveRoute("register");
    } else {
      setActiveRoute("login");
    }
  }
  return (
    <Layout>
      <Head>
        <title>login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10 items-center">
        <div className="title">
          <h2 className="text-black text-start font-bold">Hello!</h2>
          <p className="text-neutral-800">Sign Up To Get Started</p>
        </div>

        {activeRoute == "login" ? (
          <form
            className="flex flex-col gap-5"
            onSubmit={loginForm.handleSubmit}
          >
            <div className="input-group">
              <input
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
                className="rounded-3xl w-80 h-10 bg-white border border-slate-200"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              {loginForm.errors.email && (
                <div style={{color:"red"}} className="text-danger">{loginForm.errors.email}</div>
              )}
            </div>

            <div className="input-group">
              <input
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
                className="rounded-3xl w-80 h-10 bg-white border border-slate-200"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            {loginForm.errors.password && (
                <div style={{color:"red"}} className="text-danger">{loginForm.errors.password}</div>
              )}
            <div className="input-button">
              <button type="submit" className="bg-btn w-80 h-10 rounded-3xl">
                Login
              </button>
              <button
                onClick={() => onClickDegister()}
                type="button"
                className="bg-btn w-80 h-10 rounded-3xl"
              >
                Hesabım Yok
              </button>
            </div>
          </form>
        ) : (
          <form className="flex flex-col gap-5">
            <div className="input-group">
              <input
                className="rounded-3xl w-80 h-10 bg-white border border-slate-200"
                type="text"
                name="name"
                placeholder="Full Name"
              />
            </div>

            <div className="input-group">
              <input
                className="rounded-3xl w-80 h-10 bg-white border border-slate-200"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>

            <div className="input-group">
              <input
                className="rounded-3xl w-80 h-10 bg-white border border-slate-200"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="input-button">
              <button type="submit" className="bg-btn w-80 h-10 rounded-3xl">
                Register
              </button>
              <button
                onClick={() => onClickDegister()}
                type="button"
                className="bg-btn w-80 h-10 rounded-3xl"
              >
                Hesabım var
              </button>
            </div>
          </form>
        )}
      </section>
    </Layout>
  );
}
