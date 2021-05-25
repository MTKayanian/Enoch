import React, { Component } from 'react';

const Logo = "'/img/logo.png';"


import Link from 'next/link';


class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }


  render() {
    return (
      <>
        <div class="row">
          <header class="custom-header">
            <div class="ezl-dashboard-header">
              <div class="menu-left">
                <div class="menu-wrap">
                  <a href="#menu" class="menu-link"><i class="fa fa-bars" aria-hidden="true" id="menu-toggle"></i></a>
                </div>
                <div class="header-logo"><a href="#"><img src="/images/logo.png" alt="logo" class="img-fluid" /></a></div>
              </div>
              <div class="menuright-side">
                <div class="right-search">
                  <form class="search-form">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Fund, ISIN, Keyword " />
                      <button class="search-form-btn" type="Submit"><img class="search-img" src="/images/search.png" alt="search" /></button>
                    </div>
                  </form>
                </div>
                <div class="menu-mid-sect">
                  <ul>
                    <li class=""><a href="#"><img src="/images/refresh.png" alt="refresh icon" /></a></li>
                    <li class=""><a href="#"><img src="/images/share.png" alt="share icon" /></a></li>
                    <li class=""><a href="#"><img src="/images/upload.png" alt="up-arow icon" /></a></li>
                  </ul>
                </div>
                <div class="ezl-notificaion">
                  <div class="position-relative notificaion-dropdown">
                    <a href="#" class="popup"><img src="/images/mail.png" alt="inbox" /><span class="inbox-spn">1</span></a>

                  </div>
                  <div class=" position-relative notificaion-dropdown">
                    <a href="#" class="popup"><img src="/images/notification.png" alt="notificaion" /><span class="notificaion-spn">8</span></a>

                  </div>
                </div>
                <div class="ezl-user-ac">
                  <div class="position-relative">
                    <div class="user-img"><img src="/images/user-img.png" alt="user image" class="img-fluid" /></div>
                    <span class="active-dot"></span>
                  </div>
                  <div class="account-d dropdown">
                    <div class="dropdown-buttn"><span class="popup" onclick="popupFunction()">Robert Rose</span>
                      <div class="popupbox dropdown-menu" id="myPopup">
                        <ul class="">
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </header>
        </div>

      </>
    );
  }
}

export default Header;
