import {CONFIG} from './config';

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


/* отправка header-формы обратного звонка */

$_('li.call form').addEventListener('submit', event => {
	event.preventDefault();

	let data = { phone: $_('li.call form').querySelector('input[type="text"]').value }
	fetch(CONFIG.php_path, {
		method: 'POST',
		mode: 'cors',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})
		.then(response => response.text())
		.then(text => drawResponse(text) )


		function drawResponse(text)	{

		let string = `<span class="close">×</span>`;
		if(text == 'success'){
			string += `
				<p style="font-size: 2rem">😄</p>
				<p>Успешно отправлено! Ожидайте звонка менеджера</p>
			`
		} else {
			string += `
				<p style="font-size: 2rem">😞</p>
				<p>Ошибка отправки! Попробуйте позже или наберите нам</p>
			`
		}

		$_('li.call form').innerHTML = string
	}		
})

