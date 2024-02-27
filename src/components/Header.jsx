import { NavLink, useNavigate } from "react-router-dom"
import argentBankLogo from "../assets/images/argentBankLogo.png"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserInfo } from "../actions/user.action"
import { store } from ".."
import { deleteToken } from "../actions/login.action"

const Header = () => {
    const navigate = useNavigate()

    const token = useSelector((state) => state.loginReducer)

    useEffect(() => {
        if (token.token) {
            store.dispatch(getUserInfo(token.token))
        }
    }, [token.token])
    
    const user = useSelector((state) => state.userReducer)
    
    const handleSignOut = (e) => {
        e.preventDefault()

        store.dispatch(deleteToken(navigate))
    }

    const isSignedIn = token.token ? true : false

    const navLinks = isSignedIn ?
        <>
            <NavLink className="main-nav-item" to="profile">
                <i className="fa fa-user-circle"></i> {user.firstName}
            </NavLink>
            <a className="main-nav-item" onClick={(e) => handleSignOut(e)}>
                <i className="fa fa-sign-out"></i> Sign out
            </a>
        </>
        :
        <NavLink className="main-nav-item" to="sign-in">
            <i className="fa fa-user-circle"></i> Sign In
        </NavLink>

    return <>
        <header>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    {navLinks}
                </div>
            </nav>
        </header>
    </>
}

export default Header