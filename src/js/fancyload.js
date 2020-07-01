import {$_, $$_} from './header-callback';
import {CONFIG} from './config';

document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init);

function init() {
	if($_(('[data-fancybox]'))) loadFancy()
}

function loadFancy(){

	let stack = [
		CONFIG.fancy_path+'/vendor/jquery.min.js',
		CONFIG.fancy_path+'/vendor/jquery.fancybox.min.js',
		CONFIG.fancy_path+'/vendor/loadcss.js',
	]

	load(stack)

	function load(stack) {

		if(stack.length > 0) {

			let next = stack.shift();
			let script = document.createElement('script');
				script.src= next;
				$_('footer .scripts-area').appendChild(script);

				script.onload = () => { load(stack)}

		} else {
			let styles = loadCSS(CONFIG.fancy_path+'/vendor/jquery.fancybox.min.css');
				onloadCSS(styles, () => {
					console.log('стили загружены')
				})
		}

	}
}