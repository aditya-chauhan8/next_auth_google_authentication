'use client'
import { signOut } from "next-auth/react";

const Dashboard = () => {

    const signOutHandler = () => {
        signOut();
    }
    return(
        <div>
            Welcome back to dashboard..
            <button className="border border-blue-700" onClick={signOutHandler}>
                SignOut
            </button>
        </div>
    );
}

export default Dashboard;