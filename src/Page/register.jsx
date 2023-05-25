import { useDispatch } from "react-redux";
import { register} from "redux/operation";

const Registration = () => {
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();

      const user = {
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    dispatch(register(user));
  };

  return (
    <>
          <form onSubmit={handleSumbit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" />
        <label htmlFor="">Email</label>
        <input type="email" name="email" />
        <label htmlFor="">Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Registration