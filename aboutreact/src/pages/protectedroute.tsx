import React from 'react';
import { Route, useNavigate} from 'react-router-dom';


interface ProtectedRouteProps {
    element: any;
    path: string;
  }
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({  element:Element ,...rest ,path,}) => {
    const navigate=useNavigate()

    const token = localStorage.getItem('token');
    if(token){
        return(
            <Route {...rest}  path={path} element={ <Element {...rest} />}/>
            )
    }
    else {
       return( navigate('/login', { replace: true }));
        // return null;
    }
     
    // const AuthRoute: React.FC<propTypess> = (props) => {
    //     const { ...routeProps } = props;
      
    //     return (
    //       // your logic rtemains
    //     );
    //   };
    //   props.route
    //   props.elemnt
        
       
}

export default ProtectedRoute;