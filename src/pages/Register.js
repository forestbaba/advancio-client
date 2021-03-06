import React, { useState,useEffect } from 'react'
import './styles.scss'
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux'
import {signup} from '../redux/User/action'


const Register = () => {

    const history = useHistory();
    const realdispatch = useDispatch()
    const [showSpinner, setShowSpinner] = useState('')
    const [loginDetails, setLoginDetails] = useState('')
    const [errorMsg, seterrorMsg] = useState('')

    const data = useSelector((state) => state);

    const { userData: { loggedInUser, isAuthenticated, successSignup, error } } = data

    useEffect(() => {
        if(data.userData.error === true){
            seterrorMsg(data.userData.error.message)
        }
      
       
        
    }, [successSignup === true, data.userData])

    const ValidateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginDetails.email)) {
            return (true)
        }

        return (false)
    }
    const handleSignUp = () => {

        if (!ValidateEmail(loginDetails.email)) {
            alert("You have entered an invalid email address!")
        }

        else if (loginDetails.name === undefined || loginDetails.name.length === '' || loginDetails.name.length === null) {
            alert('Name Field is required')
        }
        else if (loginDetails.email === undefined || loginDetails.email.length === '' || loginDetails.email.length === null) {
            alert('Email Field is required')
        }
        else if (loginDetails.password === undefined || loginDetails.password.length === '' || loginDetails.password.length === null) {
            alert('Password Field is required')
        } else if (loginDetails.password !== loginDetails.confirmPassword) {
            alert('Password and confirm password field do not match')
        } else {
            setShowSpinner(true)
            realdispatch(signup(loginDetails))
            
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: value
        });
    };
    return (
        <div className='popup_inner_signup'>
            <div className='note-container'>
                <h3>Sign up</h3>
                <p>Welcome to Advancio</p>
                {errorMsg ? (<p>{errorMsg}</p>) : null}

            </div>

            <input placeholder='Full name' className='text_input' type='text' name='name' onChange={handleChange} required />
            <input placeholder='Email address' className='text_input' type='email' name='email' onChange={handleChange} required />
            <input placeholder='Password' className='text_input' name='password' type='password' onChange={handleChange} required />
            <input placeholder='Confirm Password' className='text_input' name='confirmPassword' type='password' onChange={handleChange} required />

            <button className='login_button' onClick={handleSignUp}>{showSpinner !== true ? <h6 className='button-text'> Sign up</h6> : <Loader type="Oval" color="white" height={40} width={40} />}</button>

            <div className='login-footer'>
                <h5 className='new'>Already have an account ?</h5>
                <h5 className='sign-up-text'><Link to='/'>Login</Link></h5>
            </div>
        </div>

    )
}
export default Register;