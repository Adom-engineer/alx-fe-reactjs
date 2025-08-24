import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log('Formik Submission:', values);
    // Simulate API call here
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="p" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}