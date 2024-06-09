class emailContactIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="1.375" width="51" height="51" rx="7.5" fill="#F7F7F8"/>
    <rect x="0.5" y="1.375" width="51" height="51" rx="7.5" stroke="#F1F1F3"/>
    <path d="M15.5 23.5441V32.125C15.5 33.7819 16.8431 35.125 18.5 35.125H33.5C35.1569 35.125 36.5 33.7819 36.5 32.125V23.5441L27.5723 29.0381C26.6081 29.6314 25.3919 29.6314 24.4277 29.0381L15.5 23.5441Z" fill="#262626"/>
    <path d="M36.5 21.7828V21.625C36.5 19.9681 35.1569 18.625 33.5 18.625H18.5C16.8431 18.625 15.5 19.9681 15.5 21.625V21.7828L25.2139 27.7606C25.696 28.0573 26.304 28.0573 26.7861 27.7606L36.5 21.7828Z" fill="#262626"/>
    </svg>
        `
    }
}

customElements.define('email-contact-icon', emailContactIcon)


class phoneContactIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="1.125" width="51" height="51" rx="7.5" fill="#F7F7F8"/>
        <rect x="0.5" y="1.125" width="51" height="51" rx="7.5" stroke="#F1F1F3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 19.125C15.5 17.4681 16.8431 16.125 18.5 16.125H19.8716C20.732 16.125 21.482 16.7106 21.6906 17.5452L22.7964 21.9684C22.9794 22.7003 22.7059 23.4705 22.1024 23.9232L20.8088 24.8934C20.6745 24.9941 20.6453 25.1417 20.683 25.2447C21.8185 28.3445 24.2805 30.8065 27.3803 31.942C27.4833 31.9797 27.6309 31.9505 27.7316 31.8162L28.7018 30.5226C29.1545 29.9191 29.9247 29.6456 30.6566 29.8286L35.0798 30.9344C35.9144 31.143 36.5 31.893 36.5 32.7534V34.125C36.5 35.7819 35.1569 37.125 33.5 37.125H31.25C22.5515 37.125 15.5 30.0735 15.5 21.375V19.125Z" fill="#262626"/>
        </svg>
        `
    }
}

customElements.define('phone-contact-icon', phoneContactIcon)

class checkinContactIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.875" width="51" height="51" rx="7.5" fill="#F7F7F8"/>
                        <rect x="0.5" y="0.875" width="51" height="51" rx="7.5" stroke="#F1F1F3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5397 36.726C25.57 36.7435 25.5937 36.7571 25.6105 36.7665L25.6384 36.7821C25.8613 36.9044 26.1378 36.9035 26.3608 36.7825L26.3895 36.7665C26.4063 36.7571 26.43 36.7435 26.4603 36.726C26.5207 36.691 26.607 36.64 26.7155 36.5732C26.9325 36.4396 27.2388 36.2426 27.6046 35.9841C28.3351 35.4681 29.3097 34.7024 30.2865 33.7023C32.2307 31.7118 34.25 28.7212 34.25 24.875C34.25 20.3187 30.5563 16.625 26 16.625C21.4437 16.625 17.75 20.3187 17.75 24.875C17.75 28.7212 19.7693 31.7118 21.7135 33.7023C22.6903 34.7024 23.6649 35.4681 24.3954 35.9841C24.7612 36.2426 25.0675 36.4396 25.2845 36.5732C25.393 36.64 25.4793 36.691 25.5397 36.726ZM26 27.875C27.6569 27.875 29 26.5319 29 24.875C29 23.2181 27.6569 21.875 26 21.875C24.3431 21.875 23 23.2181 23 24.875C23 26.5319 24.3431 27.875 26 27.875Z" fill="#262626"/>
                        </svg>
        `
    }
}

customElements.define('checkin-contact-icon', checkinContactIcon)

class facebookContactIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.625" width="51" height="51" rx="7.5" fill="#F7F7F8"/>
<rect x="0.5" y="0.625" width="51" height="51" rx="7.5" stroke="#F1F1F3"/>
<g clip-path="url(#clip0_2_1524)">
<path d="M38 26.125C38 19.4976 32.6274 14.125 26 14.125C19.3726 14.125 14 19.4976 14 26.125C14 32.1145 18.3882 37.079 24.125 37.9792V29.5937H21.0781V26.125H24.125V23.4812C24.125 20.4738 25.9166 18.8125 28.6576 18.8125C29.9701 18.8125 31.3438 19.0469 31.3438 19.0469V22H29.8306C28.34 22 27.875 22.9251 27.875 23.875V26.125H31.2031L30.6711 29.5937H27.875V37.9792C33.6118 37.079 38 32.1145 38 26.125Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0_2_1524">
<rect width="24" height="24" fill="white" transform="translate(14 14.125)"/>
</clipPath>
</defs>
</svg>`
    }
}
customElements.define('facebook-contact-icon', facebookContactIcon)


class twitterContactIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.625" width="51" height="51" rx="7.5" fill="#F7F7F8"/>
        <rect x="0.5" y="0.625" width="51" height="51" rx="7.5" stroke="#F1F1F3"/>
        <g clip-path="url(#clip0_2_1527)">
        <path d="M21.5502 35.875C30.6045 35.875 35.5583 28.3717 35.5583 21.8669C35.5583 21.6559 35.5536 21.4403 35.5442 21.2294C36.5079 20.5325 37.3395 19.6693 38 18.6803C37.1025 19.0796 36.1496 19.3404 35.1739 19.4537C36.2013 18.8379 36.9705 17.8705 37.3391 16.7308C36.3726 17.3036 35.3156 17.7076 34.2134 17.9256C33.4708 17.1366 32.489 16.6141 31.4197 16.4391C30.3504 16.264 29.2532 16.4461 28.2977 16.9571C27.3423 17.4681 26.5818 18.2797 26.1338 19.2663C25.6859 20.2529 25.5754 21.3596 25.8195 22.4153C23.8625 22.3171 21.9479 21.8087 20.2 20.9231C18.452 20.0375 16.9097 18.7944 15.673 17.2745C15.0444 18.3582 14.8521 19.6406 15.135 20.8611C15.418 22.0815 16.1551 23.1484 17.1964 23.845C16.4146 23.8202 15.65 23.6097 14.9656 23.2309V23.2919C14.9649 24.4291 15.3581 25.5316 16.0783 26.4118C16.7985 27.292 17.8013 27.8956 18.9162 28.12C18.1921 28.3181 17.432 28.347 16.6948 28.2044C17.0095 29.1824 17.6216 30.0379 18.4458 30.6513C19.27 31.2648 20.2651 31.6056 21.2923 31.6262C19.5484 32.9961 17.3942 33.7391 15.1766 33.7356C14.7833 33.735 14.3904 33.7109 14 33.6634C16.2529 35.1087 18.8735 35.8764 21.5502 35.875Z" fill="#333333"/>
        </g>
        <defs>
        <clipPath id="clip0_2_1527">
        <rect width="24" height="24" fill="white" transform="translate(14 14.125)"/>
        </clipPath>
        </defs>
        </svg>`
    }
}
customElements.define('twitter-contact-icon', twitterContactIcon)

class linkedinContactIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.625" width="51" height="51" rx="7.5" fill="#F7F7F8"/>
        <rect x="0.5" y="0.625" width="51" height="51" rx="7.5" stroke="#F1F1F3"/>
        <g clip-path="url(#clip0_2_1530)">
        <path d="M36.2234 14.125H15.7719C14.7922 14.125 14 14.8984 14 15.8547V36.3906C14 37.3469 14.7922 38.125 15.7719 38.125H36.2234C37.2031 38.125 38 37.3469 38 36.3953V15.8547C38 14.8984 37.2031 14.125 36.2234 14.125ZM21.1203 34.5766H17.5578V23.1203H21.1203V34.5766ZM19.3391 21.5594C18.1953 21.5594 17.2719 20.6359 17.2719 19.4969C17.2719 18.3578 18.1953 17.4344 19.3391 17.4344C20.4781 17.4344 21.4016 18.3578 21.4016 19.4969C21.4016 20.6312 20.4781 21.5594 19.3391 21.5594ZM34.4516 34.5766H30.8937V29.0078C30.8937 27.6812 30.8703 25.9703 29.0422 25.9703C27.1906 25.9703 26.9094 27.4187 26.9094 28.9141V34.5766H23.3563V23.1203H26.7687V24.6859H26.8156C27.2891 23.7859 28.4516 22.8344 30.1813 22.8344C33.7859 22.8344 34.4516 25.2063 34.4516 28.2906V34.5766Z" fill="#333333"/>
        </g>
        <defs>
        <clipPath id="clip0_2_1530">
        <rect width="24" height="24" fill="white" transform="translate(14 14.125)"/>
        </clipPath>
        </defs>
        </svg>`
    }
}
customElements.define('linkedin-contact-icon', linkedinContactIcon)