import { createElement } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./App";

class ContainerApp extends HTMLElement {
  connectedCallback() {
    const props = Object.values(this.attributes).map((attribute) => [
      attribute.name,
      attribute.value,
    ]);
    render(createElement(App, Object.fromEntries(props)), this);
  }

  disconnectedCallback() {
    unmountComponentAtNode(App);
  }
}

customElements.define("container-ce", ContainerApp);

export default ContainerApp;
