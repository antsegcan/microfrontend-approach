// React Web Component Wrapper
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import MyComponent from './my-component';


class ReactElement extends HTMLElement {

  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    debugger;
    const toRender = <MyComponent {...this.mfProps} />;
    render(toRender, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

}

customElements.define('my-component', ReactElement);