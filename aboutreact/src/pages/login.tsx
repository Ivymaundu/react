import { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { setAuthentication } from '../store/authentications';
import axios from 'axios';
import '../login.css';
import { useNavigate }  from "react-router-dom";



function Login(){
    const navigate=useNavigate()

    type AuthType = {
        username:string;
        password: string
    }
    type ResponseData={
        access_token:string,
        message:string,
        user_id:string

    }

   
   

    const [form, setForm] = useState({
        username:"",
        password:""
    });

    
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const handleSubmit =async(e:any) =>{
        e.preventDefault();
        // localStorage.setItem('isLoggedIn', 'true');

        // setIsLoggedIn(true);

        const formContent:AuthType = {
            username :form.username,
            password:form.password
        };



        try {
            const apiUrl='http://127.0.0.1:5000/login';
            const response = await axios.post(apiUrl,
                {...formContent}, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
            
            console.log('response', response.data)

            const responseData: ResponseData={
                ...response.data
            }
            // setIsLoggedIn(true);
            console.log("responseData.......",responseData)

            localStorage.setItem("token ",responseData.access_token)
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
            navigate("/products")

        } catch (error) {
            console.log('error...',error)
        }
        
        // dispatch(setAuthentication(outCome));

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    return(
        <div className='login-container'>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <p style={{'color':'white','marginLeft':'20%'}}>...Login to access acount</p>
                <input type="text"  name="username" placeholder="name"
                value={form.username}
                onChange={handleChange} required  style={{'border':'2px solid black','padding':'10px','marginTop':'10%','marginLeft':'32%'}}/><br></br>
                <input type="password" name="password" placeholder="password"
                value={form.password}
                onChange={handleChange} style={{'border':'2px solid black','padding':'10px','marginTop':'8%','marginLeft':'32%'}}/><br></br>
                
                <button type="submit" className="login-button">Submit</button>
            </form>
        </div>
    )
}

export default Login;