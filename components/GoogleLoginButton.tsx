'use client'
import { signIn } from "next-auth/react";

const GoogleLoginButton = () =>{
    const signInHandler = () => {
        signIn('google', {callbackUrl: '/dashboard'});
      }
 return(
    <div className="text-3xl flex justify-center flex-col">
        <p className="text-center">
        Login With Google
        </p>
        <button className="text-center" onClick={signInHandler} >
            Login
        </button>
    </div>
 );   
}
export default GoogleLoginButton;