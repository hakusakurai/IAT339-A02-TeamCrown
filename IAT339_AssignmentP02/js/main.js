'use strict';

// -- Information Description Tabs Section START --

(function() {
  // Get relevant elements and collections
  const InformationTabs = document.querySelector('.InformationTabs');
  const tablist = InformationTabs.querySelector('ul');
  const tabs = tablist.querySelectorAll('a');
  const panels = InformationTabs.querySelectorAll('[id^="section"]');
  
  // The tab switching function
  const switchTab = (oldTab, newTab) => {
  	newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute('tabindex');
    // Set the selected state
    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    // Get the indices of the new and old tabs to find the correct
    // tab panels to show and hide
    let index = Array.prototype.indexOf.call(tabs, newTab);
    let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
}

  // Add the tablist role to the first <ul> in the .InformationTabs container
  tablist.setAttribute('role', 'tablist');
  
  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
  	tab.setAttribute('role', 'tab');
  	tab.setAttribute('id', 'tab' + (i + 1));
  	tab.setAttribute('tabindex', '-1');
  	tab.parentNode.setAttribute('role', 'presentation');

    // Handle clicking of tabs for mouse users
    tab.addEventListener('click', e => {
    	e.preventDefault();
    	let currentTab = tablist.querySelector('[aria-selected]');
    	if (e.currentTarget !== currentTab) {
    		switchTab(currentTab, e.currentTarget);
    	}
    });
    
    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
      if (dir !== null) {
      	e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
    }
});
});
  
  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
  	panel.setAttribute('role', 'tabpanel');
  	panel.setAttribute('tabindex', '-1');
  	let id = panel.getAttribute('id');
  	panel.setAttribute('aria-labelledby', tabs[i].id);
  	panel.hidden = true; 
  });
  
  // Initially activate the first tab and reveal the first tab panel
  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  panels[0].hidden = false;
})();

// -- Information Description Tabs Section END --

// -- Review Slides Section START --
var reviewIndex = 1;
showSlides(reviewIndex);

function plusSlides(n) {
	showSlides(reviewIndex += n);
}

function currentSlide(n) {
	showSlides(reviewIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("ReviewDetailed");
	if (n > slides.length) {reviewIndex = 1}
		if (n < 1) {reviewIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			slides[reviewIndex-1].style.display = "block";
		}


// !!!Learned from:https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp
// -- Review Slides Section END --

// --RecommandationList Section START--
var recommandationIndex = 1;
showRSlides(recommandationIndex);

function plusRSlides(n) {
	showRSlides(recommandationIndex += n);
}

function currentRSlide(n) {
	showRSlides(recommandationIndex = n);
}

function showRSlides(n) {
	var i;
	var Rslides = document.getElementsByClassName("gSwitchItem");
	if (n > Rslides.length) {recommandationIndex = 1}
		if (n < 1) {recommandationIndex = Rslides.length}
			for (i = 0; i < Rslides.length; i++) {
				Rslides[i].style.display = "none";
			}
			Rslides[recommandationIndex-1].style.display = "block";
		}
// --RecommandationList Section END--

// --The function of Changing Quantity Section START--


var count = 1;
var countEl = document.getElementById("count");
function plus(){
	count++;
	countEl.value = count;
}
function minus(){
	if (count > 1) {
		count--;
		countEl.value = count;
	}  
}
// Leanred from:https://codepen.io/nevcanuludas/pen/WbNbow
// --The function of Changing Quantity Section END--
function openNav() {
  document.getElementById("AccountToggleSideBar").style.width = "250px";
  document.getElementsByClassName("Wrapper").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("AccountToggleSideBar").style.width = "0";
  document.getElementsByClassName("Wrapper").style.marginLeft= "0";
}