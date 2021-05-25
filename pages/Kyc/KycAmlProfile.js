
import React, { Component } from 'react';



import Header from '../../components/Common/Header';


class KycAmlProfile extends Component {
    state = {
        moment: '',
    };
    constructor(props) {
        super(props);

        this.state = {
            popup: true,

        };
    }


    render() {

        return (
            <>

                <Header />
                <div class="row">
                    <div class="dashboard-header-bredcrumb">
                        <div class="ezl-dashboard-container">
                            <div class="col-12">
                                <ul>
                                    <li class="home-icon"><img src="images/home-icon.png" alt="" class="img-fluid" /></li>
                                    <li class="mr-1">Individual KYC /</li>
                                    <li><a href="#" class="active">  Apply KYC/AML</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="KYC-BODY ezl-dashboard-container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="Individual-profile-sect">
                                <h1>Individual profile</h1>
                                <div class="KYC-profile-picture-sect">
                                    <h2>Profile Picture</h2>
                                    <div class="KYC-profile-picture-content">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="KYC-profile-picture">
                                                    <input type="file" class="my_file" />
                                                </div>
                                            </div>

                                            <div class="col-md-10">
                                                <div class="KYC-profile-picture-text">
                                                    <h3>Upload your photo here</h3>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="Personal-Information-sect">
                                <ul class="kyc-card-headings">
                                    <li>Personal Information</li>
                                    <li class="pencil pr-2"><img src="/images/KYC-AML/pencil.png" alt="pencil" class="img-fluid" /></li>
                                </ul>

                                <div class="KYC-Personal-Information">
                                    <ul>
                                        <li>First name <span class="list-1">Robert</span></li>
                                        <li>Middle name <span class="list-2">******</span></li>
                                        <li class="last-list">Last name <span class="list-3">Rose</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6">
                            <div class="Account-Information">
                                <ul class="kyc-card-headings">
                                    <li>Account Information</li>
                                    <li class="pencil pr-2"><img src="/images/KYC-AML/pencil.png" alt="pencil" class="img-fluid" /></li>
                                </ul>

                                <div class="KYC-Account-Information">
                                    <h1>I am  an <span>&nbsp;Individual</span></h1>
                                    <ul>
                                        <li>Date of Birth  <span class="list-1">11/09/1976</span></li>
                                        <li>Country <span class="list-2">United Kingdom</span></li>
                                        <li>Email <span class="list-3">a.rose@ace.co.uk</span></li>
                                        <li class="last-list">Phone No. <span class="list-4">+44 0755******678</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6">
                            <div class="Address-information">
                                <ul class="kyc-card-headings">
                                    <li>Address information</li>
                                    <li class="pencil pr-2"><img src="/images/KYC-AML/pencil.png" alt="pencil" class="img-fluid" /></li>
                                </ul>

                                <div class="KYC-Address-information">
                                    <ul>
                                        <li>Address 1</li>
                                        <li>Address 2</li>
                                        <li>City/Town</li>
                                        <li>Country</li>
                                        <li class="last-list">Postal code</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">

                        </div>

                        <div class="col-lg-6">
                            <div class="KYC-Save-Profile-sect">
                                <div class="row">
                                    <div class="col-md-4">
                                        &nbsp;
	                    </div>
                                    <div class="col-md-4">
                                        <div class="save-profile-btn-1">
                                            <button class="disable"><a href="#">Back</a></button>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="save-profile-btn-2 ">
                                            <button class="disable"><a href="#">Continue</a></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="account-Disabled-sect">
                                <div class="account-Disabled-close-btn text-right">
                                    <img src="/images/KYC-AML/close.png" alt="" class="img-fluid WarningClose" />
                                </div>
                                <div class="account-Disabled-content">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="warning-img">
                                                <img src="/images/KYC-AML/Warning.png" alt="" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="warning-text">
                                                <h1>Your account is Disabled. <br /><b>Request Enable</b></h1>
                                                <h2><a href="/Kyc/IndividualKycApply">Contact Admin </a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </>
        );
    }
}

export default KycAmlProfile;
