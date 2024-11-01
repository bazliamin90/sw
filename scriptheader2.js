const headerTemplate2 = document.createElement('template');

headerTemplate2.innerHTML = `
  <style>
    .header2 {
      font-size: 14px;
      color: #555;
      background-color: white;
      padding: 15px;
      text-align: center;
	  font-weight: bold;
    }
	
	footer {
		text-align: center;
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: white;
		padding: 5px 0;  /* Adjust padding for height slightly more than the font size */
		border-radius: 30px 30px 0 0;
		border-top: 1px solid lightgrey;
	}

	footer p {
		font-size: 8px;
		margin: 0;  /* Ensure there's no additional margin */
		padding-left: 5px;
		padding-right: 5px;
	}
	
	.social-icons {
		display: inline-block;  /* Ensure the icons are in-line with the text */
		padding: 3px 0;
	}

	.social-icons a {
		margin-left: 10px;
		margin-right: 10px;
		text-decoration: none;
	}

	.social-icons img {
		width: 16px;  /* Adjust the size of the icons as needed */
		height: 16px;
		vertical-align: middle;  /* Align the icons properly with the text */
	}
  </style>

  <div class="header2">
    <a>Soutul Walid</a>
  </div>
  
  <footer>
	<div class="social-icons">
        <a href="https://www.facebook.com/baz.li3" target="_blank">
            <img src="fb.svg" alt="Fb">
        </a>
        <a href="https://t.me/bazliamin" target="_blank">
            <img src="tg.svg" alt="Tele">
        </a>
		<a href="https://www.instagram.com/bazliamin/" target="_blank">
            <img src="ig.svg" alt="Insta">
        </a>
    </div>
  </footer>
`;

class Header2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate2.content);
  }
}

customElements.define('header2-component', Header2);
