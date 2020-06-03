export function $_(element) {return document.querySelector(element)}
export function $$_(element) { return document.querySelectorAll(element)}

$_('nav li.call').addEventListener('click', (e) => {

	if(e.target.classList == 'close') $_('nav li.call form').style.display = 'none'
	if($_('nav li.call form').contains(e.target)) return;
	event.target.querySelector('form').style.display = "block"
})
