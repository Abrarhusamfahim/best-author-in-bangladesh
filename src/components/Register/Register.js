import React from 'react';
//the field is not work ignore this field
const Register = () => {
    return (
        <div className="body1">
            <div className="containerS">
            <div className="myCard">
                <div className="row">
                    <div className="col-md-6">
                        <div className="myLeftCtn">
                            <form className="text-center myForm">
                                <header>Create new Account</header>
                                <div className="form-group">
                                    <i className="fas fa-user"></i>
                                    <input className="myInput" placeholder="Username" id="Username" required type="text" />
                                    <div className="invalid-feedback">Please fill out this field</div>
                                </div>

                                <div className="form-group">
                                    <i className="fas fa-envelope"></i>
                                    <input className="myInput" placeholder="Email" id="email" required type="email" />
                                    <div className="invalid-feedback">Please fill out this field</div>
                                </div>
                                <div className="form-group">
                                    <i className="fas fa-lock"></i>
                                    <input className="myInput" placeholder="Password" id="password" required type="password" />
                                    <div className="invalid-feedback">Please fill out this field</div>
                                </div>
                                <div className="form-group">
                                   <label>
                                   <input id="check_1" name="check_1" type="checkbox" required>
                                       <small>I read and agree to Terms & Conditions</small>
                                   </input>
                                    <div className="invalid-feedback">You must check the box.</div>
                                   </label>
                                </div>
                                <input className="butt" type="submit" value="create account" />

                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="myRightCtn">
                            <div className="box">
                                <header>Hello World!</header>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati at quos quam error cumque a, itaque ab velit sunt dolore sapiente voluptate asperiores, tempora est natus sed doloribus, dignissimos culpa.</p>
                                <input className="butt_out" type="button" value="Learn more" />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Register;