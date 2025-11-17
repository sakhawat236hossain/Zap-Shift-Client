import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../../Hooks/UseAuth';

const SocialLogin = () => {
const { googleLogin } = UseAuth();
const handleGoogleLogin = () => {
    // Handle Google Login Logic Here
     googleLogin()
     .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
     })
     .catch((error) => {
        console.log(error.message);
     });
}

    return (
        <div>
                  <div className="divider">OR</div>
            
                    {/* Google Login */}
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full rounded-lg">
                     <span><FcGoogle /> </span>Continue with Google
                    </button>
        </div>
    );
};

export default SocialLogin;