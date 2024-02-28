import { useState, useEffect, useRef } from 'react';
import Account from "../components/Account"
import { useNavigate } from 'react-router-dom';
import { getUserInfo, updateUserInfo } from '../actions/user.action';
import { useSelector } from 'react-redux';
import { store } from '..';
import axios from 'axios';


const User = () => {
    // Préparer la page dans le cas où l'utilisateur n'est pas connecté
    const navigate = useNavigate()

    const goSignIn = () => {
        navigate("/sign-in")
    }

    // Récupérer le token dans le store
    const token = useSelector((state) => state.loginReducer)

    // lancer l'action pour récupérer les infos de l'utilisateur connecté
    useEffect(() => {
        if (token.token) {
            store.dispatch(getUserInfo(token.token))
        }
    }, [token.token])
    
    // Récupérer les infos de l'utilisateur connecté dans le store
    const user = useSelector((state) => state.userReducer)

    // Préparer l'édition des informations de l'utilisateur connecté
    const [editToggle, setEditToggle] = useState(false)

    const form = useRef()

    const handleEdit = (e) => {
        e.preventDefault()

        const editData = {
            firstName: form.current[0].value,
            lastName: form.current[1].value
        }

        store.dispatch(updateUserInfo(editData, token.token))
        setEditToggle(!editToggle)
    }

    // Si pas de token, alors pas de connection en cours, alors page d'erreur :
    if (!token.token) {
        return <>
            <main className="main bg-dark">
                <div className="header">
                    <h1>You are not signed in</h1>
                    <button className="edit-button" onClick={(e) => goSignIn()}>Sign in now</button>
                </div>
            </main>
        </>
    }

    // Vérifier que la base de données a enregistré les nouvelles userinfos
    // axios({
    //     method: "post",
    //     url: "http://localhost:3001/api/v1/user/profile",
    //     headers: {
    //         Authorization: "Bearer "+token.token
    //     }
    // })
    // .then((res) => {
    //     console.log(res)
    // })

    return <>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                {
                    editToggle ?
                    <form ref={form} className="edit-wrapper" onSubmit={(e) => handleEdit(e)}>
                        <input required type="text" id="firstname" placeholder={user.firstName} autoFocus={true} />
                        <input required type="text" id="lastname" placeholder={user.lastName} />
                        <button type="submit" className="edit-button">Save</button>
                        <button type="button" className="edit-button" onClick={() => setEditToggle(!editToggle)}>Cancel</button>
                    </form>
                    :
                    <button className="edit-button" onClick={() => setEditToggle(!editToggle)}>Edit Name</button>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account id="all" />
        </main>
    </>
}

export default User
