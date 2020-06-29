import {$_, $$_} from './header-callback';
import {CONFIG} from './config';

document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init);

function init() {

	openPopup()
	submitForm()

}
function openPopup() {

	let wrap = $_('footer .modal-wrap');
	let close = wrap.querySelector('span.close');	

	$_('footer span.cb').addEventListener('click', () => {
		wrap.style.display = 'block';
		wrap.querySelector('form p').innerHTML = 'Оставьте свой номер и мы вам перезвоним'
	})

	if($_('.retired.box')){
		$_('.retired.box input[type="submit"]').addEventListener('click', () => {
			wrap.style.display = 'block'
			wrap.querySelector('form p').innerHTML = 'Оставьте свой номер и мы вам расскажем подробнее про скидку'
		})
	}

	if($_('.clip-area')) {
		$_('.clip-area input[type="submit"]').addEventListener('click', () => {
			wrap.style.display = 'block'
			wrap.querySelector('form p').innerHTML = 'Для заказа услуги оставьте свой номер и мы вам перезвоним'
		})
	}

	if($_('.main-faq .inverted')) {
		$_('.main-faq .inverted').addEventListener('click', () => {
			wrap.style.display = 'block'
		})
	}

	$_('.mobile-menu .line span').addEventListener('click', () => {
		wrap.style.display = 'block'
		wrap.querySelector('form p').innerHTML = 'Оставьте свой номер и мы вам перезвоним'
	})

	if($_('.main-prices')) {
		$$_('.main-prices .item input[type="submit"]').forEach( el => {
			el.addEventListener('click', () => {
				wrap.style.display = 'block'
			})
		})
		
	}


	close.addEventListener('click', () => {
		wrap.style.display = "none"
	})


	window.onclick = function(event) {

		if(event.target == wrap) {
			wrap.style.display = 'none'
			
		}
	}

	if($_('.price-table input[type="submit"]')) {

		let button = $_('.price-table input[type="submit"]');


		button.addEventListener('click', event =>{
			wrap.style.display = 'block'
			wrap.querySelector('form p').innerHTML = 'Оставьте свой номер и мы вам расскажем подробнее про цены'
		})

	}


}

function submitForm() {


	let form = $_('footer form');
		form.addEventListener('submit', event => {
			event.preventDefault();
			let data = {
				phone: form.querySelector('input[type="text"]').value
			}
			fetch(CONFIG.php_path+'callback.php', {
				method: 'POST',
				mode: 'cors',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(data)
			})
				.then(response => response.text())
				.then(text => drawResponse(text) )


		})

	function drawResponse(text)	{
		let string = ``;
		if(text == 'success'){
			string = `
				<p style="font-size: 2rem">😄</p>
				<p>Успешно отправлено! Ожидайте звонка менеджера</p>
			`
		} else {
			string = `
				<p style="font-size: 2rem">😞</p>
				<p>Ошибка отправки! Попробуйте позже или наберите нам</p>
			`
		}
		$_('footer form').innerHTML = string
	}

}