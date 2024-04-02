import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomeComponent: React.FC=()=>{

    let navigate = useNavigate();
    const handleClick = ()=>(
        navigate("/about")
    )


    return(
        <>
        <div>
            <p>Home component</p>
            <nav>
                <button onClick={handleClick}>About us</button>
            </nav>
        </div>
        </>
    )
}
export default HomeComponent;