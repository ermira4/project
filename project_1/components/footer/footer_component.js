class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        
        this.innerHTML = ` <footer>
        <div class="footerContainer">
            <div class="infoContainer">

                <div>
                    <logo-icon></logo-icon>
                </div>
                <div>
                    <div class="svgAndInfoContainer">
                        <email-icon></email-icon>
                        <h2>hello@skillbridge.com</h2>
                    </div>
                    <div class="svgAndInfoContainer">
                        <phone-icon></phone-icon>
                        <h2>+91 91813 23 2309</h2>
                    </div>
                    <div class="svgAndInfoContainer">
                        <check-in-icon></check-in-icon>
                        <h2>Somewhere in the World</h2>
                    </div>
                </div>
            </div>

            <div class="aboutUsFooter">
                <div class="aboutUsFooter display">
                    <div class="aboutUsFooter">
                        <div>
                            <h4 class="itemHeading">Home</h4>
                            <p class="paragraph">Benefits</p>
                            <p class="paragraph">Our Courses</p>
                            <p class="paragraph">Our Testimonials</p>
                            <p class="paragraph">Our FAQ</p>
                        </div>
                        <div>
                            <h4 class="itemHeading">About Us</h4>
                            <p class="paragraph">Company</p>
                            <p class="paragraph">Achievements</p>
                            <p class="paragraph">Our Goals</p>
                        </div>
                    </div>

                    <div>
                        <h4 class="itemHeading block">Social Profiles</h4>
                        <facebook-icon></facebook-icon>
                        <twitter-icon></twitter-icon>
                        <linked-in-icon></linked-in-icon>
                    </div>
                </div>


            </div>

        </div>
        <div class="footerLine"></div>
        <div>
            <p class="copyright">© 2023 Skillbridge. All rights reserved.</p>
        </div>
    </footer>`
    } 
}
customElements.define('my-footer', FooterComponent)

//Footer icon

class emailIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.25 7.22425V14.375C1.25 15.7557 2.36929 16.875 3.75 16.875H16.25C17.6307 16.875 18.75 15.7557 18.75 14.375V7.22425L11.3102 11.8026C10.5067 12.297 9.49327 12.297 8.68976 11.8026L1.25 7.22425Z"
            fill="#262626" />
        <path
            d="M18.75 5.75652V5.625C18.75 4.24429 17.6307 3.125 16.25 3.125H3.75C2.36929 3.125 1.25 4.24429 1.25 5.625V5.75652L9.34488 10.738C9.74664 10.9852 10.2534 10.9852 10.6551 10.738L18.75 5.75652Z"
            fill="#262626" />
    </svg>
        `
    }
}

customElements.define('email-icon', emailIcon)


class phoneIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1.25 3.75C1.25 2.36929 2.36929 1.25 3.75 1.25H4.89302C5.61 1.25 6.23498 1.73796 6.40887 2.43354L7.33037 6.11952C7.48284 6.72942 7.25495 7.37129 6.75202 7.74849L5.674 8.557C5.56206 8.64096 5.53772 8.7639 5.56917 8.84974C6.51542 11.4329 8.5671 13.4846 11.1503 14.4308C11.2361 14.4623 11.359 14.4379 11.443 14.326L12.2515 13.248C12.6287 12.7451 13.2706 12.5172 13.8805 12.6696L17.5665 13.5911C18.262 13.765 18.75 14.39 18.75 15.107V16.25C18.75 17.6307 17.6307 18.75 16.25 18.75H14.375C7.12626 18.75 1.25 12.8737 1.25 5.625V3.75Z"
            fill="#262626" />
    </svg>
        `
    }
}

customElements.define('phone-icon', phoneIcon)

class checkInIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9.61646 18.6259C9.64163 18.6405 9.66141 18.6517 9.67542 18.6596L9.69869 18.6726C9.88441 18.7745 10.1148 18.7738 10.3007 18.6729L10.3246 18.6596C10.3386 18.6517 10.3584 18.6405 10.3835 18.6259C10.4339 18.5967 10.5058 18.5542 10.5963 18.4985C10.7771 18.3872 11.0323 18.223 11.3372 18.0076C11.9459 17.5776 12.7581 16.9395 13.5721 16.1061C15.1922 14.4474 16.875 11.9551 16.875 8.75C16.875 4.95304 13.797 1.875 10 1.875C6.20304 1.875 3.125 4.95304 3.125 8.75C3.125 11.9551 4.80777 14.4474 6.42788 16.1061C7.24188 16.9395 8.05409 17.5776 8.66282 18.0076C8.96771 18.223 9.22295 18.3872 9.40375 18.4985C9.49419 18.5542 9.56612 18.5967 9.61646 18.6259ZM10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25Z"
            fill="#262626" />
    </svg>
        `
    }
}

customElements.define('check-in-icon', checkInIcon)

class facebookIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.833252" y="0.5" width="43" height="43" rx="5.5" fill="#F7F7F8" />
                <rect x="0.833252" y="0.5" width="43" height="43" rx="5.5" stroke="#F1F1F3" />
                <g clip-path="url(#clip0_2_2276)">
                    <path
                        d="M32.3333 22C32.3333 16.4771 27.8561 12 22.3333 12C16.8104 12 12.3333 16.4771 12.3333 22C12.3333 26.9912 15.9901 31.1283 20.7708 31.8785V24.8906H18.2317V22H20.7708V19.7969C20.7708 17.2906 22.2637 15.9062 24.5479 15.9062C25.6417 15.9062 26.7864 16.1016 26.7864 16.1016V18.5625H25.5254C24.2833 18.5625 23.8958 19.3334 23.8958 20.125V22H26.6692L26.2258 24.8906H23.8958V31.8785C28.6764 31.1283 32.3333 26.9912 32.3333 22Z"
                        fill="#333333" />
                </g>
                <defs>
                    <clipPath id="clip0_2_2276">
                        <rect width="20" height="20" fill="white" transform="translate(12.3333 12)" />
                    </clipPath>
                </defs>
                </svg>
        `
    }
}

customElements.define('facebook-icon', facebookIcon)

class twitterIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.833252" y="0.5" width="43" height="43" rx="5.5" fill="#F7F7F8" />
                <rect x="0.833252" y="0.5" width="43" height="43" rx="5.5" stroke="#F1F1F3" />
                <g clip-path="url(#clip0_2_2279)">
                    <path
                        d="M18.625 30.1246C26.1704 30.1246 30.2985 23.8719 30.2985 18.4512C30.2985 18.2754 30.2946 18.0957 30.2868 17.9199C31.0898 17.3392 31.7828 16.6198 32.3333 15.7957C31.5854 16.1285 30.7913 16.3458 29.9782 16.4402C30.8343 15.9271 31.4754 15.1209 31.7825 14.1711C30.977 14.6484 30.0962 14.9851 29.1778 15.1668C28.559 14.5093 27.7407 14.0739 26.8497 13.928C25.9586 13.7821 25.0442 13.9338 24.248 14.3597C23.4518 14.7856 22.8181 15.4619 22.4448 16.2841C22.0715 17.1062 21.9794 18.0285 22.1829 18.9082C20.552 18.8264 18.9565 18.4027 17.4999 17.6647C16.0433 16.9267 14.758 15.8908 13.7274 14.6242C13.2036 15.5273 13.0433 16.596 13.2791 17.613C13.5149 18.6301 14.1291 19.5192 14.9969 20.0996C14.3454 20.0789 13.7082 19.9035 13.1379 19.5879V19.6387C13.1374 20.5864 13.465 21.5051 14.0652 22.2386C14.6654 22.9721 15.501 23.4751 16.4301 23.6621C15.8266 23.8272 15.1932 23.8513 14.579 23.7324C14.8411 24.5475 15.3512 25.2604 16.0381 25.7716C16.7249 26.2828 17.5542 26.5668 18.4102 26.584C16.9569 27.7256 15.1617 28.3447 13.3137 28.3418C12.986 28.3413 12.6586 28.3212 12.3333 28.2817C14.2106 29.4861 16.3945 30.1258 18.625 30.1246Z"
                        fill="#333333" />
                </g>
                <defs>
                    <clipPath id="clip0_2_2279">
                        <rect width="20" height="20" fill="white" transform="translate(12.3333 12)" />
                    </clipPath>
                </defs>
                </svg>
        `
    }
}

customElements.define('twitter-icon', twitterIcon)


class linkedInIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.833252" y="0.5" width="43" height="43" rx="5.5" fill="#F7F7F8" />
                <rect x="0.833252" y="0.5" width="43" height="43" rx="5.5" stroke="#F1F1F3" />
                <g clip-path="url(#clip0_2_2282)">
                    <path
                        d="M30.8528 12H13.8098C12.9934 12 12.3333 12.6445 12.3333 13.4414V30.5547C12.3333 31.3516 12.9934 32 13.8098 32H30.8528C31.6692 32 32.3333 31.3516 32.3333 30.5586V13.4414C32.3333 12.6445 31.6692 12 30.8528 12ZM18.2668 29.043H15.2981V19.4961H18.2668V29.043ZM16.7825 18.1953C15.8293 18.1953 15.0598 17.4258 15.0598 16.4766C15.0598 15.5273 15.8293 14.7578 16.7825 14.7578C17.7317 14.7578 18.5012 15.5273 18.5012 16.4766C18.5012 17.4219 17.7317 18.1953 16.7825 18.1953ZM29.3762 29.043H26.4114V24.4023C26.4114 23.2969 26.3918 21.8711 24.8684 21.8711C23.3254 21.8711 23.0911 23.0781 23.0911 24.3242V29.043H20.1301V19.4961H22.9739V20.8008H23.0129C23.4075 20.0508 24.3762 19.2578 25.8176 19.2578C28.8215 19.2578 29.3762 21.2344 29.3762 23.8047V29.043Z"
                        fill="#333333" />
                </g>
                <defs>
                    <clipPath id="clip0_2_2282">
                        <rect width="20" height="20" fill="white" transform="translate(12.3333 12)" />
                    </clipPath>
                </defs>
                  </svg>
        `
    }
}

customElements.define('linked-in-icon', linkedInIcon)
