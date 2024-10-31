const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
	
	.nav {
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	#navitem {
		background-color: white;
		padding: 5px 10px;
		display: flex;
		gap: 20px;
	}
	
	#navitem a {
		color: #555;
		text-decoration: underline lightgrey dotted;
		text-underline-offset: 5px;
	}
	
	.home {
		_top: 20%;
		_left: -35px;
		_transform: rotate(90deg);
		z-index: 9;
		font-size: 12px;
		color: #555;
		background-color: white;
		text-decoration: none;
		text-align: center;
	}
	
	.home:active {
		background-color: black;
		color: white;
	}
	
  </style>

<!------------------------------------------------------------------>

<div class="nav">
	<div id=navitem>
		<a href="index.html">Walid</a>◎
		<a href="aulad.html">Aulad</a>
	</div>
</div>

<!------------------------------------------------------------------>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);