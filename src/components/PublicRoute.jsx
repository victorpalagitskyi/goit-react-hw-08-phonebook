import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { selectIsLogIn } from "redux/selectors"

const PublicRoute = ({ children }) => {
	const isAuth = useSelector(selectIsLogIn)
	const location = useLocation()

	return !isAuth ? (
		children
	) : (
		<Navigate to={location.state ? location.state : '/'} />
	)
} 
export default PublicRoute