
import React, { useState, Component } from 'react';


import Dropdown from '../../components/Common/Dropdown'

import Header from '../../components/Common/Header';
import classnames from 'classnames';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
// import DatePicker from 'react-date-picker';

class IndividualKycApply extends Component {
    state = {
        moment: '',
    };
    constructor(props) {
        super(props);

        this.state = {
            popup: true,
            show: false,
            show1: true,
            show2: false,
            show3: true,

            filt: [
                {
                    label: 'Afghanistan',
                    selected: false,
                },
                {
                    label: 'Albania',
                    selected: false,
                },

                {
                    label: 'Algeria',
                    selected: false,
                },
                {
                    label: 'Andorra',
                    selected: false,
                },
                {
                    label: 'Angola',
                    selected: false,
                }, {
                    label: 'Argentina',
                    selected: false,
                }, {
                    label: 'Australia',
                    selected: false,
                }, {
                    label: 'France',
                    selected: false,
                }, {
                    label: 'Gabon',
                    selected: false,
                }, {
                    label: 'Georgia',
                    selected: false,
                }, {
                    label: 'Germany',
                    selected: false,
                }, {
                    label: 'Ghana',
                    selected: false,
                }, {
                    label: 'Greece',
                    selected: false,
                }, {
                    label: 'Grenada',
                    selected: false,
                },










            ]

        };
    }

    OnSubmit = () => {

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
                                    <li><a href="#" class="active">Apply EKYC</a></li>
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
                                    <li class="pencil pr-2">
                                        <img src="/images/KYC-AML/pencil-active.png" alt="pencil-active" class="img-fluid" />
                                    </li>
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
                            <div className={classnames('Account-Information AccInfoDefault', {
                                "d-none": this.state.show1,
                                "d-block": this.state.show1,
                            })}>
                                <ul class="kyc-card-headings">
                                    <li>Account Information</li>
                                    <li class="pencil pr-2" >
                                        <img
                                            src="/images/KYC-AML/pencil-active.png"
                                            alt="pencil-active"
                                            class="img-fluid AccInfo-Edit-Btn"
                                            onClick={() => {
                                                this.setState({

                                                    show: true,
                                                    show1: false

                                                });
                                            }}
                                        />
                                    </li>
                                </ul>

                                <div class="KYC-Account-Information">
                                    <h1>I am an <span>&nbsp;Individual</span></h1>
                                    <ul>
                                        <li>Date of Birth <span class="list-1">11/09/1976</span></li>
                                        <li>Country <span class="list-2">United Kingdom</span></li>
                                        <li>Email <span class="list-3">a.rose@ace.co.uk</span></li>
                                        <li class="last-list">Phone No. <span class="list-4">+44 0755******678</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classnames('Account-Information Account-Information-active', {
                                "d-none": this.state.show,
                                "d-block": this.state.show,
                            })}>
                                <ul class="kyc-card-headings">
                                    <li>Account Information</li>
                                    <li class="edit-save-btn">
                                        <button onClick={() => {
                                            this.setState({

                                                show: false,
                                                show1: true

                                            });
                                        }}><a href="javascript:void(0);">Save</a></button>
                                    </li>
                                </ul>

                                <div class="KYC-Account-Information">
                                    <h1>I am an <span>&nbsp;Individual</span></h1>
                                    <ul>

                                        <li class="date date__container">
                                            <lable>Date of Birth</lable>
                                            <input type="text" id="custom__date" placeholder="11/09/1976" />

                                            <label class="date__trigger" for="custom__date"> <img src="/images/Date.png" alt="" class="img-fluid" /></label>
                                        </li>

                                        <li>
                                            <lable class="country-dropdown-lable">Country</lable>
                                            <div class="country-dropdown">
                                                <div class="select-box account-select-box">
                                                    <div >


                                                        {/* <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Afghanistan</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Albania</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Algeria</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Andorra</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Angola</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Argentina</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Australia</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">France</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Gabon</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Georgia</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Germany</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Ghana</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Greece</label>
                                                        </div>

                                                        <div class="option acc-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="acc-info-label" for="automobiles">Grenada</label>
                                                        </div> */}
                                                    </div>
                                                    <div class="acc-info-label"><Dropdown
                                                        filters={this.state.filt}
                                                        defaultLabel="Select Country"
                                                    /></div>

                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <lable>Email</lable>
                                            <input type="mail" placeholder="a.rose@ace.co.uk" />
                                        </li>

                                        <li class="last-list">
                                            <lable class="phn-lable">Phone No.</lable>

                                            <div class="phone-input-wrap">
                                                <div class="dropdown">
                                                    <button class="btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img id="changeFlag" src="images/flags/uk.png" alt="" />
                                                    </button>

                                                    <ul class="dropdown-menu phn-dropdown-list" aria-labelledby="dropdownMenuButton1">
                                                        <div class="phn-list-bg">
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img1').prop('src')" class="dropdown-item">
                                                                    <img id="img1" class="flag mr-2" class="mr-2 img-fluid" src="images/flags/uk.png" alt="UK Flag" />
														United Kingdom
														<span>+44</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img2').prop('src')" class="dropdown-item">
                                                                    <img id="img2" class="mr-2 flag img-fluid" src="images/flags/usa.png" alt="USA Flag" />
														United States of America
														<span>+1</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img3').prop('src')" class="dropdown-item">
                                                                    <img id="img3" class="mr-2 flag img-fluid" src="images/flags/Uruguay.png" alt="Uruguay Flag" />
														Uruguay
														<span>+598</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img4').prop('src')" class="dropdown-item">
                                                                    <img id="img4" class="mr-2 flag img-fluid" src="images/flags/Uzbekistan.png" alt="Uzbekistan Flag" />
														Uzbekistan
														<span>+998</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img5').prop('src')" class="dropdown-item" >
                                                                    <img id="img5" class="mr-2 flag img-fluid" src="images/flags/Vanuatu.png" alt="Vanuatu Flag" />
														Vanuatu
														<span>+678</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img6').prop('src')" class="dropdown-item">
                                                                    <img id="img6" class="mr-2 flag img-fluid" src="images/flags/Vatican%20City.png" alt="Vatican City-Flag" />
														Vatican City
														<span>+39</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img7').prop('src')" class="dropdown-item">
                                                                    <img id="img7" class="mr-2 flag img-fluid" src="images/flags/Venezuela.png" alt="Venezuela Flag" />
														Venezuela
														<span>+58</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img8').prop('src')"
                                                                    class="dropdown-item" >
                                                                    <img id="img8" class="mr-2 flag img-fluid" src="images/flags/Gembia.png" alt="Gembia Flag" />
														Gambia
														<span>+220</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img9').prop('src')" class="dropdown-item">
                                                                    <img id="img9" class="mr-2 flag img-fluid" src="images/flags/Georgia.png" alt="Georgia Flag" />
														Georgia
														<span>+995</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img10').prop('src')" class="dropdown-item">
                                                                    <img id="img10" class="mr-2 flag img-fluid" src="images/flags/Germany.png" alt="Germany Flag" />
														Germany
														<span>+49</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img11').prop('src')" class="dropdown-item">
                                                                    <img id="img11" class="mr-2 flag img-fluid" src="images/flags/Ghana.png" alt="Ghana Flag" />
														Ghana
														<span>+223</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img12').prop('src')" class="dropdown-item">
                                                                    <img id="img12" class="mr-2 flag img-fluid" src="images/flags/Greece.png" alt="Greece Flag" />
														Greece
														<span>+30</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img13').prop('src')" class="dropdown-item">
                                                                    <img id="img13" class="mr-2 flag img-fluid" src="images/flags/Greenland.png" alt="Greenland Flag" />
														Greenland
														<span>+299</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="document.getElementById('changeFlag').src = $('#img14').prop('src')" class="dropdown-item">
                                                                    <img id="img14" class="mr-2 flag img-fluid" src="images/flags/Grenada.png" alt="Grenada Flag" />
														Grenada
														<span>+1-473</span>
                                                                </a>
                                                            </li>
                                                        </div>
                                                    </ul>

                                                </div>
                                                <input class="phone-input" type="text" placeholder="0755******564" />
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div className={classnames('Address-information ', {
                                "d-none": this.state.show3,
                                "d-block": this.state.show3,
                            })}>
                                <ul class="kyc-card-headings">
                                    <li>Address information</li>
                                    <li class="pencil pr-2">
                                        <img
                                            src="images/KYC-AML/pencil-active.png"
                                            alt="pencil-active"
                                            class="img-fluid AddInfo-Close"
                                            onClick={() => {
                                                this.setState({

                                                    show2: true,
                                                    show3: false

                                                });
                                            }}
                                        />
                                    </li>
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

                            <div className={classnames('Address-information Address-information-active', {
                                "d-none": this.state.show2,
                                "d-block": this.state.show2,
                            })}>
                                <ul class="kyc-card-headings">
                                    <li>Address information</li>
                                    <li class="edit-save-btn">
                                        <button onClick={() => {
                                            this.setState({

                                                show2: false,
                                                show3: true

                                            });
                                        }}><a href="javascript:void(0);">Save</a></button>
                                    </li>
                                </ul>

                                <div class="KYC-Address-information KYC-Address-information-active">
                                    <ul>
                                        <li>
                                            <lable>Address 1</lable>
                                            <input type="text" placeholder="&nbsp;" />
                                        </li>

                                        <li>
                                            <lable>Address 2</lable>
                                            <input type="text" placeholder="&nbsp;" />
                                        </li>

                                        <li>
                                            <lable>City/Town</lable>
                                            <input type="text" placeholder="&nbsp;" />
                                        </li>

                                        <li>
                                            <lable class="country-dropdown-lable">Country</lable>
                                            <div class="country-dropdown">
                                                <div class="select-box address-select-box">
                                                    <div >
                                                        {/* <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Afghanistan</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Albania</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Algeria</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Andorra</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Angola</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Argentina</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Australia</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">France</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Gabon</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Georgia</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Germany</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Ghana</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Greece</label>
                                                        </div>

                                                        <div class="option address-option">
                                                            <input type="radio" class="radio" id="automobiles" name="category" />
                                                            <label class="address-info-label" for="automobiles">Grenada</label>
                                                        </div> */}
                                                    </div>

                                                    <div class="acc-info-label"><Dropdown
                                                        filters={this.state.filt}
                                                        defaultLabel="Select Country"
                                                    /></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="last-list">
                                            <lable>Postal code</lable>
                                            <input type="text" placeholder="&nbsp;" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6"></div>

                        <div class="col-lg-6">
                            <div class="KYC-Save-Profile-sect">
                                <div class="row">
                                    <div class="col-md-4">&nbsp;</div>
                                    <div class="col-md-4">
                                        <div class="save-profile-btn-1 save-profile-btn-1-active">
                                            <button><a href="#">Back</a></button>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="save-profile-btn-2 save-profile-btn-2-active">
                                            <button><a href="#">Continue</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.state.popup ? (
                            <div class="col-lg-6">
                                <div class="account-Disabled-sect">
                                    <div class="account-Disabled-close-btn text-right" onClick={() => {
                                        this.setState({
                                            popup: !this.state.popup,
                                        });
                                    }}>
                                        <img src="images/KYC-AML/close.png" alt="" class="img-fluid WarningClose" />
                                    </div>
                                    <div class="account-Disabled-content">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="warning-img">
                                                    <img src="/images/KYC-AML/success.png" alt="Success" class="img-fluid" />
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="warning-text">
                                                    <h1>Your account is Enabled.<br />Proceed to apply for<b>KYC/AML.</b></h1>
                                                    <h2><a href="#">LEARN MORE</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>) : null}
                    </div>
                </div>




            </>
        );
    }
}

export default IndividualKycApply;
