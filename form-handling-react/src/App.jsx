import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';



function App() {
  return (
    <div>
      <h1>Controlled Registration Form</h1>
      <RegistrationForm />
      <h1>Formik Registration Form</h1>
      <FormikForm />

    </div>
  );
}

export default App;