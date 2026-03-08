// Select the hamburger menu button
const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');

// Select the mobile menu (the <ul> containing nav links)
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

// Select the header container (for changing background on scroll)
const header = document.querySelector('.header.container');

// Select all menu items inside the mobile menu
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

// Toggle mobile menu visibility when hamburger is clicked
hamb.addEventListener('click', () => {
	hamb.classList.toggle('active');        // Animate hamburger icon
	mobile_menu.classList.toggle('active'); // Show/hide mobile menu
});

// Change header background color on scroll
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;

	if (scroll_position > 50) {
		header.style.backgroundColor = '#28a9ee'; // Change color after scrolling down
	} else {
		header.style.backgroundColor = 'transparent'; // Reset color at top
	}
});

// Close mobile menu when a menu item is clicked
menu_items.forEach((item) => {
	item.addEventListener('click', () => {
		hamb.classList.remove('active');        // Reset hamburger icon
		mobile_menu.classList.remove('active'); // Hide mobile menu
	});
});