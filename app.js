const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

hamb.addEventListener('click', () => {
	hamb.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;

	if (scroll_position > 50) {
		header.style.backgroundColor = '#28a9ee';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_items.forEach((item) => {
	item.addEventListener('click', () => {
		hamb.classList.remove('active');
		mobile_menu.classList.remove('active');
	});
});