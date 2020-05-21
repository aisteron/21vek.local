function $_(element) {return document.querySelector(element)}

$_('nav li.call').addEventListener('click', (e) => {
	if( e.target === e.target.querySelector('form')) return false
	event.target.querySelector('form').style.display = "block"
})
$_('li.call form span.close').addEventListener('click', e => {
	console.log(e.target.parentNode)
})