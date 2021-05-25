
import React, { Component } from 'react';

import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link'
import Header from '../../components/Common/Header';


class Term extends Component {
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

                                <div class="sign-up-form">


                                    <div class="signup-head">
                                        <div class="dapp-header-logo"><img src="/images/logo-big.png" alt="logo" class="img-fluid" /></div>
                                        <h2>Sign Up Now</h2>
                                    </div>


                                    <div class="Terms-and-Conditions-text">
                                        <p>By checking this box, you agree to receive our email newsletter and the latest news from the Element Zero Dao . We will never share your information with any third parties. An overview of how Element Zero Dao collects personal data, the kind of data it collects, its purpose for doing so, and the people to whom it discloses data, in addition to other policies not limited to direct marketing, access and correction, as well as user consent.</p>
                                        <p>When signing up for an account please be aware that you are agreeing to all of our terms (Privacy Policy, Customer Agreement, Arbitration Agreement, Electronic Communications Disclosure, Regulated Digital Asset Account Disclosure and Terms and Conditions, ) and account opening documents provided at the end of KYC/AML process.Business Continuity, Customer Identification Program, Legal, Disclaimer.</p>
                                    </div>
                                    <div class="tab-content">
                                        <div id="Personal" class="tab-pane contacttabcontent active">
                                            <form action="" method="post">
                                                <div class="row">


                                                    <div class="col-md-12">
                                                        <div class="signup-check trams-and-condition-check ">
                                                            <div>
                                                                <label class="signcheckbox-container">I acknowledge that I have read and agree to all <a href="#">Element Zero Dao's Agreements & Disclosures.</a>
                                                                    <input type="checkbox" />
                                                                    <span class="signcontactcheckmark"></span>
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label class="signcheckbox-container">I accept Element Zero Dao business <a href="#">Terms and Conditions</a> and have reviewed the <a href="#">Risk Warnings.</a>
                                                                    <input type="checkbox" />
                                                                    <span class="signcontactcheckmark"></span>
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label class="signcheckbox-container">I agree to the <a href="#">Element Zero Dao User Agreement, Privacy Policy</a>, Cookie Policy and <a href="#">E-Sign Consent.</a>
                                                                    <input type="checkbox" />
                                                                    <span class="signcontactcheckmark"></span>
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label class="signcheckbox-container">I do not want to receive <a href="#">emails</a> and <a href="#">SMS</a> with useful offers from <a href="#">Element Zero DaoOnline Essentials</a>. I can change this preference at any time.
													<input type="checkbox" />
                                                                    <span class="signcontactcheckmark"></span>
                                                                </label>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 mab-32">
                                                        <div class="row row-reverse">
                                                            <div class="col-md-12">
                                                                <div class="captcha-content">
                                                                    <ReCAPTCHA
                                                                        ref={recaptchaRef}
                                                                        sitekey="6LfrFKQUAAAAAMzFobDZ7ZWy982lDxeps8cd1I2i"
                                                                        onChange={(value) => setFieldValue("captcha", value)}
                                                                    />
                                                                    {/* <input type="checkbox" />
                                                                    <lable>I'm not a robot</lable> */}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="captcha-right-content">


                                                                    {/* <div class="captcha-logo">
                                                                        <img src="images/captcha-logo-.png" alt="" />
                                                                    </div>
                                                                    <div class="captcha-logo-text">
                                                                        <h5>reCAPTCHA</h5>
                                                                        <h6>Privacy-Terms</h6>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="col-md-12"><Link href="/Authentication/Gepr"><button type="submit" class="sign-up-button">Next</button></Link></div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>

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

export default Term;
