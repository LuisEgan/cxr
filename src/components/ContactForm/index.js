import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./styles.scss";
import Button from "../Button";
import { sendEmail } from "../../utils/email";

const Input = withStyles({
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

const validate = values => {
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
};

const sendContactEmail = async (
  values,
  { setSubmitting },
  setFeedbackMessage
) => {
  try {
    const { email, name, message } = values;

    const res = await sendEmail({
      from: "no-reply@cleverit.cl",
      to: [
        { email: "l@cleverit.cl", name: "L" },
        { email: "k@cleverit.cl", name: "K" },
      ],
      html: `EL RISAS - La persona de nombre ${name} e email ${email} escribió el siguiente mensaje: <br/> ${message}`,
      text: `EL BROMAS - La persona de nombre ${name} e email ${email} escribió el siguiente mensaje: <br/> ${message}`,
      subject: "Contacto XR",
    });

    const {
      data: { error_code, error, message: resMessage },
    } = res;
    if (error_code) throw new Error(resMessage || error || error_code);

    setSubmitting(false);
    setFeedbackMessage("Nos pondremos en contacto contigo muy pronto 😎");
  } catch (error) {
    console.error("error @onSubmit: ", error);
    setFeedbackMessage("Houston.. tuvimos un problema 😵");
  }
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    loadReCaptcha("6LdghsYUAAAAAFX-4juh4moQqND7t2t-bh1JzK6t");
  }, []);

  return (
    <div id="contact-form-container">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={validate}
        onSubmit={async (values, e) => {
          setLoading(true);
          await sendContactEmail(values, e, setFeedbackMessage);
          setLoading(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="name">
              {({ field, meta }) => {
                return (
                  <Input
                    {...field}
                    error={meta.touched && meta.error}
                    label="Nombre"
                    margin="normal"
                    variant="outlined"
                  />
                );
              }}
            </Field>

            <Field name="email">
              {({ field, meta }) => (
                <Input
                  {...field}
                  error={meta.touched && meta.error}
                  label="Email"
                  margin="normal"
                  variant="outlined"
                />
              )}
            </Field>

            <Field name="message">
              {({ field, meta }) => (
                <Input
                  {...field}
                  error={meta.touched && meta.error}
                  label="Mensaje"
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows="4"
                />
              )}
            </Field>

            <ReCaptcha
              sitekey="6LdghsYUAAAAAFX-4juh4moQqND7t2t-bh1JzK6t"
              action="homepage"
              verifyCallback={e => console.log(e)}
            />

            <div>
              <button type="submit" disabled={isSubmitting || loading}>
                <Button text={loading ? "Loading..." : "Contactar"} />
              </button>
              <span>{feedbackMessage}</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
