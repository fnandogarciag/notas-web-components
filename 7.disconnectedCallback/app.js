class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log("test memory");
  }
  connectedCallback() {
    console.log("Holsa desde el DOM");
  }
  disconnectedCallback() {
    console.log("Adios del DOM");
  }
}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();
