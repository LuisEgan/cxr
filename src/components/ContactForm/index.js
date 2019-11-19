import React from "react";
import { Formik, Form, Field } from "formik";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./styles.scss";
import Button from "../Button";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#371a9f !important",
    },
    "& label.MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#371a9f",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#371a9f",
      },
    },
  },
})(TextField);

const ContactForm = props => {
  return (
    <div id="contact-form-container">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={values => {
          const errors = {};

          for (let value in values) {
            if (!values[value]) {
              errors[value] = "Required";
            }
          }

          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="name">
              {({ field, meta }) => {
                return (
                  <CssTextField
                    error={meta.touched && meta.error}
                    label="Nombre"
                    margin="normal"
                    variant="outlined"
                    {...field}
                  />
                );
              }}
            </Field>

            <Field name="email">
              {({ field, meta }) => (
                <CssTextField
                  error={meta.touched && meta.error}
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  {...field}
                />
              )}
            </Field>

            <Field name="message">
              {({ field, meta }) => (
                <CssTextField
                  error={meta.touched && meta.error}
                  label="Mensaje"
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows="4"
                  {...field}
                />
              )}
            </Field>

            <button type="submit" disabled={isSubmitting}>
              <Button text={"Contactar"} />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
