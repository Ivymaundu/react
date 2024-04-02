import { useState } from 'react';
import { useDispatch } from "react-redux";
import { setAuthentication } from '../store/authentications';
import axios from 'axios'

function Login(){

    type AuthType = {
        username:string;
        password: string
    }
    type ResponseData={
        access_token:string,
        message:string,
        user_id:string

    }

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username:"",
        password:""
    });

   

    const handleSubmit =async(e:any) =>{
        e.preventDefault();
        
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
            console.log("responseData.......",responseData)
            localStorage.setItem("token ",responseData.access_token)
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
        <div>
            <form className="text-black" onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" className="font-bold border border-black rounded-lg m-4 p-4" name="username" placeholder="name"
                value={form.username}
                onChange={handleChange} required/>
                <input type="password" className="font-bold border border-black rounded-lg m-4 p-4"name="password" placeholder="password"
                value={form.password}
                onChange={handleChange} />
                <button type="submit" className="border-blue-900 p-5 m-5">Submit</button>
            </form>
        </div>
    )
}

export default Login;