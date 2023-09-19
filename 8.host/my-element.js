class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
      <section>
        <h1>
          <slot name="title"></slot>
        </h1>
        <p>
          <slot name="parrafo"></slot>
        </p>
        <slot></slot>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return /*html*/ `
    <style>
      :host {
        display: inline-block;
        width:100%;
        min-width: 300px;
        max-width: 450px;
        font-size: 20px;
        background: grey;
      }
      :host(.blue) {
        background-color: blue;
      }
      :host([yellow]) {
        background-color: yellow;
      }
      :host([yellow]) h1, :host([yellow]) p {
        color: grey;
      }
      :host([yellow]) p {
        color: red;
      }
      :host-context(article.card) {
        display: block;
        max-width: 100%
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
