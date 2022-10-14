import NavMenuActiveState from './NavMenuActiveState';

// Object
let navMenuActiveObject = new NavMenuActiveState();

// VARIABLE
let navHamburgerId = document.getElementById('nav-hamburger-id');
let body = document.body;
let overlay = document.getElementById('overlay');
let navMenuMobileId = document.getElementById('nav-menu-mobile-id');

const navMenuItems = Array.from(
    document.querySelectorAll('.nav-menu-desktop .nav-menu-item')
  );

const menuActiveState = document.createElement('span');
menuActiveState.classList.add('nav-menu-active');

function getNavMenuActiveStates(){
    const navMenuActiveStates = Array.from(
        document.querySelectorAll('.nav-menu-desktop .nav-menu-active')
    );
    return navMenuActiveStates;
}

function isNavMenuActiveStateExist(){
    return getNavMenuActiveStates().length;
}

function iterateNavMenuActiveStates(){
    if(isNavMenuActiveStateExist() > 0){
        getNavMenuActiveStates().forEach(navMenuActiveState => {
            removeNavMenuActiveStates(navMenuActiveState);
        });
    }
}

function removeNavMenuActiveStates(navMenuActiveState){
    navMenuActiveState.remove();
}
  
  navMenuItems.forEach(navMenuItem => {
      navMenuItem.addEventListener('click', function(event){
        iterateNavMenuActiveStates();
        navMenuItem.appendChild(navMenuActiveObject.getNavMenuActiveState());
    });
  });



// USER INTERFACE FUNCTION
window.onload = (event) => {
    changeImagePattern();
    disabledNavMenuMobile();
};

window.addEventListener('resize', function(event){
    replacImageToBeCloseHamburgerIcon();
    changeImagePattern();
    disabledNavMenuMobile();
});


navHamburgerId.addEventListener('click', function(event){
    changeImageHamburgerIcon();
    disableScrollOnBody();
    enableOverlayOnBody();
    showNavMenuMobileIfDisproved();
});

// FUNCTION

function changeImagePattern(){
    if(screen.width <= 767){
        document.getElementById("img-pattern").src="./images/bg-intro-mobile.svg";
    }else {
        document.getElementById("img-pattern").src="./images/bg-intro-desktop.svg";
    };
}

function changeImageHamburgerIcon(){
    let img = document.getElementById('nav-hamburger-icon').src;
        if (img.indexOf('icon-hamburger.svg')!=-1) {
            replacImageToBeCloseIcon();
        }
         else {
           replacImageToBeCloseHamburgerIcon();
       }
}

function replacImageToBeCloseIcon(){
    document.getElementById('nav-hamburger-icon').src  = './images/icon-close.svg';
}

function replacImageToBeCloseHamburgerIcon(){
    document.getElementById('nav-hamburger-icon').src  = './images/icon-hamburger.svg';
}

function disabledNavMenuMobile(){
    if(screen.width > 768){
        disproveNavMenuMobile();
        disableOverlayOnBody();
        enableScrollOnBody();
    }else {
    };
}

function showNavMenuMobileIfDisproved() {
    if (isNavMenuMobileDisproved()) {
        showNavMenuMobile();
    } else {
        disproveNavMenuMobile();
    }
  }

function enableOverlayOnBody(){
    overlay.classList.toggle('overlay');
}

function disableOverlayOnBody(){
    overlay.classList.remove('overlay');
}

function isNavMenuMobileDisproved(){
    return navMenuMobileId.style.display === "none";
}

function showNavMenuMobile(){
    navMenuMobileId.style.display = "block";
}

function disproveNavMenuMobile(){
    navMenuMobileId.style.display = "none";
}

function enableScrollOnBody(){
    body.classList.remove('scroll-disable');
}

function disableScrollOnBody(){
    body.classList.toggle('scroll-disable');
}

