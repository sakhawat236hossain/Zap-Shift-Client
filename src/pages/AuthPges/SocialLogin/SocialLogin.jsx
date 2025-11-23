import React from "react";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const SocialLogin = () => {
  const { googleLogin } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleGoogleLogin = () => {
    // Handle Google Login Logic Here
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location?.state || "/");
        const userInfo = {
          email: result.user.email,
          displayName: result.user.name,
          photoURL: result.user.photoURL,
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          console.log("user dat has been stored", res.data);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full rounded-lg"
      >
        <span>
          <FcGoogle />{" "}
        </span>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
