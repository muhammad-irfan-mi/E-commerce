import React, { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'


const Login = () => {
    const [Username, setUsername] = useState('');
    const [ Userpass, setUserpass] = useState('')
    const [ UsernameErr, setUsernameErr] = useState(false)
    const [ UserpassErr, setUserpassErr] = useState(false)
    const userhandler = () => {
        n
    }
    return (
        <>
            <div className="login-page">
                <div className="container-fluid">
                    <div className="login">
                        <h3>Login</h3>
                        <div className="uname">
                            <label htmlFor="u-nm">Username</label><br />
                            <input type="text" id="u-nm" placeholder='Enter Username' onChange={userhandler}/>
                        </div>
                        <div className="uname">
                            <label htmlFor="u-pass">Username</label><br />
                            <input type="text" id="u-pass" placeholder='Enter Password' onChange={passwordhandler}/>
                        </div>
                        <div className="f-password">
                            <span>Forgot Password?</span>
                        </div>
                        <button>Login</button>
                        <button>Signup</button>
                        <div className="signup">
                            <span>Or Signup using</span>
                            <div className="icon">
                                <i><a href=""><FaFacebookF /></a></i>
                                <i><a href=""><BsTwitter /></a></i>
                                <i><a href=""><FaGoogle /></a></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

