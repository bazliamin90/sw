const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
	
	.nav {
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: black;
		border-radius: 0 0 30px 30px;
	}
	
	#navitem {
		padding: 0 10px;
		display: flex;
		_gap: 15px;
		color: grey;
	}
	
	#navitem a {
		color: white;
		_text-decoration: underline lightyellow dotted;
		text-decoration: none;
		_text-underline-offset: 5px;
		padding: 5px 10px;
	}
	
	#navitem a:active {
		color: black;
		background-color: white;
	}
	
	.home {
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
	
	#border-rl {
		border-right: 1px solid grey;
		border-left: 1px solid grey;
	}
	
	#border-r {
		border-right: 1px solid grey;
	}
	
	.stt {
		position: fixed;
		bottom: 50px;
		right: 10px;
		z-index: 9;
		padding: 5px 5px;
		font-size: 12px;
		text-align: center;
		background-color: #ffd9d9;
		color: grey;
		text-decoration: none;
	}

	.stt:active {
		color: white;
		background-color: black;
	}
  </style>

<!------------------------------------------------------------------>

<div class="nav">
	<div id="navitem">
		<a href="index.html" id=border-rl>Walid</a><!--◎-->
		<a href="aulad.html" id=border-r>Aulad</a>
	</div>
</div>

<a href='#' class="stt">↑</a>

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