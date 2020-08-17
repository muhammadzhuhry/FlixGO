class NavBar extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#" class="navbar-brand">FlixG0 - your personal movie search engine</a>
    </nav>`;
  }
}

customElements.define('nav-bar', NavBar);