
//Price section icon

class tickIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FFF4E6" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M17.3635 7.32297C17.6271 7.52379 17.678 7.90027 17.4772 8.16385L11.0772 16.5639C10.9722 16.7016 10.8129 16.7873 10.6402 16.7989C10.4674 16.8105 10.2981 16.7469 10.1756 16.6245L6.57564 13.0245C6.34132 12.7902 6.34132 12.4103 6.57564 12.176C6.80995 11.9416 7.18985 11.9416 7.42417 12.176L10.5387 15.2905L16.5226 7.4366C16.7235 7.17302 17.0999 7.12214 17.3635 7.32297Z"
            fill="#262626" />
    </svg>  
        `
    }
}
 
customElements.define('tick-icon', tickIcon)

class xIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#F1F1F3" />
        <path
            d="M9.02426 8.17574C8.78995 7.94142 8.41005 7.94142 8.17574 8.17574C7.94142 8.41005 7.94142 8.78995 8.17574 9.02426L11.1515 12L8.17574 14.9757C7.94142 15.2101 7.94142 15.59 8.17574 15.8243C8.41005 16.0586 8.78995 16.0586 9.02426 15.8243L12 12.8485L14.9757 15.8243C15.2101 16.0586 15.59 16.0586 15.8243 15.8243C16.0586 15.59 16.0586 15.2101 15.8243 14.9757L12.8485 12L15.8243 9.02426C16.0586 8.78995 16.0586 8.41005 15.8243 8.17574C15.59 7.94142 15.2101 7.94142 14.9757 8.17574L12 11.1515L9.02426 8.17574Z"
            fill="#262626" />
    </svg>  
        `
    }
}

customElements.define('x-icon', xIcon)


//Question section icon

class bigXIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="6" fill="#FFF4E6" />
        <path
            d="M16.7573 27.2426L21.9999 22M27.2426 16.7574L21.9999 22M21.9999 22L16.7573 16.7574M21.9999 22L27.2426 27.2426"
            stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg> 
        `
    }
}


customElements.define('big-x-icon', bigXIcon)


class questionsArrowIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="white" />
        <path d="M18 24H30.5M30.5 24L24.5 18M30.5 24L24.5 30" stroke="#4C4C4C" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
        `
    }
}

customElements.define('questions-arrow-icon', questionsArrowIcon)

class plusIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="6" fill="#FFF4E6" />
        <path d="M16 22H22M28 22H22M22 22V16M22 22V28" stroke="#262626" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
        `
    }
}

customElements.define('plus-icon', plusIcon)

