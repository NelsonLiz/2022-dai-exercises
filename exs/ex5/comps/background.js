//MUST HAVE - CREATE A TEMPLATE TAG
var template_bg = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bg.innerHTML = `
<style id='mystyle'>
  #bg {
    width:100px;
    height:100px;
  }

</style>
<div id='bg'></div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class MyBG extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_bg.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeColor(bgcolor='blue'){
      //this.shadowRoot.querySelector('#bg').style.cssText = `
       // background-color:${bgcolor};
      //`
      this.shadowRoot.querySelector("#mystyle").innerHTML += `
        @keyframes blink {
          from {
            background-color:white;
            left:${Math.round(Math.random()*100)}vw;
            top:${Math.round(Math.random()*100)}vh;
          }
          to {
            background-color:${bgcolor};
            left:${Math.round(Math.random()*100)}vw;
           top:${Math.round(Math.random()*100)}vh;
           }
        }
      `

      this.shadowRoot.querySelector('#bg').style.cssText = `
        animation-name: blink;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: linear;
        position:relative;
      `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("my-bg", MyBG)