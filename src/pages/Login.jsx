import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/operations';


const initialValue = {
  email: '',
  password: '',
};

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }, action) => {
    const res = await dispatch(
      logIn({
        email,
        password,
      })
    );

    if (res.meta.requestStatus === 'rejected') {
      alert('User not found, check email or password');
    } else if (res.meta.requestStatus === 'fulfilled') {
      navigate('/', { replace: true });
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            <p>Email</p>
            <Field className={'input'} type="email" name="email" />
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

          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => {
              navigate('/registration', { replace: true });
            }}
          >
            SignUp
          </button>
        </Form>
      </Formik>
    </>
  );
};
