import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Signup.css";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = ({ onLoginClick }) => {
  return (
    <div className="right-side">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => console.log("Signup values:", values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <Field type="text" name="fullName" placeholder="Full Name" />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form-group">
              <Field type="email" name="email" placeholder="Email address" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form-group">
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form-group">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </div>
            <button
              type="submit"
              className="signup-button"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <p className="signin-text">
        Already have an account?{" "}
        <button onClick={onLoginClick} className="toggle-button">
          Sign in →
        </button>
      </p>
    </div>
  );
};

export default Signup;
