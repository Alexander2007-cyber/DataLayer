import React, { useEffect } from 'react'
import { auth, provider } from './firebase';
import { useStateValue } from './stateProvider'

function Login() {
    const [state, dispatch] = useStateValue();
    const login = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))

    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            // console.log(user)
            if(user){
                dispatch({
                    type: "userAuth",
                    item: {
                        id: user.uid,
                        photo: user.photoURL,
                        name: user.displayName
                    }
                })
            }else {
                dispatch({
                    type: "userAuth",
                    item: null
                })
            }
        })
    }, [dispatch])
    const addUser = () => {
        
    }
    return (
        <div>
            <button onClick={() => login()}>Click</button>
          
        </div>
    )
}

export default Login
