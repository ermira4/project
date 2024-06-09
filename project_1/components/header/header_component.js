class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        
        this.innerHTML = ` <header>
       
        <div class="topBanner">
            <p class="responsiveTopBannerText">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
            <arrow-icon></arrow-icon>
        </div>
        <nav>
            <div class="iconAndButtonsContainer">
                <div class="logoIcon">
                    <logo-icon></logo-icon>
                </div>
                <div class="buttonsContainer">
                    <div class="sidebar">
                        <ul>
                            <li onclick = hideSidebar() class="hideIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 18.9998L12 12M5.00029 5.00012L12 12M19 18.9998L12 12M12 12L19 5.00003" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></li>
                            <li><a href="../home_page/home_page.html"><button class="sideBarItem">Home</button></a></li>
                            <li><a href="../courses_page/courses_page.html"><button class="sideBarItem">Courses</button></a></li>
                           <li><a href="../about_us_page/about_us_page.html"><button class="sideBarItem">About Us</button></a></li>
                            <li> <a href="../our_pricing_page/our_pricing_page.html"><button class="sideBarItem">Pricing</button></a></li>
                           <li><a href="../contact_us_page/contact_us_page.html"><button class="sideBarItem">Contact</button></a></li>
                        </ul>
                        </div>
                    <ul>
                    <li><a href="../home_page/home_page.html"><button class="navButton hideOnMobile">Home</button></a></li>
                     <li><a href="../courses_page/courses_page.html"><button class="navButton hideOnMobile">Courses</button></a></li>
                       <li> <a href="../about_us_page/about_us_page.html"><button class="navButton hideOnMobile">About Us</button></a></li>
                        <li><a href="../our_pricing_page/our_pricing_page.html"><button class="navButton hideOnMobile">Pricing</button></a></li>
                      <li><a href="../contact_us_page/contact_us_page.html"><button class="navButton hideOnMobile">Contact</button></a></li>
                    </ul>
                </div>
            </div>
            <div class="responsiveButton">
            <a href="../sign_up_page/sign_up_page.html"><button class="navButton">Sign Up</button></a>
               <a href="../login_page/login_page.html"><button class="loginButton">Login</button></a>
                <button  onclick=showSidebar() class="menu-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6H19M5 12H19M5 18H19" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> </button>
            </div>
    </nav>
    </header>`

    }
}

customElements.define('my-header', HeaderComponent)


// Header Icon

class ArrowIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M3.5 10.5C3.5 10.0858 3.83579 9.75 4.25 9.75L14.8879 9.75L10.7302 5.79062C10.4316 5.50353 10.4223 5.02875 10.7094 4.73017C10.9965 4.43159 11.4713 4.42228 11.7698 4.70937L17.2698 9.95937C17.4169 10.1008 17.5 10.296 17.5 10.5C17.5 10.704 17.4169 10.8992 17.2698 11.0406L11.7698 16.2906C11.4713 16.5777 10.9965 16.5684 10.7094 16.2698C10.4223 15.9713 10.4316 15.4965 10.7302 15.2094L14.8879 11.25L4.25 11.25C3.83579 11.25 3.5 10.9142 3.5 10.5Z"
            fill="white" />
    </svg>       
        `
    }
}

customElements.define('arrow-icon', ArrowIcon)

class LogoIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="44" height="44" rx="8" fill="#FF9500" />
        <path
            d="M9.09912 36.0803L17.9263 27.2531H26.7534V18.4259L35.5806 27.2531L26.7534 36.0803H9.09912Z"
            fill="white" />
        <path
            d="M9.09912 18.4259L17.9263 27.2531V18.4259H26.7534L35.5806 9.59879H17.9263L9.09912 18.4259Z"
            fill="white" />
    </svg>      
        `
    }
}

customElements.define('logo-icon', LogoIcon)