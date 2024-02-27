export const logout = (navigate) => {
    localStorage.removeItem('token')
    navigate("/sign-in")
}
