export default class NavMenuActiveState{
    #spanElement = "span";
    #classElement = "nav-menu-active";
    #navMenuActiveState;

    constructor(){}

    #setSpanElement(){
        this.#navMenuActiveState = document.createElement(this.#spanElement);
        return this;
    }

    #setClassElement(){
        this.#navMenuActiveState.classList.add(this.#classElement);
        return this;
    }

    #buildNavMenuActiveState(){
        this
        .#setSpanElement()
        .#setClassElement();
        return this.#navMenuActiveState;
    }

    getNavMenuActiveState(){
       return this.#buildNavMenuActiveState();
    }

}