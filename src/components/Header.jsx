import { NavLink, useNavigate } from "react-router-dom"
import argentBankLogo from "../assets/images/argentBankLogo.png"
import { logout } from "../services/logout"
import { useSelector } from "react-redux"

const Header = () => {
    const userSignedIn = localStorage.getItem("token")
    const navigate = useNavigate

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
                    {
                        userSignedIn ? 
                        <>
                            <NavLink className="main-nav-item" to="user">
                                <i className="fa fa-user-circle"></i> My profile
                            </NavLink>
                            <NavLink onClick={(e) => logout(navigate)} className="main-nav-item" to="/">
                                <i className="fa fa-sign-out"></i> Sign Out
                            </NavLink>
                        </>
                        :
                        <NavLink className="main-nav-item" to="sign-in">
                            <i className="fa fa-user-circle"></i> Sign In
                        </NavLink>
                    }
                </div>
            </nav>
        </header>
    </>
}

export default Header