import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 karakter")
    .max(50, "Maksimum 50 karakter")
    .required("Zorunlu alan"),
  number: Yup.string()
    .min(3, "Minimum 3 karakter")
    .max(50, "Maksimum 50 karakter")
    .required("Zorunlu alan"),
});

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div>
          <label>Name:</label>
          <Field name="name" />
          <ErrorMessage component="div" name="name" className={styles.error} />
        </div>

        <div>
          <label>Number:</label>
          <Field name="number" />
          <ErrorMessage
            component="div"
            name="number"
            className={styles.error}
          />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
