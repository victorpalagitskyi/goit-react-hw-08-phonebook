import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { register } from "redux/operation"

const LoginPage = () => {
    const dispatch = useDispatch()
    
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(
            register({
                name:e.target.elements.name.value,
				email: e.target.elements.email.value,
				password: e.target.elements.password.value,
			})
		)
	}
	return (
		<>
			<div className='container'>
				<Link to='/' className='btn btn-success mt-5'>
					Go Home
				</Link>
			</div>
			<div
				className='card position-absolute top-50 start-50 translate-middle p-2'
				style={{ minWidth: '350px' }}
			>
				<h1 className='text-center'>Login</h1>

				<form onSubmit={handleSubmit}>
					<div className='mb-3'>
						<label
							htmlFor='exampleInputEmail1'
							className='form-label'
						>
							Email address
                        </label>
                        <input
							name='name'
							type='name'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
						/>
						<input
							name='email'
							type='email'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
						/>
						<div id='emailHelp' className='form-text'>
							We'll never share your email with anyone else.
						</div>
					</div>
					<div className='mb-3'>
						<label
							htmlFor='exampleInputPassword1'
							className='form-label'
						>
							Password
						</label>
						<input
							name='password'
							type='password'
							className='form-control'
							id='exampleInputPassword1'
						/>
					</div>
					<button type='submit' className='btn btn-primary'>
						Login
					</button>
				</form>
			</div>
		</>
	)
}

export default LoginPage