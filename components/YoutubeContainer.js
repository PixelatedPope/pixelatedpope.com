class YoutubeContainer extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('div');
    wrapper.setAttribute('style', "position:relative;padding-bottom:56.25%;height:0;width:100%;")

    const frame = document.createElement('iframe');

    frame.setAttribute('style', "position:absolute;left:0;top:0;height:100%;width:100%;")
    frame.setAttribute('src', this.hasAttribute('src') ? this.getAttribute('src') : "")

    frame.setAttribute('allowfullscreen', "true");
    frame.setAttribute('scrolling', "no");
    frame.setAttribute('allow', "autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated;  picture-in-picture");
    frame.setAttribute('allowtransparency',"true");
    frame.setAttribute('webkitallowfullscreen',"false");
    frame.setAttribute('mozallowfullscreen',"false");
    frame.setAttribute('msallowfullscreen',"false");
    frame.setAttribute('frameborder',"0");

    wrapper.append(frame)
    this.shadowRoot.append(wrapper);
  }
}

customElements.define('youtube-container', YoutubeContainer);