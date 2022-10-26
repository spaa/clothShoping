import {useEffect, useState} from 'react';
import {createAuthUserWithEmailAndPassword, createUserFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../formInput/formInput.component'
import Button from '../button/button.component'
import './signup.styles.scss';

const defaultFormFields = {
    'displayName' : '',
    'email' : '',
    'password' : '',
    'confirmPassword' : ''
}

const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Password and Confirm Password does not match");
            return;
        }
        try{
            const response = await createAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            await createUserFromAuth(response.user, {displayName});
            resetFormFields();
        }
        catch(err){
            alert(err)
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email & password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
};


export default SignUpForm;