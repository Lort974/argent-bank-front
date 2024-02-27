import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root"
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import PageError from "../pages/PageError"
import User from "../pages/User"
import Footer from "../components/Footer"
import Header from "../components/Header"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <><Header /><PageError /><Footer /></>,
        children: [
            {
                path: "",
                element : <Home />
            },
            {
                path: "sign-in",
                element: <SignIn />
            },
            {
                path: "profile",
                element: <User />

            }

        ]
    }
])

export default router