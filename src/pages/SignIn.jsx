import { NavLink, useNavigate } from "react-router-dom"
//import { userLogin } from "../services/api"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { userLogin, getUserInfo } from "../actions/user.action"

const SignIn = () => {
    const navigate = useNavigate()
    const form = useRef()
    const dispatch = useDispatch()

    const handleForm = async (e) => {
        e.preventDefault()

        const loginData = {
            email: form.current[0].value,
            password: form.current[1].value
        }

        dispatch(userLogin(loginData, navigate))
    }

    return <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form ref={form} onSubmit={e => handleForm(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/*PLACEHOLDER DUE TO STATIC SITE*/}
                    {/* <NavLink className="sign-in-button" to="../user">Sign In</NavLink> */}
                    {/*SHOULD BE THE BUTTON BELOW*/}
                    <button className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    </>
}

export default SignIn