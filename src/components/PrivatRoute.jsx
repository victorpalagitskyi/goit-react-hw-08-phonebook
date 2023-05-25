import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { selectIsLogIn } from "redux/selectors"


const PrivateRoute = ({ children }) => {
	const isAuth = useSelector(selectIsLogIn)
	const location = useLocation()

	return isAuth ? children : <Navigate to='/login' state={location} />
}

export default PrivateRoute