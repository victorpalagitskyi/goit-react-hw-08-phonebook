import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/operations';

const initialValue = {
  name: '',
  email: '',
  password: '',
};


export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (
    { name, email, password },
    action
  ) => {
    dispatch(register({ name, email, password }));
    navigate('/', { replace: true });
    action.resetForm();
  };

  return (
    <>
      <h1>SignUp Form</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            <p>Name</p>
            <Field type="text" name="name" />
            <ErrorMessage component="p"  name="name" />
          </label>

          <label >
            <p>Email</p>
            <Field type="email" name="email" />
            <ErrorMessage
              component="p"
              name="email"
            />
          </label>

          <label>
            <p>Password</p>
            <Field type="password" name="password" />
            <ErrorMessage
              component="p"
              name="password"
            />
          </label>
          <button type="submit">Registration</button>
          <button
            type="button"
            onClick={() => {
              navigate('/login', { replace: true });
            }}
          >
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};
