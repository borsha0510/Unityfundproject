import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./DonationForm.css";
const DonationForm = () => {
  return (
    <div className="donation-container">
      <h2>Donate Now</h2>
      <Formik
        initialValues={{ amount: "", name: "", email: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          amount: Yup.number()
            .min(5, "Minimum donation is ৳5")
            .required("Donation amount is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          alert(`Thank you ${values.name} for donating $${values.amount}!`);
          resetForm();
        }}
      >
        <Form className="donation-form">
          <div>
            <label>Your Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label>Amount (৳)</label>
            <Field type="number" name="amount" />
            <ErrorMessage name="amount" component="div" className="error" />
          </div>

          <button type="submit">Donate</button>
        </Form>
      </Formik>
    </div>
  );
};

export default DonationForm;
