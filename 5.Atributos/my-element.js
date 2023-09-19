class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAtributes() {
    return ["title", "parrafo", "img"];
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
      <section>
        <h2>${this.title}</h2>
        <div>
          <p>${this.parrafo}</p>
          <img src="${this.img}">
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return /*html*/ `
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element", myElement);