import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { logOut } from 'redux/operations';

export const Home = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const nameUser = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  if (isLogin) {
    return (
      <section>
        <div>
          <h1>Wellcome to Conntact Application {nameUser.name}  </h1>
          <p>Plaese select...</p>
          <div>
            <button
              onClick={() => navigate('/contacts', { replace: true })}
            >
              Go to Contacts
            </button>
            <button
              onClick={handleLogout}
            >
              LogOut
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section>
        <div>
          <h1>Welcome to contact book app</h1>
          <div >
            <button
              onClick={() => navigate('/registration', { replace: true })}
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate('/login', { replace: true })}
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
