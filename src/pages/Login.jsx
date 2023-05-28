import { Box, Center } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/operations';
import css from './style.module.css'

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
      <Center as="section" bg="gray.100" h="100vh">
         <Box maxW="420px" bg="white" p="6">
      <h1>Hello</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label className={css.label}>
            <p>Email</p>
            <Field className={'input'} type="email" name="email" />
            <ErrorMessage
              component="p"
              name="email"
            />
          </label>
          <label className={css.label}>
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
          </Box>
      </Center>
    </>
      
  );
};
