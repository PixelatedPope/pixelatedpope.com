class DemoContainer extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({mode: 'open'});

    const frame = document.createElement('iframe');

    frame.setAttribute('width', this.hasAttribute('width') ? this.getAttribute('width') : "100%")
    frame.setAttribute('height', this.hasAttribute('height') ? this.getAttribute('height') : "100%")
    frame.setAttribute('src', this.hasAttribute('src') ? this.getAttribute('src') : "100px")

    frame.setAttribute('allowfullscreen', "true");
    frame.setAttribute('scrolling', "no");
    frame.setAttribute('allow', "autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated");
    frame.setAttribute('allowtransparency',"true");
    frame.setAttribute('webkitallowfullscreen',"false");
    frame.setAttribute('mozallowfullscreen',"false");
    frame.setAttribute('msallowfullscreen',"false");
    frame.setAttribute('frameborder',"0");

    this.shadowRoot.append(frame);
  }
}

customElements.define('demo-container', DemoContainer);