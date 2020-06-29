export function $_(element) {return document.querySelector(element)}
export function $$_(element) { return document.querySelectorAll(element)}

$_('nav li.call').addEventListener('click', (e) => {

	if(e.target.classList == 'close') $_('nav li.call form').style.display = 'none'
	if($_('nav li.call form').contains(e.target)) return;
	event.target.querySelector('form').style.display = "block"
})

/* header mobile menu */
$_('#nav-icon2').addEventListener('click', event => {
	$_('#nav-icon2').classList.toggle('open')
	$_('.mobile-menu ').classList.toggle('open')
})


if($_('.mobile-menu img.close')) {
	$_('.mobile-menu img.close').addEventListener('click', () => {
		$_('.mobile-menu').classList.toggle('open')
		$_('#nav-icon2').classList.toggle('open')
	})
}

