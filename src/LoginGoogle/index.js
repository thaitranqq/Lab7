import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';



const LoginGoogle = () => {
    const navigate = useNavigate()
    const handleSuccess = (response) => {
    //   window.location.href = '/dashboard'
    navigate(`/dashboard/${jwtDecode(response.credential).name}`)

    console.log("suc",jwtDecode(response.credential).name);
};
const handleFail = (response) => {
    
    console.log("fail",response);
};
    return (
        <div className='lg'>
            <GoogleLogin
                  onSuccess={handleSuccess}
                  onFailure={handleFail}
                />
        </div>
      );
};

export default LoginGoogle;
