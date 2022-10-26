import {useEffect} from 'react'
//import {auth, signUpWithPopup, signinWithRedirect, createUserFromAuth} from '../../utils/firebase/firebase.utils';

//import {getRedirectResult} from 'firebase/auth'

import SignUpForm from '../../components/signup/signup.component'
import SignInForm from '../../components/signin/signin.component'

import './authentication.styles.scss'

const Authentication = ()=>{
    // useEffect(()=>{
    //     async function responsData(){
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserFromAuth(response.user);
    //         }
    //     }
    //     responsData()
    // },[]);
    // const logGoogleUserPopup = async ()=>{
    //     const {user} = await signUpWithPopup();
    //     const userDocRef = await createUserFromAuth(user)
    //     console.log(userDocRef);
    // };

    return (
        <div className="authentication-container"> 
            <SignInForm />
            <SignUpForm />

        </div>
    )
}

export default Authentication