class arrowLeftIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="61" height="61" rx="7.5" fill="white"/>
                <rect x="0.5" y="0.5" width="61" height="61" rx="7.5" stroke="#F1F1F3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 31C39.5 31.7041 38.9292 32.275 38.225 32.275H26.9405L30.6087 35.6059C31.1163 36.094 31.1321 36.9011 30.6441 37.4087C30.156 37.9163 29.3489 37.9321 28.8413 37.444L22.8913 31.919C22.6413 31.6786 22.5 31.3468 22.5 31C22.5 30.6531 22.6413 30.3213 22.8913 30.0809L28.8413 24.5559C29.3489 24.0678 30.156 24.0837 30.6441 24.5912C31.1321 25.0988 31.1163 25.906 30.6087 26.394L26.9405 29.725H38.225C38.9292 29.725 39.5 30.2958 39.5 31Z" fill="#262626"/>
                </svg>
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="61" height="61" rx="7.5" fill="white"/>
                    <rect x="0.5" y="0.5" width="61" height="61" rx="7.5" stroke="#F1F1F3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 31C22.5 30.2958 23.0708 29.725 23.775 29.725H35.0595L31.3913 26.394C30.8837 25.906 30.8679 25.0988 31.3559 24.5912C31.844 24.0837 32.6511 24.0678 33.1587 24.5559L39.1087 30.0809C39.3587 30.3213 39.5 30.6531 39.5 31C39.5 31.3468 39.3587 31.6786 39.1087 31.919L33.1587 37.444C32.6511 37.9321 31.844 37.9163 31.3559 37.4087C30.8679 36.9011 30.8837 36.094 31.3913 35.6059L35.0595 32.275H23.775C23.0708 32.275 22.5 31.7041 22.5 31Z" fill="#262626"/>
                    </svg>`
    }
}
customElements.define('arrow-left-icon', arrowLeftIcon)

class googleLoginIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_1654)">
        <path d="M29.7083 15.3456C29.7083 14.3259 29.6256 13.3007 29.4493 12.2976H15.3008V18.0738H23.4029C23.0667 19.9368 21.9864 21.5848 20.4046 22.632V26.3799H25.2383C28.0768 23.7674 29.7083 19.9092 29.7083 15.3456Z" fill="#4285F4"/>
        <path d="M15.2989 30.001C19.3445 30.001 22.7562 28.6727 25.242 26.3799L20.4082 22.6319C19.0634 23.5469 17.3272 24.065 15.3044 24.065C11.3911 24.065 8.07311 21.4249 6.88259 17.8754H1.89453V21.739C4.44092 26.8043 9.6274 30.001 15.2989 30.001Z" fill="#34A853"/>
        <path d="M6.87895 17.8754C6.25063 16.0124 6.25063 13.9952 6.87895 12.1322V8.26855H1.89641C-0.231095 12.507 -0.231095 17.5006 1.89641 21.7391L6.87895 17.8754Z" fill="#FBBC04"/>
        <path d="M15.2989 5.93708C17.4374 5.90401 19.5043 6.70871 21.0531 8.18583L25.3356 3.90327C22.6239 1.35688 19.0248 -0.0430825 15.2989 0.00101083C9.6274 0.00101083 4.44092 3.19778 1.89453 8.26851L6.87708 12.1322C8.06209 8.57716 11.3856 5.93708 15.2989 5.93708Z" fill="#EA4335"/>
        </g>
        <defs>
        <clipPath id="clip0_2_1654">
        <rect width="30" height="30" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    }
}
customElements.define('google-login-icon', googleLoginIcon)

class signupArrowIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.50005 19.5L19.5 6.49996M19.5 6.49996V18.98M19.5 6.49996H7.02005" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> `
    }
}
customElements.define('signup-arrow-icon', signupArrowIcon)




