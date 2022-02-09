//MUST HAVE - CREATE A TEMPLATE TAG
var template_button = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_button.innerHTML = `
<button id='test'>Hit me</button>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class MyButton extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_button.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#test").onclick = () => this.highlight(
            this.getAttribute('bg'), 
            this.getAttribute('bo')
        );
    
        if(this.getAttribute("text:")){
            this.shadowRoot.querySelector("#text").innerText = this.getAttribute("text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    highlight(bgcolor='#333', borderWidth='2px'){
        this.shadowRoot.querySelector("#test").style.cssText = `
            background-color:${bgcolor};
            color:#FFF;
            border-width:${borderWidth};
        `;

        document.querySelector("#mybg").changeColor(bgcolor);
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("my-button", MyButton)