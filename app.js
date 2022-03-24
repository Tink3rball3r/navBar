// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// target the elements I want to manipulate.
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// opens and closes nav

// ===> the short way
navToggle.addEventListener('click', function () {
	links.classList.toggle('show-links');
});

// ===> the long way
// navToggle.addEventListener('click', function () {

// 	if (links.classList.contains('show-links')) {
// 		links.classList.remove('show-links');
// 	} else {
// 		links.classList.add('show-links');
// 	}
// });
