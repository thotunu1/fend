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

const pageSections = document.querySelectorAll('section');
const navigationBar = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/*function getActiveElem() {
    maxSection = pageSections[0];
    minVal = 1000000;
    for (item of pageSections) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -300 & bounding.top < minVal) {
            minVal = bounding.top;
            maxSection = item;

            //console.log(bounding);
        };
    };
    return maxSection;

};*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation menu

const addMenuItems = function() {

    let navUI = '';

    for(section of pageSections) {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`
    };

    navigationBar.innerHTML = navUI;
};

/*function addMenuItems() {
    for (let item of pageSections) {
        const menuItem = document.createElement('li'); //creates list item element
        menuItem.className = 'menu__link'; //Adds class name to li element
        menuItem.dataset.nav = item.id; //adds data-nav custom attribute to li element
        menuItem.innerText = item.dataset.nav; //adds data-nav name of corresponding section to Menu item
        navigationBar.appendChild(menuItem); //appends navigation menu li element to existing nav bar UL element

        //console.log(section);
    };
};*/

// Add class 'active' to section when near top of viewport

const offset = function(section) {
    return Math.floor(section.getBoundingClientRect().top);
};

const removeActiveSection = function(section) {
    section.classList.remove('your-active-class');
};

const addActiveSection = function(condition, section) {
    if(condition){
        section.classList.add('your-active-class');
    };
};

const activateSection = function() {
    for(section of pageSections) {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActiveSection(section);
        addActiveSection(inviewport(), section);
    };
};

window.addEventListener('scroll', activateSection);


/*function setActive () {
    window.addEventListener('scroll', function (event) {
        let section = getActiveElem();
        section.classList.add('your-active-class');
        // set other sections as inactive
        for (let item of pageSections) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
        // set corresponding header style
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        // remove from other headers
        const headers = document.querySelectorAll('.menu__link');
        for (let item of headers) {
            //console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};

// Scroll to anchor ID using scrollTO event
function scrollToClick() {
    navigationBar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};
*/

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addMenuItems();

// Scroll to section on link click
//scrollToClick();

// Set sections as active
//setActive();

