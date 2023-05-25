import { useNavigate } from "react-router-dom"

export const Home = () => { 
 const navigate = useNavigate()
    
    return (
        <>
            <h1>Wellcome to Conntact Application</h1>
            <p>Plaese select...</p>
            <button onClick={() => navigate('/login') }  > LogIn</button>
            <button onClick={() => navigate('/registration')}  >Registration</button>
        </>
    )
}