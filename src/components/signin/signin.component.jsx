import {useEffect, useState} from 'react';
import {createAuthUserWithEmailAndPassword,signUpWithPopup, createUserFromAuth, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../formInput/formInput.component'
import Button from '../button/button.component'
import './signin.styles.scss';

const defaultFormFields = {
    'email' : '',
    'password' : '',
}

const SignInForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            //await createUserFromAuth(response.user, {displayName});
            resetFormFields();
        }
        catch(err){
            alert(err)
        }
    }

    const signInWithGoogle = async ()=>{
        const {user} = await signUpWithPopup();
        await createUserFromAuth(user);
    }

    return (
        <div className="sign-up-container">
            <h2>Already Have an account?</h2>
            <span>Sign In with your email & password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType="google" onClick={signInWithGoogle}>Google Login</Button>
                </div>
            </form>
        </div>
    )
};


export default SignInForm;