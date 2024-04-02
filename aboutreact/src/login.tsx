import { useState } from "react";
function Login(){
    const handleSubmit=(e:any)=>{
        e.preventDefault()
    }
    return(
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="inpute your name..." />
                <input type="password" placeholder="inpute your password..." />
                <button type="submit">login</button>
            </form>
        </div>
    )
}
export default Login;