/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//Page Section global variable
const pageSections = document.querySelectorAll('section');

//Navigation Bar global variable
const navigationBar = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation menu

const addMenuItems = function() {

    let navUI = '';
    //function scrolls through sections of webpage and captures the section ID and dataset.nav info to add to navigation bar elements
    for(section of pageSections) {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`
    };

    navigationBar.innerHTML = navUI;
};



const offset = function(section) {
    return Math.floor(section.getBoundingClientRect().top);
};

//removes your active class from section element not in view
const removeActiveSection = function(section) {
    section.classList.remove('your-active-class');
};

//adds your active class to element in view
const addActiveSection = function(condition, section) {
    if(condition){
        section.classList.add('your-active-class');
    };
};

//function to add and remove your active class from section elements
const activateSection = function() {
    for(section of pageSections) {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActiveSection(section);
        addActiveSection(inviewport(), section);
    };
};

//Scroll event listner
window.addEventListener('scroll', activateSection);




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addMenuItems();
