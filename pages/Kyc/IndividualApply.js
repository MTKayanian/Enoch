
import React, { Component } from 'react';



import Header from '../../components/Common/Header';


class IndividualApply extends Component {
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

        return (
            <>

                <Header />
                <div class="row">
                    <div class="dashboard-header-bredcrumb">
                        <div class="ezl-dashboard-container">
                            <div class="col-12">
                                <ul>
                                    <li class="home-icon"><img src="/images/home-icon.png" alt="" class="img-fluid" /></li>
                                    <li class="mr-1">Individual KYC /</li>
                                    <li><a href="#" class="active">Apply EKYC</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="KYC-icons-sect">

                    <div class="row">
                        <div class="col-md-2">
                            <div class="KYC-icons KYC-icon-1">
                                <div class="KYC-icons-img">
                                    <img src="/images/KYC-AML/icon-1.png" alt="" class="img-fluid" />
                                </div>
                                <div class="KYC-icons-text">
                                    <h1>Your Details</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="KYC-icons KYC-icon-2">
                                <div class="KYC-icons-img">
                                    <img src="/images/KYC-AML/icon-2.png" alt="" class="img-fluid" />
                                </div>
                                <div class="KYC-icons-text">
                                    <h1>Verify Email linking Wallet </h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="KYC-icons KYC-icon-3">
                                <div class="KYC-icons-img">
                                    <img src="/images/KYC-AML/icon-3.png" alt="" class="img-fluid" />
                                </div>
                                <div class="KYC-icons-text">
                                    <h1>Proof Physical Address </h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="KYC-icons KYC-icon-4">
                                <div class="KYC-icons-img">
                                    <img src="/images/KYC-AML/icon-4.png" alt="" class="img-fluid" />
                                </div>
                                <div class="KYC-icons-text">
                                    <h1>KYC Documents</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="KYC-icons KYC-icon-5">
                                <div class="KYC-icons-img">
                                    <img src="/images/KYC-AML/icon-5.png" alt="" class="img-fluid" />
                                </div>
                                <div class="KYC-icons-text">
                                    <h1>Review & Check</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="KYC-icons KYC-icon-6">
                                <div class="KYC-icons-img">
                                    <img src="/images/KYC-AML/icon-6.png" alt="" class="img-fluid" />
                                </div>
                                <div class="KYC-icons-text">
                                    <h1>KYC/AML VerifIed In 48 Hours </h1>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="KYC-AML-sect">
                    <div class="KYC-AML-headings">
                        <span><img src="/images/KYC-AML/Question%20Mark.png" alt="Question Mark" class="img-fluid" /></span>
                        <span class="pl-3 pt-2">KYC/AML</span>
                    </div>
                    <div class="KYC-AML-content">
                        <p>Know Your Customer (KYC) procedures are a critical function to assess customer risk and a legal requirement to comply with Anti-Money Laundering (AML) laws. Effective KYC involves knowing a customers identity, their financial activities and the risk they pose.</p>

                        <ul>
                            <li><i class="fa fa-circle"></i>Customer Identification Program (CIP)</li>
                            <li><i class="fa fa-circle"></i>Customer Due Diligence</li>
                            <li><i class="fa fa-circle"></i>Ongoing Monitoring</li>
                        </ul>
                    </div>
                    <div class="KYC-AML-right-img">
                        <img src="/images/KYC-AML/tree-and-$.png" alt="tree-and-$" class="img-fluid" />
                    </div>
                </div>

                <div class="Requierements">
                    <div class="Requierements-headings">
                        <span><img src="/images/KYC-AML/Flag.png" alt="Question Mark" class="img-fluid" /></span>
                        <span class="pl-3 pt-2">Requierements</span>
                    </div>
                    <div class="Requierements-content">
                        <p>Following are the steps that you need to complete for KYC/AML :</p>
                    </div>
                    <div class="Requierements-list-sect">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="Requierements-list">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="Requierements-list-left">
                                                <ul>
                                                    <li><span>1.</span>Provide profile picture</li>
                                                    <li><span>2.</span>Provide personal information</li>
                                                    <li><span>3.</span>Verify Email linking to wallet </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="Requierements-list-right">
                                                <ul>
                                                    <li><span>4.</span>Take selfie with your photo ID</li>
                                                    <li><span>5.</span>Proof of Physical address</li>
                                                    <li><span>6.</span>KYC/AML documents</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="Requierements-list-img">
                                    <img src="/images/KYC-AML/Archer.png" alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="KYC-trams-and-condition-sect">
                    <div class="setp-one-condition-checkbox">
                        <input type="checkbox" />
                        <label>I have read and I agree to the <a href="#"> KYC/AML Policy.</a></label>
                    </div>
                </div>

                <div class="KYC-btn-nxt">
                    <a href="/Kyc/KycAmlProfile"><img src="/images/next-btn.png" alt="" class="img-fluid" /></a>
                </div>




            </>
        );
    }
}

export default IndividualApply;
