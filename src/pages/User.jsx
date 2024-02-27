import { useState, useEffect } from 'react';
import Account from "../components/Account"
import { useNavigate } from 'react-router-dom';

const User = () => {

    const navigate = useNavigate()

    const goSignIn = () => {
        navigate("/sign-in")
    }

    const userSignedIn = localStorage.getItem("token")

    if (!userSignedIn) {
        return <>
            <main className="main bg-dark">
                <div className="header">
                    <h1>You are not connected.</h1>
                    <button className="edit-button" onClick={(e) => goSignIn()}>Sign in now</button>
                </div>
            </main>
        </>
    }

    return <>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{} {}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account id="all" />
        </main>
    </>
}

export default User
