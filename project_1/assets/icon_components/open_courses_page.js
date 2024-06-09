class clockIcon extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
       <svg  width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.5V10.5H13.75M17.5 10.5C17.5 14.6421 14.1421 18 10 18C5.85786 18 2.5 14.6421 2.5 10.5C2.5 6.35786 5.85786 3 10 3C14.1421 3 17.5 6.35786 17.5 10.5Z" stroke="#4C4C4D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
        `
    }
}
customElements.define('clock-icon', clockIcon)