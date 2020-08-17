class HeroText extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-text mt-5 mb-5 text-center">
      <h1>Flix<span>GO</span></h1>
      <p>your personal movie search engine</p>
    </div>`;
  }
}

customElements.define('hero-text', HeroText);