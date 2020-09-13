class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header>This is Header</header>
        `;
  }
}

customElements.define("my-header", Header);
