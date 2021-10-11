import React from 'react';
import './Login.css'
import { FaFacebook, FaTwitter} from 'react-icons/fa';
import { FcGoogle, } from 'react-icons/fc';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const {googleLogin} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    const googleStateLocation = ()=>{
        googleLogin()
        .then(result => {
            history.push(redirect_url)
        })
       
    }
    return (
        <div className="body">
            <div className="container">
            <div className="row content d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <div className="p-4 bg-white shadow box">
                        <h3 className="mb-4 text-center fs-1 text-dark">Login Form</h3>
                        <form className="mb-3">
                            <div className="mb-3 form-floating">
                                <input type="email" className="form-control rounded-0" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="Password" className="form-control rounded-0" id="floatingPassword" placeholder="password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="autoSizingCheck2" />
                                <label className="form-check-label">Remember Me</label>
                            </div>
                            <div className="gap-2 mb-3 d-grid">
                                <button onClick={googleStateLocation} type="button" className="border-0 btn btn-dark btn-lg rounded-0">Login</button>
                            </div>
                            <div className="mb-3 text-right forgot-password-link">
                                <Link to="/register">Forgot Password</Link>
                            </div>
                            <div className="sign-up-accounts">
                                <p className="text-center">Or Sign Up</p>
                                <div className="gap-3 social-accounts d-flex justify-content-center d-grid fs-1">
                                    <Link onClick={""}><FaFacebook/></Link>
                                    <Link to=""><FaTwitter/></Link>
                                    <Link to="/login" onClick={googleStateLocation}><FcGoogle/></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            
        </div>
        </div>
    );
};

export default Login;