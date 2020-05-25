import {$_} from './header-callback';



document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init);

function init() {
	function $$_(element) { return document.querySelectorAll(element)}
	if(!$_('.price-table')) return;

	$$_('.tab-area .head span').forEach(el => {

		el.addEventListener('click', event => {
			let tabName = event.target.classList[0];
			$$_('.tab-area .body .fiz, .tab-area .body .ur').forEach(el => el.style.display = "none")
			$_('.tab-area .body .'+tabName).style.display = "flex"
		})
	})

}