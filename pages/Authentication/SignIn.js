
import React, { Component } from 'react';

import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link'
import Header from '../../components/Common/Header';
import { Formik } from "formik";
import { Form, Field } from "formik";
import * as Yup from "yup";
import classnames from 'classnames';
class SignIn extends Component {
    state = {
        moment: '',
    };
    constructor(props) {
        super(props);

        this.state = {
            popup: false,

        };
    }


    render() {
        const recaptchaRef = React.createRef();
        return (
            <>


                <section>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">

                                <div class="sign-in-form">
                                    <div class="signin-head">
                                        <div class="dapp-header-logo"><img src="/images/logo-big.png" alt="logo" class="img-fluid" /></div>
                                        <h2>Sign In</h2>
                                        <p>See your growth with us</p>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            fname: "",
                                            lname: "",
                                            email: "",
                                            terms: "",
                                            pass: "",
                                            rpass: "",
                                            country: "",
                                            dob: "",
                                            website: "",
                                            city: "",
                                            dial: "",
                                            phone: "",
                                            companyname: "",

                                            captcha: "",

                                        }}
                                        validate={(values) => {
                                            const errors = {};
                                            if (!values.email) {
                                                errors.email = 'Please enter your mail id';
                                            } else if (
                                                !/^[A-Z0-9._%+-]+@(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                    values.email
                                                )
                                            ) {
                                                errors.email = 'Please enter your mail id';
                                            }
                                            return errors;
                                        }}
                                        validationSchema={Yup.object().shape({



                                            pass: Yup.string()
                                                .min(2, "Too Short!")
                                                .max(500, "Too Long!")
                                                .required("Please create the password"),
                                            // enquiry: Yup.string().required("Please select option"),
                                            terms: Yup.string().required("Please tick"),


                                        })}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                alert(JSON.stringify(values, null, 2));
                                                setSubmitting(true);
                                            }, 400);
                                        }}
                                    >
                                        {({
                                            values,

                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                            setFieldValue,
                                            resetForm,

                                            /* and other goodies */
                                        }) => (

                                            <form action="" method="post" onSubmit={handleSubmit}>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="input-label">Email*</div>
                                                        <div className={classnames(
                                                            'sign-form-input',
                                                            {

                                                                "success-block": values.email != "",
                                                                "error-block": errors.email,

                                                            }
                                                        )}>
                                                            <input type="email" placeholder="Email id" name="email" onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email} /> <div class="error-msg">{errors.email}</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="input-label">Password*</div>
                                                        <div className={classnames(
                                                            'sign-form-input',
                                                            {

                                                                "success-block": values.pass != "",
                                                                "error-block": errors.pass,

                                                            }
                                                        )}>

                                                            <input type="password" id="inputpassword1" placeholder="Password" name="pass" onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.pass} />
                                                            <span toggle="#inputpassword1" class="field-icon toggle-password"><img src="/images/eye.png" alt="eye" class="img-fluid eye1" /><img src="/images/eye2.png" alt="eye" class="img-fluid eye2" /></span>
                                                            <div class="error-msg">{errors.pass}</div></div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="signin-check">
                                                            <label class="signcheckbox-container">Remember me
													<input type="checkbox" />
                                                                <span class="signcontactcheckmark"></span>
                                                            </label>
                                                            <span><a href="">Forget Password?</a></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12"><Link href="/Authentication/Authf"><button type="submit" class="sign-up-button">Sign In</button></Link></div>
                                                    <div class="col-md-12"><p class="signin-bttm-xt">Not Registered yet?  <a href="/Authentication/Signup" class="signin-btn">Create an account</a></p></div>
                                                </div>
                                            </form>)}
                                    </Formik>
                                </div>
                            </div>
                            <div class="col-lg-6 p-0">
                                <div class="sign-up-bg-image">
                                    <div class="twitwr-img"><a href="#"><img src="/images/twitter.png" alt="twitter" class="img-fluid" /></a></div>
                                    <div><img src="/images/signup.png" alt="signup" class="img-fluid" /></div>
                                    <div class="top-corner"><img src="/images/img1.png" alt="signup" class="img-fluid" /></div>
                                    <div class="bottom-corner"><img src="/images/img2.png" alt="signup" class="img-fluid" /></div>

                                    <div class="linkedin-img"><a href="#"><img src="/images/linkedin.png" alt="linkedin" class="img-fluid" /></a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


            </>
        );
    }
}

export default SignIn;
